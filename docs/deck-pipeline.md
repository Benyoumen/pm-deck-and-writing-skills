# Deck pipeline

How the skills in this repo fit together, from request to delivered deck.

```mermaid
flowchart TD
    A["Agree the message and the decision"] --> B["Outline: one question per slide"]
    B --> C["Write the slides to the rules"]
    C --> D["Build the deck"]
    D --> E{"Nothing cut off or overlapping?"}
    E -- "no" --> D
    E -- "yes" --> F["Deliver the deck and the PDF"]
    F -. "only if engineering rebuilds it" .-> G["Blueprint for engineering"]
```

*From one agreed message to a delivered deck in six steps; the blueprint exists only for a deck that engineering will rebuild.*

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
