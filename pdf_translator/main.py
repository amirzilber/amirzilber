#!/usr/bin/env python3
"""
PDF Hebrew Translator
---------------------
מתרגם מאמרים אקדמיים מ-PDF אנגלי ל-PDF בעברית תוך שמירה על מבנה העמודים.

שימוש:
    python main.py input.pdf output_hebrew.pdf
    python main.py input.pdf output_hebrew.pdf --pages 1-5
    python main.py input.pdf output_hebrew.pdf --api-key sk-ant-...

משתנה סביבה:
    ANTHROPIC_API_KEY  – מפתח ה-API (חלופה ל--api-key)
"""

import argparse
import os
import sys

from extractor import extract_document_structure
from translator import translate_pages
from generator import generate_translated_pdf


def parse_page_range(page_str):
    pages = set()
    for part in page_str.split(","):
        part = part.strip()
        if "-" in part:
            start, end = part.split("-", 1)
            pages.update(range(int(start), int(end) + 1))
        else:
            pages.add(int(part))
    return pages


def main():
    parser = argparse.ArgumentParser(
        description="מתרגם מאמרים אקדמיים מ-PDF לעברית תוך שמירה על מבנה העמודים",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument("input", help="נתיב קובץ PDF המקורי")
    parser.add_argument("output", help="נתיב קובץ PDF המתורגם לעברית")
    parser.add_argument("--api-key", help="מפתח Anthropic API")
    parser.add_argument(
        "--pages",
        help="עמודים לתרגום (לדוגמה: '1-5' או '1,3,7'). ברירת מחדל: כל העמודים",
        default=None,
    )

    args = parser.parse_args()

    if not os.path.exists(args.input):
        print(f"[שגיאה] קובץ לא נמצא: {args.input}")
        sys.exit(1)

    api_key = args.api_key or os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print(
            "[שגיאה] נדרש מפתח API.\n"
            "השתמש ב--api-key או הגדר את משתנה הסביבה ANTHROPIC_API_KEY"
        )
        sys.exit(1)

    print(f"\n[1/3] מחלץ טקסט מ: {args.input}")
    pages = extract_document_structure(args.input)
    print(f"      נמצאו {len(pages)} עמודים")

    if args.pages:
        wanted = parse_page_range(args.pages)
        pages = [p for p in pages if p["page_num"] in wanted]
        print(f"      מתרגם עמודים: {sorted(wanted)}")

    total_blocks = sum(len(p["blocks"]) for p in pages)
    print(f"\n[2/3] מתרגם {total_blocks} בלוקי טקסט לעברית…")
    translated = translate_pages(pages, api_key=api_key)

    print(f"\n[3/3] יוצר PDF בעברית…")
    generate_translated_pdf(args.input, translated, args.output)

    print("\nהתרגום הושלם בהצלחה!")


if __name__ == "__main__":
    main()
