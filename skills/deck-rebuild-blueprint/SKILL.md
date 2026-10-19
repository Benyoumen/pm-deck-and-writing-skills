---
name: deck-rebuild-blueprint
description: Produces or reviews the two-file rebuild document, a slide-by-slide blueprint plus a style-and-design file, that a tech lead uses to recreate a deck by hand or through agents. Use when handing a deck over to engineering, or when creating, regenerating or reviewing a blueprint.
license: MIT
metadata:
  version: "1.1"
  author: Benjamin Tayar
  method: pm-deck-and-writing-skills
---

# Deck rebuild blueprint

> A technical briefing and architecture document, slide by slide, with enough fidelity for a tech lead to rebuild the same deck alone or through several agents.

## When to use

- Handing a finished deck over to engineering for rebuild, templating or automation.
- Regenerating a deck for a new edition from the same structure.
- Reviewing an existing blueprint for structure, fidelity and register.

Write it as a document for engineering, not as a product-manager artifact. Use with `slide-writing-rules` (text), `anti-slop` (natural prose) and `plain-language` (clarity); this skill decides what is specific to the blueprint.

## Inputs

- The delivered deck (HTML, and the PDF if it exists).
- The data sources behind the figures and the snapshot of the current edition.
- The design tokens of the deck (see `templates/style-and-design.md`).
- `templates/blueprint.md` for the document structure.

## Procedure

1. Split the deck into one file per slide.
2. For each slide, extract the **Build plan**: objective, layout, exact copy verbatim, sources, charts and tables with their formulas, CSS components by name, what regenerates.
3. Verify each plan with three lenses (fidelity to the HTML, data origin, register) and repair.
4. Write the **Briefing** for each slide, in the items below, one or two lines each.
5. Assemble the blueprint: index, data-origin rule, style pointer, then the body. Write the separate style-and-design file once, for the whole deck family.
6. Review the result with the review steps below and list what changed in two to four bullets.

Fixed decisions for the pipeline: dual fidelity (a faithful replica plus a regeneration note), work-tracking tools only propose items and never write, and no translation of the copy.

## Rules

### Two files, not one

1. **`<deck>.blueprint.md`**, per slide in two layers. At the top: the slide index and the **data-origin rule** (which source feeds which kind of number; a data rule, not a style rule). It points to the style file right after the index.
2. **`<deck>.style-and-design.md`**, the design system shared by every slide: palette, type scale, slide system, component catalog, usage conventions. It is the stable reference that changes little between editions. The tech lead reads it once and reuses it. Each slide in the blueprint cites CSS classes by name; the definitions live here.

Do not repeat the design system inside the blueprint.

### The two layers of every slide

Exact labels:

```
### Slide N: Title

#### Briefing
- ...

#### Build plan
**Objective** ...
```

**Briefing: the intent, kept short.** Why the slide exists and what it must deliver. Each item takes one or two lines. Cut anything that is not on the slide.

- **Role.** Where the slide sits in the story and the question it answers.
- **What it shows.** The analytical point: what the numbers say and the decision they support. Only what is on the slide.
- **Data origin.** Which source feeds it, by the document-level rule. Cite only fields and sources that exist.
- **Tone.** Title capitalization, anonymity of people, takeaway pattern.
- **Edition values.** The sample values of this edition, which change next time.
- **Definition of done.** Objective checks: figure matches the snapshot, percentages reconcile, personal names removed.

Do not create grand sections such as "the intelligence behind it" or "what the director expects". Fold that into "What it shows".

**Build plan: the construction.** The technical plan, faithful to the HTML. Sections: **Objective**, **Layout**, **Exact copy** (verbatim), **Sources**, **Charts and tables**, **CSS components** (by name; definitions in the style file), **Regenerate** (what is fixed versus what data changes, and where to pull it from). Technical detail is welcome here: bar-height formulas, source filters behind a number, reconciliation gotchas.

### Writing register (the rule that matters most)

The document is technical and goes to a tech lead. The text fails when it sounds amateur or machine-written.

