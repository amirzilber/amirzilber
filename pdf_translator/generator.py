import os
import urllib.request
import fitz
from bidi.algorithm import get_display

FONT_DIR = os.path.dirname(os.path.abspath(__file__))
FONT_PATH = os.path.join(FONT_DIR, "NotoSansHebrew-Regular.ttf")
FONT_URL = (
    "https://github.com/googlefonts/noto-fonts/raw/main/"
    "hinted/ttf/NotoSansHebrew/NotoSansHebrew-Regular.ttf"
)

# Fallback: FreeSerif ships on Debian/Ubuntu and supports Hebrew
SYSTEM_FONT_FALLBACKS = [
    "/usr/share/fonts/truetype/freefont/FreeSerif.ttf",
    "/usr/share/fonts/truetype/freefont/FreeSans.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]


def _resolve_font():
    if os.path.exists(FONT_PATH):
        return FONT_PATH

    for path in SYSTEM_FONT_FALLBACKS:
        if os.path.exists(path):
            print(f"  [font] משתמש בגופן מערכת: {path}")
            return path

    print("  [font] מוריד גופן עברי (Noto Sans Hebrew)…")
    try:
        urllib.request.urlretrieve(FONT_URL, FONT_PATH)
        print("  [font] הגופן הורד בהצלחה.")
        return FONT_PATH
    except Exception as e:
        raise RuntimeError(
            f"לא ניתן למצוא גופן עברי. הורד ידנית קובץ TTF לתיקייה {FONT_DIR} "
            f"ושמור אותו כ-NotoSansHebrew-Regular.ttf\nשגיאה: {e}"
        )


def _avg_font_size(block):
    spans = block.get("spans", [])
    sizes = [s["size"] for s in spans if s.get("size", 0) > 0]
    return sum(sizes) / len(sizes) if sizes else 11.0


def _rtl(text):
    """Apply Unicode bidi algorithm for correct RTL display."""
    return get_display(text)


def generate_translated_pdf(original_path, translated_pages, output_path):
    font_path = _resolve_font()

    doc = fitz.open(original_path)

    for page_idx, page_data in enumerate(translated_pages):
        if page_idx >= len(doc):
            break

        page = doc[page_idx]
        page_height = page.rect.height

        # --- Step 1: redact original text blocks that will be replaced ---
        for block in page_data["blocks"]:
            translated = block.get("translated_text", "")
            if not translated.strip():
                continue

            bbox = fitz.Rect(block["bbox"])
            # Expand slightly to cover descenders / ascenders of original font
            bbox_expanded = bbox + (-1, -2, 1, 2)
            annot = page.add_redact_annot(bbox_expanded, fill=(1, 1, 1))

        page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_NONE)

        # --- Step 2: insert Hebrew translations ---
        for block in page_data["blocks"]:
            translated = block.get("translated_text", "")
            if not translated.strip():
                continue

            bbox = fitz.Rect(block["bbox"])
            font_size = _avg_font_size(block)

            # Detect if this block is near the page margins (likely header/footer)
            near_top = bbox.y1 < page_height * 0.08
            near_bottom = bbox.y0 > page_height * 0.92
            if near_top or near_bottom:
                # Keep small font for headers/footers
                font_size = min(font_size, 9)

            rtl_text = _rtl(translated)

            # Try to fit text; shrink font if overflow
            for size in [font_size, font_size * 0.9, font_size * 0.8, 8]:
                rc = page.insert_textbox(
                    bbox,
                    rtl_text,
                    fontname="heb",
                    fontfile=font_path,
                    fontsize=size,
                    align=fitz.TEXT_ALIGN_RIGHT,
                    color=(0, 0, 0),
                )
                if rc >= 0:  # rc < 0 means text overflowed
                    break

    doc.save(output_path, garbage=4, deflate=True)
    doc.close()
    print(f"\n[✓] PDF בעברית נשמר: {output_path}")
