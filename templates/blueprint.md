# Deck blueprint template: `<deck>.blueprint.md`

Rebuild document for engineering. The design system lives in `<deck>.style-and-design.md`; do not repeat it here. Write in a technical register (see `skills/deck-rebuild-blueprint`).

## Index

| Slide | Title | Surface | Primary source |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

## Data-origin rule

State, once, which source feeds which kind of number (for example: "pipeline figures come from the CRM snapshot of the cut-off date; targets come from the planning sheet"). Cite only sources and fields that exist.

## Style reference

See `<deck>.style-and-design.md` for palette, type scale, slide system and component catalog. Classes are cited by name below.

---

### Slide N: Title

#### Briefing
- **Role.** Where it sits in the story and the question it answers.
- **What it shows.** The analytical point and the decision it supports. Only what is on the slide.
- **Data origin.** Source by the document-level rule. Only existing fields.
- **Tone.** Title capitalization, anonymity of people, takeaway pattern.
- **Edition values.** Sample values for this edition (what changes next time).
- **Definition of done.**
  - [ ] Every figure matches the snapshot
  - [ ] Percentages reconcile
  - [ ] Personal names removed from the final version

#### Build plan
**Objective.** One sentence.

**Layout.** Grid, regions and reading order.

**Exact copy.** Verbatim text of every element, in reading order.

**Sources.** Field or file per figure.

**Charts and tables.** Type, axes, formulas (for example bar height = value / max * available height), sorting, filters.

**CSS components.** `.concl`, `.kpi-card` and others by name. Definitions are in the style file.

**Regenerate.** Fixed content versus data that changes, and where to pull each value from.
