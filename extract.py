import re
import json

def parse_mcqs(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        text = f.read()

    questions = []
    
    # Split text roughly by 'Q' followed by number and dot
    # We will use regex to find all blocks
    pattern = re.compile(r'(Q\d+\..*?)(?=\nQ\d+\.|$)', re.DOTALL)
    blocks = pattern.findall(text)
    
    for block in blocks:
        block = block.strip()
        # Extract Question text
        q_match = re.match(r'Q\d+\.\s*(.*?)(?=\nA\)|\nB\)|\nC\)|\nD\)|\Z)', block, re.DOTALL)
        if not q_match:
            continue
        question_text = q_match.group(1).strip()
        
        # Extract options
        opts = []
        for opt_letter in ['A', 'B', 'C', 'D']:
            opt_pattern = rf'{opt_letter}\)\s*(.*?)(?=\n[A-D]\)|\nExplanation:|\n■|\Z)'
            o_match = re.search(opt_pattern, block, re.DOTALL)
            if o_match:
                opt_text = o_match.group(1).strip()
                is_correct = '✓' in opt_text or '?' in opt_text  # sometimes checkmark might be parsed weirdly
                opt_text = opt_text.replace('✓', '').strip()
                opts.append({
                    "id": opt_letter,
                    "text": opt_text,
                    "isCorrect": is_correct
                })
        
        # Extract explanation / hint
        exp_match = re.search(r'(?:Explanation:|■)\s*(.*)', block, re.DOTALL)
        hint = exp_match.group(1).strip() if exp_match else "No hint available."
        
        if len(opts) > 0:
            questions.append({
                "question": question_text,
                "options": opts,
                "hint": hint
            })
            
    return questions

if __name__ == "__main__":
    qs = parse_mcqs("Raw_Text1.txt")
    print(f"Extracted {len(qs)} questions.")
    
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("const questionsData = " + json.dumps(qs, indent=2, ensure_ascii=False) + ";\n")
