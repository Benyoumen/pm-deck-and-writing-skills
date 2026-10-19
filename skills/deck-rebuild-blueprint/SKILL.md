---
name: deck-rebuild-blueprint
description: Produces or reviews the rebuild document for a deck, the slide-by-slide blueprint a tech lead uses to recreate the presentation (by hand or through agents), plus a separate style-and-design file. Defines the two-file structure, the two layers per slide (Briefing and Build plan) and the writing register. Use when creating, regenerating or reviewing a rebuild document, or when handing a deck over to engineering.
---

# Deck rebuild blueprint

The blueprint describes an HTML deck **slide by slide**, with enough fidelity for a tech lead to rebuild the same presentation, alone or through several agents. It is a **technical briefing and architecture document** for engineering. Write it as one, not as a product-manager artifact.

Use with `slide-writing-rules` (text), `anti-slop` (natural prose) and `plain-language` (clarity). This skill decides what is specific to the blueprint.

## Output: two files, not one

1. **`<deck>.blueprint.md`**, per slide in two layers (below). At the top: the slide index and the **data-origin rule** (which source feeds which kind of number; this is a data rule, not a style rule). It points to the style file right after the index.
2. **`<deck>.style-and-design.md`**, the design system shared by every slide: palette, type scale, slide system, component catalog, usage conventions. It is the stable reference that changes little between editions. The tech lead reads it once and reuses it. Each slide in the blueprint cites CSS classes by name; the definitions live here.

Do not repeat the design system inside the blueprint.

## The two layers of every slide

Exact labels:

```
### Slide N: Title

#### Briefing
- ...

#### Build plan
**Objective** ...
```

### Briefing: the intent, kept short

Why the slide exists and what it must deliver. Each item takes one or two lines. Cut anything that is not on the slide. Standard items:

- **Role.** Where the slide sits in the story and the question it answers.
- **What it shows.** The analytical point: what the numbers say and the decision they support. Only what is on the slide.
- **Data origin.** Which source feeds it, by the document-level rule. Cite only fields and sources that exist.
- **Tone.** Title capitalization, anonymity of people, takeaway pattern.
- **Edition values.** The sample values of this edition, which change next time.
- **Definition of done.** Objective checks: figure matches the snapshot, percentages reconcile, personal names removed.

Do not create grand sections such as "the intelligence behind it" or "what the director expects". Fold that into "What it shows".

### Build plan: the construction

The technical plan, faithful to the HTML. Sections: **Objective**, **Layout**, **Exact copy** (verbatim), **Sources**, **Charts and tables**, **CSS components** (by name; definitions in the style file), **Regenerate** (what is fixed versus what data changes, and where to pull it from). Technical detail is welcome here: bar-height formulas, source filters behind a number, reconciliation gotchas.

## Writing register (the rule that matters most)

The document is technical and goes to a tech lead. The text fails when it sounds amateur or machine-written.

1. **No familiar, casual or figurative tone.** Never write conversational phrases such as "the size of the hole", "a cover that does not beat around the bush", "no makeup", "put the scoreboard on the table". Use the direct term: "the gap to close", "the cover states the gap, the scope and the cut-off date".
2. **Describe only what is on the slide.** Never describe what the slide lacks. Cut sentences such as "there is no deal-level detail on this slide (see the pipeline slides)". If a datum is not on the slide, it does not enter the plan.
3. **Do not invent or extrapolate methods.** Do not attribute frameworks or criteria that are not literally on the slide. If the deck uses a component (criteria tags on a best-cases slide), describe the real component and nothing imported.
4. **Simplify.** Short bullets, no preamble, no meta-narration. Each line must carry information the tech lead needs to build. Cut detail that does not change the rebuild.
5. **Anonymous people, transparent systems.** Because the audience is internal engineering, the document can and should name systems, fields, files and snapshots. A person's name is scaffolding: decision makers, reps and deal owners appear only as an origin mark and **leave the final version**. The Definition of done says so; the briefing does not repeat the name.
6. **No long dash, active voice, short sentences.** A source marker (a superscript or small icon) is scaffolding for the origin of data; describe it as such and note that it leaves when the integration exists.

## Pipeline (reference, adapt to your tools)

Split the deck into one file per slide, run a per-slide extraction (extract the build plan, then verify with three lenses, then repair), insert the Briefing blocks, and assemble the blueprint (index plus body) together with the separate style file. Fixed decisions: dual fidelity (a faithful replica plus a regeneration note), work-tracking tools only propose items and never write, and no translation of the copy.

## How to review an existing blueprint

1. Confirm the structure: two files; index, data-origin rule and style pointer in the blueprint; design system only in the style file.
2. Every slide has the two labeled layers.
3. Pass each Briefing through the register rules: casual tone (rule 1), negative-space sentences (rule 2), invented methods (rule 3); then tighten (rule 4).
4. Every figure in a Briefing exists on the slide and matches the source. Personal names are marked as scaffolding that leaves.
5. Do not alter the build plan (verbatim copy, formulas, CSS) when adjusting register. The text rules apply to the Briefing and the prose, not to values.
6. List what changed in two to four bullets.

## Checklist

- [ ] Two files, with the design system only in the style file
- [ ] Each slide has Briefing and Build plan
- [ ] Briefing items are one or two lines each
- [ ] No casual phrasing; no description of what the slide lacks; no invented method
- [ ] Verbatim copy and formulas untouched
- [ ] Personal names flagged as scaffolding

## Definition of done

A tech lead who never saw the original deck can rebuild every slide from the two files, and a reviewer finds no sentence that describes something absent from the slide.

## Limits

- Do not change figures, verbatim copy, formulas or CSS semantics when simplifying text.
- Do not translate; keep the language of the deck.
- Company, product and category names stay; anonymity applies to people.
