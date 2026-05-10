import json
import re
import anthropic


SYSTEM_PROMPT = """אתה מתרגם אקדמי מקצועי המתמחה בתרגום מאמרים מדעיים מאנגלית לעברית.

כללי תרגום:
- תרגם בדיוק ומדויק, שמור על המשמעות המקורית
- שמור על מבנה הפסקאות והמיקוד האקדמי
- נוסחאות מתמטיות, משתנים וסמלים – השאר כפי שהם (אל תתרגם)
- שמות פרטיים, שמות מוסדות וציטוטים ביבליוגרפיים – השאר באנגלית
- מונחים טכניים: תרגם לעברית ואם אין מקבילה מקובלת, כתוב תרגום + מקור באנגלית בסוגריים
- שמור על מספרי עמודים, שנים ומספרים כמות שהם"""


def translate_pages(pages, api_key=None):
    """Translate all page blocks using Claude API, page by page."""
    client = anthropic.Anthropic(api_key=api_key)
    translated_pages = []

    for page in pages:
        blocks = page["blocks"]
        translatable = [b for b in blocks if not b["is_page_number"]]

        if not translatable:
            translated_pages.append(page)
            continue

        texts = [b["text"] for b in translatable]
        translated_texts = _translate_batch(client, texts, page["page_num"])

        # Merge back into blocks
        t_idx = 0
        new_blocks = []
        for block in blocks:
            b = dict(block)
            if block["is_page_number"]:
                b["translated_text"] = block["text"]  # keep original
            else:
                b["translated_text"] = (
                    translated_texts[t_idx] if t_idx < len(translated_texts) else block["text"]
                )
                t_idx += 1
            new_blocks.append(b)

        translated_page = dict(page)
        translated_page["blocks"] = new_blocks
        translated_pages.append(translated_page)
        print(f"  [✓] עמוד {page['page_num']} תורגם")

    return translated_pages


def _translate_batch(client, texts, page_num):
    """Send a batch of text blocks to Claude and return translated list."""
    prompt = f"""להלן בלוקי טקסט מעמוד {page_num} של מאמר אקדמי. תרגם כל בלוק לעברית.
החזר אך ורק מערך JSON עם התרגומים באותו סדר, ללא הסברים נוספים.

בלוקים לתרגום:
{json.dumps(texts, ensure_ascii=False)}

פורמט תשובה: ["תרגום 1", "תרגום 2", ...]"""

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )

    response_text = message.content[0].text.strip()
    return _parse_json_array(response_text, fallback=texts)


def _parse_json_array(text, fallback):
    """Extract a JSON array from the model response."""
    if text.startswith("["):
        try:
            return json.loads(text)
        except json.JSONDecodeError:
            pass

    match = re.search(r"\[.*?\]", text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group())
        except json.JSONDecodeError:
            pass

    return fallback
