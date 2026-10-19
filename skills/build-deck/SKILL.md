---
name: build-deck
description: End-to-end pipeline for creating or reviewing a slide deck in a fixed order, from brief and rules to structure, HTML, wording pass and render QA. Use when asked to build a deck, make a presentation about a topic, or review an existing deck against the standard.
license: MIT
metadata:
  version: "1.1"
  author: Benjamin Tayar
  method: pm-deck-and-writing-skills
---

# Build deck

> The single entry point for making a deck: it runs the editorial skills in a fixed order so a deck comes out right without anyone having to remember each rule.

## When to use

- A new deck: "build a deck about X", "make a presentation for the steering group".
- A review of an existing deck against the standard.
- Not for recurring decks that have their own dedicated skill (weekly updates, recurring readouts); those follow their skill. This one is for new or one-off decks.

Companion skills: `slide-writing-rules` (text), `plain-language` (clarity), `anti-slop` (natural prose), `concise-slide` (breathing slides), `deck-rebuild-blueprint` (handoff document).

## Inputs

- The request: topic, central message, audience, sources, destination. Ask only for what cannot be inferred.
- A **reference deck** kept in your project: an approved file that shows the standard for structure, components and tone. When in doubt about CSS or wording, open it and follow it.
- The design tokens file of your deck (colors, type scale, dark and light surfaces); see `templates/style-and-design.md`.
- `templates/deck-outline.md` for the structure step.

## Procedure

1. **Understand the request.** Pull the topic and central message (what the deck must prove or ask for), the audience (it goes on the cover metadata line as `DD Mon YYYY | Audience` and sets the register: executives want lean, an all-hands wants explanatory), the sources (read them before structuring; figures come only from verifiable sources) and the destination (one folder per topic, dated editions, file name `kebab-title_YYYY-MM-DD.html` with a matching `.pdf`). Gate: you can state the central message in one sentence and name the single decision or action the audience takes.
2. **Load the rules, in order.** `slide-writing-rules` for titles, capitalization, anonymity, takeaways and bold; then the design tokens file; while drafting, `plain-language` for clarity and `anti-slop` for natural prose.
3. **Structure.** Fill `templates/deck-outline.md` with the base sequence below. Gate: each slide answers a different question (Rule 11 of `slide-writing-rules`).
4. **Build the HTML** to the requirements below.
5. **Final wording pass**, before QA: takeaway labels specific and varied, never "How to read this", never repeated on consecutive slides; two to four bold fragments per slide and the scan test; leads of two lines at most; redundancy sweep; concrete dates; no long dash.
6. **QA by render** (mandatory): one PDF page per slide plus a screenshot of every slide, inspected. Fix and re-render until clean. Only then deliver the HTML and the PDF.
7. **Close out.** Report in two to four bullets: structure, editorial decisions, QA result (page count, slides corrected).

## Rules

### Base sequence

Adapt the middle to the topic and keep the anchors.

1. **Dark cover.** Title in caps via CSS, eyebrow, a two to three line subtitle, metadata line.
2. **Map (light).** "What this material answers", one bullet per question in the request.
3. **Body** with alternating dark and light surfaces. Never more than four light slides in a row. Insert a breathing slide (big numbers or a statement, see `concise-slide`) after dense stretches.
4. **KPI slide** when there are indicators (pattern below).
5. **Dark close.** Numbered next steps, **each with a date**, with the requested decision first.

**KPI slide pattern.** One card per indicator: name as a caps label, then the **current value large**, then `TARGET > x%`, then a `Gap: N pp` line (target minus current, computed). The **largest gap is highlighted** with an accent border, accent-colored value and a `LARGEST GAP` tag. The takeaway translates the largest gap into business language and names the action that closes it. Never attribute a KPI to an agent or team without evidence in the spec.

**Product or agent slide pattern.** Eyebrow with priority and status, then the product name as title, a one-line mission, a grid of `What it delivers` (four bullets) and `What the user achieves` (two bullets), three KPI chips, and a takeaway with the limit or condition.

### HTML requirements

