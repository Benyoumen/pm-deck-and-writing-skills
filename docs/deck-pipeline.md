# Deck pipeline

How the skills in this repo fit together, from request to delivered deck.

```mermaid
flowchart TD
    A[Request] --> B[Step 0: brief<br/>message, audience, sources, destination]
    B --> G0{Gate: message in one sentence<br/>and one decision named?}
    G0 -- no --> B
    G0 -- yes --> C[Step 1: load rules<br/>slide-writing-rules, plain-language, anti-slop]
    C --> D[Step 2: outline<br/>templates/deck-outline.md]
    D --> G1{Gate: one question per slide,<br/>delete test passed?}
    G1 -- no --> D
    G1 -- yes --> E[Step 3: build HTML<br/>navigation, hash, print CSS]
    E --> F[Step 4: wording pass<br/>takeaway labels, bold, scan test]
    F --> H[Step 5: render QA<br/>PDF pages = slides, screenshot of each slide]
    H --> G2{Gate: nothing cut off,<br/>nothing overlapping?}
    G2 -- no --> E
    G2 -- yes --> I[Step 6: deliver HTML and PDF<br/>report in 2 to 4 bullets]
    I --> J{Handoff to engineering?}
    J -- yes --> K[deck-rebuild-blueprint<br/>blueprint plus style-and-design]
    J -- no --> L[Done]
```

## Which skill runs where

| Stage | Skill | Output |
|---|---|---|
| Brief and structure | `build-deck` | outline using `templates/deck-outline.md` |
| Titles, tone, takeaways | `slide-writing-rules` | text that passes the checklist |
| Breathing slides | `concise-slide` | one-idea slides |
| Clarity for non-specialists | `plain-language` | jargon defined, examples added |
| Natural prose | `anti-slop` | text without AI tells |
| Customer-facing proposal | `tech-pitch` | six-block script and deck |
| Stakeholder messages around the deck | `pm-communication` | the email or update that carries it |
| Handoff | `deck-rebuild-blueprint` | blueprint and style files |

## Gates in one place

1. **Brief gate:** the central message fits in one sentence and one decision is named.
2. **Outline gate:** every slide answers a different question; every figure has a unit and a source.
3. **Render gate:** PDF page count equals slide count, and every slide screenshot shows no overflow or overlap.
