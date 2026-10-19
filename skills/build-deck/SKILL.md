---
name: build-deck
description: End-to-end pipeline for creating or reviewing a slide deck so that format and content come out consistent. Runs in a fixed order: understand the request, load the editorial rules, lay out the structure, build the HTML, do the final wording pass, then verify by render (one PDF page per slide plus a screenshot of every slide). Use when asked to "build a deck", "make a presentation about X", or to review an existing deck against your standard.
---

# Build deck: the pipeline

This is the single entry point for making a deck. It does not replace the editorial skills. It runs them **in a fixed order** so a deck comes out right without depending on anyone remembering each rule.

Companion skills: `slide-writing-rules` (text), `plain-language` (clarity), `anti-slop` (natural prose), `concise-slide` (breathing slides), `deck-rebuild-blueprint` (handoff document).

Keep one **reference deck** in your project: an approved file that shows the standard for structure, components and tone. When in doubt about CSS or wording, open it and follow it.

## Step 0: Understand the request

Pull these from the request. Ask only for what cannot be inferred.

1. **Topic and central message.** What must the deck prove or ask for?
2. **Audience.** It goes on the cover metadata line (`DD Mon YYYY | Audience`) and sets the register: executives want lean, an all-hands wants explanatory.
3. **Sources.** Read them before structuring. Figures come only from verifiable sources.
4. **Destination.** One folder per topic, dated editions, file name `kebab-title_YYYY-MM-DD.html` with a matching `.pdf`.

Gate: you can state the central message in one sentence and name the single decision or action the audience takes.

## Step 1: Load the rules, in order

1. `slide-writing-rules`: titles, capitalization, anonymity, takeaways, bold.
2. Your design tokens file: colors, type scale, dark and light surfaces.
3. While drafting: `plain-language` for clarity, `anti-slop` for natural prose.

## Step 2: Structure

Base sequence. Adapt the middle to the topic and keep the anchors.

1. **Dark cover.** Title in caps via CSS, eyebrow, a two to three line subtitle, metadata line.
2. **Map (light).** "What this material answers", one bullet per question in the request.
3. **Body** with alternating dark and light surfaces. Never more than four light slides in a row. Insert a breathing slide (big numbers or a statement, see `concise-slide`) after dense stretches.
4. **KPI slide** when there are indicators (pattern below).
5. **Dark close.** Numbered next steps, **each with a date**, with the requested decision first.

**KPI slide pattern.** One card per indicator: name as a caps label, then the **current value large**, then `TARGET > x%`, then a `Gap: N pp` line (target minus current, computed). The **largest gap is highlighted** with an accent border, accent-colored value and a `LARGEST GAP` tag. The takeaway translates the largest gap into business language and names the action that closes it. Never attribute a KPI to an agent or team without evidence in the spec.

**Product or agent slide pattern.** Eyebrow with priority and status, then the product name as title, a one-line mission, a grid of `What it delivers` (four bullets) and `What the user achieves` (two bullets), three KPI chips, and a takeaway with the limit or condition.

Gate: each slide answers a different question (Rule 11 of `slide-writing-rules`).

## Step 3: HTML requirements

- A `.deck` container with scroll-snap; each `.slide` is full viewport height with clamped padding; styling comes from your tokens.
- **Self-healing entry:** content is visible by default. Animation is a bonus and never hides content if the script fails.
- **Navigation:** up and down buttons, arrow keys, Page Up and Down, Space, Home and End. Clicking content does nothing.
- **Hash per slide:** `#s7` opens slide 7. This enables screenshot QA.
- Progress bar and `n / total` counter, with the static initial counter set to the correct total.
- **Print CSS:** `@page { size: 1280px 720px; margin: 0 }`, `.slide { width: 1280px; height: 720px; page-break-after: always }`, `print-color-adjust: exact`, hide the bar and counter.
- Slide takeaway is a `.concl` block with an accent left border and a specific label.
- Data components (goal-attainment bars, counters, radial gauges) are hand-written SVG, CSS and JS with no external library, deterministic in PDF, with the final value already in the HTML.

## Step 4: Final wording pass (before QA)

- Takeaway labels specific and varied, never "How to read this", never repeated on consecutive slides.
- Two to four bold fragments per slide; run the scan test.
- Leads of two lines at most; redundancy sweep; concrete dates; no long dash.

## Step 5: QA by render (mandatory)

Always give the headless browser its own profile directory. Without one it attaches to your open browser profile and can close your windows when the render ends. Use a fresh short temp path per call.

```powershell
$src = "C:\work\deck.html"; $url = "file:///$($src -replace '\\','/')"
$pdf = $src -replace '\.html$','.pdf'
$browser = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $browser --headless=new --disable-gpu --no-first-run --user-data-dir="$env:TEMP\deckpdf" --no-pdf-header-footer --print-to-pdf="$pdf" $url
# 1) page count must equal slide count
python -c "import re; print(re.findall(rb'/Count (\d+)', open(r'$pdf','rb').read()))"
# 2) one screenshot per slide, inspect each
foreach ($i in 1..12) { & $browser --headless=new --disable-gpu --no-first-run --user-data-dir="$env:TEMP\deckqa$i" --window-size=1280,720 --screenshot="$env:TEMP\deck_qa\s$i.png" "$url#s$i" }
```

In every screenshot check: nothing cut off or overlapping, short number labels, dark and light alternating, bold visible. Fix and re-render until clean. Only then deliver the HTML and the PDF.

## Step 6: Close out

Report in two to four bullets: structure, editorial decisions, QA result (page count, slides corrected).

## Variant: client assessment decks

When the deck is an assessment or readout for a client, skip the base sequence and use a client-facing pattern: dark cover, light divider with numeral and agenda, one slide per finding, no labeled takeaway box (the reading goes in a plain note), noun-phrase titles, a confidence marker on every number and a `Source` line in the footer of each slide, no visible internal method, numeric fidelity to the original diagnosis. Steps 4 and 5 still apply.

## Checklist

- [ ] Central message and decision stated in one sentence
- [ ] Sources read; every figure traceable
- [ ] Structure anchors present: cover, map, close with dated next steps
- [ ] Editorial rules applied; scan test passed
- [ ] Navigation works by button, key and hash; click does nothing
- [ ] PDF page count equals slide count
- [ ] Every slide screenshot inspected

## Definition of done

HTML and PDF delivered, page count verified, every slide visually checked, and the report lists what changed.

## Limits

- Never change figures or invent a KPI or attribution without a source. A data gap becomes a named open item on the slide, never an invented number.
- Decks with their own dedicated skill (weekly updates, recurring readouts) follow that skill. This one is for new or one-off decks.