- A `.deck` container with scroll-snap; each `.slide` is full viewport height with clamped padding; styling comes from your tokens.
- **Self-healing entry:** content is visible by default. Animation is a bonus and never hides content if the script fails.
- **Navigation:** previous and next buttons, arrow keys, Page Up and Down, Space, Home and End. Clicking content does nothing.
- **Hash per slide:** `#s7` opens slide 7. This enables screenshot QA.
- Progress bar and `n / total` counter, with the static initial counter set to the correct total.
- **Print CSS:** `@page { size: 1280px 720px; margin: 0 }`, `.slide { width: 1280px; height: 720px; page-break-after: always }`, `print-color-adjust: exact`, hide the bar and counter.
- Slide takeaway is a `.concl` block with an accent left border and a specific label.
- Data components (goal-attainment bars, counters, radial gauges) are hand-written SVG, CSS and JS with no external library, deterministic in PDF, with the final value already in the HTML.

### QA by render

Render each slide to PNG with a headless browser and look at it. Any Chromium-based browser (Chrome, Chromium, Edge) accepts the same flags; only the binary name and path differ by system (`google-chrome` or `chromium` on Linux, the Chrome application binary on macOS, `chrome.exe` or `msedge.exe` on Windows). Always give the headless browser **its own profile directory**: without one it attaches to your open browser profile and can close your windows when the render ends. Use a fresh temp path per call.

```sh
# 1) one PDF, one page per slide
chromium --headless=new --disable-gpu --no-first-run --user-data-dir=/tmp/deckpdf \
  --no-pdf-header-footer --print-to-pdf=deck.pdf "file:///path/to/deck.html"

# 2) page count must equal slide count
python -c "import re; print(re.findall(rb'/Count (\d+)', open('deck.pdf','rb').read()))"

# 3) one screenshot per slide, inspect each
for i in $(seq 1 12); do
  chromium --headless=new --disable-gpu --no-first-run --user-data-dir=/tmp/deckqa$i \
    --window-size=1280,720 --screenshot=qa/s$i.png "file:///path/to/deck.html#s$i"
done
```

On Windows, run the same flags in PowerShell with the browser path quoted and `$env:TEMP` in place of `/tmp`.

In every screenshot check: nothing cut off or overlapping, short number labels, dark and light alternating, bold visible. Fix and re-render until clean.

### Variant: client assessment decks

When the deck is an assessment or readout for a client, skip the base sequence and use a client-facing pattern: dark cover, light divider with numeral and agenda, one slide per finding, no labeled takeaway box (the reading goes in a plain note), noun-phrase titles, a confidence marker on every number and a `Source` line in the footer of each slide, no visible internal method, numeric fidelity to the original diagnosis. The wording pass and the render QA still apply.

### Limits

- Never change figures or invent a KPI or attribution without a source. A data gap becomes a named open item on the slide, never an invented number.
- Decks with their own dedicated skill (weekly updates, recurring readouts) follow that skill.

## Checklist

- [ ] Central message and decision stated in one sentence
- [ ] Sources read; every figure traceable
- [ ] Structure anchors present: cover, map, close with dated next steps
- [ ] Editorial rules applied; scan test passed
- [ ] Navigation works by button, key and hash; click does nothing
- [ ] PDF page count equals slide count
- [ ] Every slide screenshot inspected

## Example

Acme Field Sales Assistant, fictional.

**Weak request, taken as is**

> "Make a deck about the assistant for next week." The deck opens with "Who we are", has fourteen slides, three of them about the logging gap, no date on any next step and a takeaway labeled "How to read this" on every slide.

**Corrected brief, before any slide is built**

| Field | Value |
|---|---|
| Central message | A four-week pilot with one team can lift same-day CRM logging from 52% to at least 80% without adding work for reps |
| Decision requested | Approve a four-week pilot with the Northern region team, starting 2 June |
| Audience | Sales leadership (executive register); metadata line `14 May 2026 | Sales leadership` |
| Sources | CRM activity export (last 8 weeks), rep time survey, pilot design notes |
| Destination | `pilot-proposal/acme-assistant-pilot_2026-05-14.html` and `.pdf` |

From this brief the outline has eight slides, each answering one question, the logging gap has one owner slide, every next step carries a date and the decision comes first. The full outline is in `examples/acme-field-sales-assistant-outline.md`.

## Definition of done

HTML and PDF delivered, page count verified, every slide visually checked, and the report lists what changed.

## Related

- `slide-writing-rules`: the editorial rules loaded in step 2 and applied in step 5.
- `concise-slide`: the breathing slide inserted after dense stretches.
- `plain-language` and `anti-slop`: the clarity and natural-prose passes while drafting.
- `deck-rebuild-blueprint`: the handoff document when engineering rebuilds the deck.
- `templates/deck-outline.md` and `templates/style-and-design.md`: the structure and tokens.
