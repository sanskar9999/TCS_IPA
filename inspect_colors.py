import fitz

def inspect_colors(pdf_path):
    doc = fitz.open(pdf_path)
    page = doc[0] # first page
    text_dict = page.get_text("dict")
    
    for block in text_dict.get("blocks", []):
        if "lines" in block:
            for line in block["lines"]:
                for span in line["spans"]:
                    text = span["text"].strip()
                    if text:
                        color = span["color"]
                        # print hex color for clarity
                        print(f"Text: {text[:20]}... Color: #{color:06x}")

if __name__ == "__main__":
    inspect_colors("MCQ-Question-and-Answers-1.pdf")
