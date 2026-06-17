import fitz
import json
import re

def parse_pdf_mcqs(pdf_path):
    doc = fitz.open(pdf_path)
    questions = []
    
    current_question = ""
    current_options = []
    current_option_text = ""
    current_option_letter = ""
    current_option_correct = False
    
    def save_option():
        nonlocal current_option_text, current_option_letter, current_option_correct, current_options
        if current_option_letter and current_option_text:
            current_options.append({
                "id": current_option_letter.upper(),
                "text": current_option_text.strip(),
                "isCorrect": current_option_correct
            })
        current_option_text = ""
        current_option_letter = ""
        current_option_correct = False

    def save_question():
        nonlocal current_question, current_options, questions
        if current_question and len(current_options) >= 2:
            questions.append({
                "question": current_question.strip(),
                "options": current_options,
                "hint": "No hint available."
            })
        current_question = ""
        current_options = []

    for page_num in range(len(doc)):
        page = doc[page_num]
        text_dict = page.get_text("dict")
        
        for block in text_dict.get("blocks", []):
            if "lines" not in block:
                continue
                
            for line in block["lines"]:
                line_text = ""
                # Determine main color of the line
                # Black = 0x000000 (0)
                # Correct = 0x002060
                # Wrong = 0xe36c0a
                colors = []
                for span in line["spans"]:
                    text = span["text"]
                    if text.strip():
                        colors.append(span["color"])
                    line_text += text
                
                line_text_stripped = line_text.strip()
                
                if not line_text_stripped:
                    continue
                
                # Assume the most common color in the line represents its type
                # Fallback to black if empty
                main_color = 0
                if colors:
                    main_color = max(set(colors), key=colors.count)
                
                # Filter out headers/footers
                skip_phrases = ["Correct Answer", "Wrong Answer", "Use these MCQs as a reference purpose.", "All the Best", "Use these MCQs as a reference purpose", "Note: Please do not share this PDF to any other sources.", "Sharing is strictly prohibited", "Note: This PDF shouldn't be shared to any other sources.", "Sharing is strictly prohibited."]
                if line_text_stripped in skip_phrases or "P a g e" in line_text_stripped or re.match(r'^\d+\s*\|\s*P\s*a\s*g\s*e$', line_text_stripped):
                    continue
                
                if len(line_text_stripped) < 20 and line_text_stripped in ["KYT", "BizSkill", "BizSkills", "Unix", "Java UI", "Design Algorithm", "Design Algorithms", "Java", "SQL", "RiO", "Python", "PLSQL", "DOT NET", "ADO.Net and Web API", "Miscellaneous", "C#"]:
                    continue

                # If color is black (or near black, 0), it's question text.
                # If color is not black, it's an option.
                # Wait, what if question text has some color? Let's check regex first for option.
                opt_match = re.match(r'^([a-f])\.\s*(.*)', line_text_stripped, re.IGNORECASE)
                
                if opt_match and main_color != 0:
                    # It's a new option
                    save_option()
                    current_option_letter = opt_match.group(1)
                    current_option_text = opt_match.group(2)
                    current_option_correct = (main_color == 0x002060)
                elif current_option_letter and main_color != 0:
                    # Continuation of option
                    current_option_text += " " + line_text_stripped
                    if main_color == 0x002060:
                        current_option_correct = True
                else:
                    # It's a question or continuation of a question
                    if len(current_options) > 0:
                        save_option()
                        save_question()
                    
                    current_question += " " + line_text_stripped

    save_option()
    save_question()
    
    return questions

if __name__ == "__main__":
    new_qs = parse_pdf_mcqs("MCQ-Question-and-Answers-1.pdf")
    print(f"Extracted {len(new_qs)} new questions from the PDF.")
    
    with open("questions.js", "r", encoding="utf-8") as f:
        content = f.read()
    
    json_str = content.replace("const questionsData = ", "").rstrip().rstrip(";")
    existing_qs = json.loads(json_str)
    
    print(f"Found {len(existing_qs)} existing questions.")
    
    combined_qs = existing_qs + new_qs
    print(f"Total questions now: {len(combined_qs)}.")
    
    with open("questions.js", "w", encoding="utf-8") as f:
        f.write("const questionsData = " + json.dumps(combined_qs, indent=2, ensure_ascii=False) + ";\n")
