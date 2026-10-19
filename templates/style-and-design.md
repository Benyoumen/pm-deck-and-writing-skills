# Style and design template: `<deck>.style-and-design.md`

The stable design reference shared by every slide of a deck family. It changes rarely between editions. The blueprint cites components by class name and points here for definitions.

## 1. Stage and slide system

- Fixed stage 1280 by 720 px (16:9). All sizes in px inside the stage; the stage scales to the viewport with a single scale variable.
- Two surfaces: **dark** and **light**. Cover and close are dark. Alternate in the body; never more than four light slides in a row.
- Safe margins: 64 px left and right, 48 px top and bottom.
- Print: `@page { size: 1280px 720px; margin: 0 }`, one slide per page, `print-color-adjust: exact`.

## 2. Tokens

```css
:root {
  --bg-light: #FFFFFF;
  --bg-dark: #0A0A0A;
  --ink: #111111;
  --ink-60: rgba(17,17,17,.6);
  --ink-10: rgba(17,17,17,.1);
  --white: #FFFFFF;
  --white-60: rgba(255,255,255,.6);
  --accent: #0B6BFF;   /* one accent only */
  --ok: #1A7F4B;
  --warn: #B26A00;
}
```

Use one accent. Success and warning colors appear only in status chips.

## 3. Type scale

| Role | Size | Weight | Notes |
|---|---|---|---|
| Cover title | 64 px | 900 | caps via CSS |
| Slide title | 40 px | 800 | sentence case, 6 words max |
| Eyebrow | 12 px | 700 | caps, wide tracking, 6 words max |
| Body | 16 px | 400 | line height 1.45 |
| Card body | 14 px | 400 | |
| Big number | 88 px | 900 | short token only (`38%`, `3x`) |
| Footnote and source | 11 px | 400 | |

One sans-serif family. Bold marks key points; on dark surfaces bold is pure white over body at 60 percent white.

## 4. Component catalog

| Class | Purpose | Rules |
|---|---|---|
| `.eyebrow` | context line above the title | accent color, caps |
| `.concl` | takeaway block | accent left border, specific label, one paragraph |
| `.kpi-card` | one indicator: label, current value, target, gap | largest gap gets an accent border and a tag |
| `.chip` | small status or value tag | never more than three per card |
| `.fnode`, `.fout` | concise-slide flow and result band | see `skills/concise-slide` |
| `.note` | plain unlabeled paragraph for client decks | replaces `.concl` in assessments |
| `.source` | footer source line | one per slide when figures appear |

## 5. Usage conventions

- One idea per slide; one takeaway block at the foot.
- A number label is a short token. A long comparison goes in the text.
- Two to four bold fragments per slide.
- A confidence or source marker on every figure when the deck is client-facing.
- Motion is optional and self-healing: the final state is in the HTML, and `prefers-reduced-motion` is respected.

## 6. Navigation

Fixed previous and next buttons, arrow keys, Page Up and Down, Space, Home and End, `#sN` hash, progress bar, `n / total` counter. Clicking content does nothing.
