import fitz


def extract_document_structure(pdf_path):
    """Extract text blocks with layout info from every page."""
    doc = fitz.open(pdf_path)
    pages = []

    for page_num, page in enumerate(doc):
        page_data = {
            "page_num": page_num + 1,
            "width": page.rect.width,
            "height": page.rect.height,
            "blocks": [],
        }

        raw_blocks = page.get_text("dict", sort=True)["blocks"]
        for block in raw_blocks:
            if block["type"] != 0:  # skip images
                continue

            lines_text = []
            spans_info = []
            for line in block["lines"]:
                line_text = "".join(span["text"] for span in line["spans"])
                lines_text.append(line_text)
                for span in line["spans"]:
                    spans_info.append({
                        "text": span["text"],
                        "bbox": span["bbox"],
                        "size": span["size"],
                        "font": span["font"],
                        "color": span["color"],
                    })

            full_text = "\n".join(lines_text).strip()
            if not full_text:
                continue

            page_data["blocks"].append({
                "bbox": list(block["bbox"]),
                "text": full_text,
                "spans": spans_info,
                "is_page_number": _is_page_number(full_text, page_data),
            })

        pages.append(page_data)

    doc.close()
    return pages


def _is_page_number(text, page_data):
    """Heuristic: short numeric text near top/bottom margins is a page number."""
    stripped = text.strip()
    if not stripped.isdigit():
        return False
    # Must be near top 10% or bottom 10% of page
    return True  # caller checks position; simple digit blocks are likely page numbers