1. **No familiar, casual or figurative tone.** Never write conversational phrases such as "the size of the hole", "a cover that does not beat around the bush", "no makeup", "put the scoreboard on the table". Use the direct term: "the gap to close", "the cover states the gap, the scope and the cut-off date".
2. **Describe only what is on the slide.** Never describe what the slide lacks. Cut sentences such as "there is no deal-level detail on this slide (see the pipeline slides)". If a datum is not on the slide, it does not enter the plan.
3. **Do not invent or extrapolate methods.** Do not attribute frameworks or criteria that are not literally on the slide. If the deck uses a component (criteria tags on a best-cases slide), describe the real component and nothing imported.
4. **Simplify.** Short bullets, no preamble, no meta-narration. Each line must carry information the tech lead needs to build. Cut detail that does not change the rebuild.
5. **Anonymous people, transparent systems.** Because the audience is internal engineering, the document can and should name systems, fields, files and snapshots. A person's name is scaffolding: decision makers, reps and deal owners appear only as an origin mark and **leave the final version**. The Definition of done says so; the briefing does not repeat the name.
6. **No long dash, active voice, short sentences.** A source marker (a superscript or small icon) is scaffolding for the origin of data; describe it as such and note that it leaves when the integration exists.

### How to review an existing blueprint

1. Confirm the structure: two files; index, data-origin rule and style pointer in the blueprint; design system only in the style file.
2. Every slide has the two labeled layers.
3. Pass each Briefing through the register rules: casual tone (rule 1), negative-space sentences (rule 2), invented methods (rule 3); then tighten (rule 4).
4. Every figure in a Briefing exists on the slide and matches the source. Personal names are marked as scaffolding that leaves.
5. Do not alter the build plan (verbatim copy, formulas, CSS) when adjusting register. The text rules apply to the Briefing and the prose, not to values.
6. List what changed in two to four bullets.

### Limits

- Do not change figures, verbatim copy, formulas or CSS semantics when simplifying text.
- Do not translate; keep the language of the deck.
- Company, product and category names stay; anonymity applies to people.

## Checklist

- [ ] Two files, with the design system only in the style file
- [ ] Each slide has Briefing and Build plan
- [ ] Briefing items are one or two lines each
- [ ] No casual phrasing; no description of what the slide lacks; no invented method
- [ ] Verbatim copy and formulas untouched
- [ ] Personal names flagged as scaffolding

## Example

Acme Field Sales Assistant, fictional. The Briefing of slide 3, "Half of visits reach the CRM".

**Weak**

> - **Role.** This is the slide that really puts the scoreboard on the table and shows the size of the hole.
> - **What it shows.** The logging gap. There is no deal-level detail here (see the pipeline slides). We apply the MEDDPICC lens to explain why reps skip the CRM, and Jordan from the Northern team confirmed the figure.

**Corrected**

> - **Role.** First body slide; answers "what is the problem?".
> - **What it shows.** 52% of visits have a CRM record within 24 hours against a target of 80%; the gap of 28 pp is the figure the pilot targets.
> - **Data origin.** CRM activity export, eight weeks to the cut-off date, by the document-level rule.
> - **Tone.** Sentence-case title; no person named; takeaway labeled *Largest gap*.
> - **Edition values.** 52%, 80%, 28 pp.
> - **Definition of done.** 52% matches the snapshot; 80 minus 52 equals 28; the origin mark naming the rep who confirmed the figure is removed from the final version.

What changed: the figurative phrases became direct terms (rule 1), the sentence about what the slide lacks is gone (rule 2), the imported framework is gone (rule 3), and the person's name is treated as scaffolding that leaves (rule 5).

## Definition of done

A tech lead who never saw the original deck can rebuild every slide from the two files, and a reviewer finds no sentence that describes something absent from the slide.

## Related

- `build-deck`: produces the deck that this document describes.
- `slide-writing-rules`: the rules cited under "Tone" in every Briefing.
- `anti-slop` and `plain-language`: the register and clarity passes for the prose.
- `templates/blueprint.md` and `templates/style-and-design.md`: the two file templates.
