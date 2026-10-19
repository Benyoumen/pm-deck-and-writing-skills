---
name: tech-pitch
description: Builds a technical pitch script, and optionally a deck, for one specific opportunity, in six blocks from the customer's pain to a measurable result, the approach, the proof, the difference and the request. Use when asked for a technical pitch, a proposal deck, a demo script, or how to present a solution to a non-technical audience.
license: MIT
metadata:
  version: "1.1"
  author: Benjamin Tayar
  method: pm-deck-and-writing-skills
---

# Tech pitch

> One opportunity, one pitch: the script that connects the customer's pain to the technical solution, with proof and a clear next step.

## When to use

- A sales or stakeholder opportunity needs a technical pitch, a proposal deck or a demo script.
- A solution must be presented to an audience that is not technical, or only partly.
- Not for a generic product deck. The pitch is specific to that deal and calibrated by what is already known about it.

## Inputs

- The opportunity and the audience: technical, economic buyer or mixed.
- The format: script only, or script plus deck.
- Deal context from your CRM or your notes: pain, target metric, decision criteria, who buys, competing options.
- Your evidence library: offer lines, case results, specs. Reuse real cases and numbers, anonymized.
- Pasted notes or a call transcript when there is no CRM record.

## Procedure

1. **Scope and target.** Which opportunity, who is the audience, and the format.
2. **Pull the context.** List what is known and what is a gap, block by block.
3. **Write the spine** with the real material. Each gap becomes "to confirm in the meeting" plus the question that would surface it.
4. **Calibrate to the audience.** More technical depth in blocks 3 and 4 for a technical room. More result and risk in blocks 1, 2 and 5 when the economic buyer carries the weight.
5. **Generate the artifact.** Script in Markdown: the six blocks, the discovery questions and the request. Deck in HTML, if requested: follow `build-deck`.
6. **Editorial validation (mandatory).** Run `slide-writing-rules`, `anti-slop` and `plain-language`.
7. **QA** with the checklist below before delivering.

## Rules

### The spine (order matters)

Six blocks in this sequence. Each answers a question the audience is silently asking.

| # | Block | Question it answers |
|---|---|---|
| 1 | **The pain, in their words**, plus the cost of not acting | "Do they understand my problem?" |
| 2 | **The measurable result** we promise | "What do I gain, in a number?" |
| 3 | **The technical approach**: how it works, method or architecture | "How does it actually work?" |
| 4 | **The proof**: why believe us (how it operates, plus evidence) | "Why should I trust this team?" |
| 5 | **The difference** versus alternatives and versus doing nothing | "Why you, and why now?" |
| 6 | **The request** plus the success criterion of the next step | "What happens next?" |

Golden rule: **open with the customer's pain, not with your company or product.** Slide 1 is never "who we are".

### Principles

- **Specific to the deal, not a template.** Each block uses what is known about this opportunity. If something is not known, it becomes a question for the meeting, not a generic guess.
- **Every promise states how the customer confirms it.** Without a validation criterion, the promise is filler.
- **Technical approach without loose jargon.** Every technical term is defined on the spot or removed (see `plain-language`). The economic buyer is not always technical.
- **Differentiation includes the status quo.** The strongest competitor is often "do nothing, keep going as is". Treat it in block 5.
- **Anonymity and sobriety.** No personal names. Proof comes as anonymized evidence. No empty superlatives (see `slide-writing-rules` and `anti-slop`).

### Missing evidence

If evidence is missing for a block (no recorded metric, for example), **do not invent it**. Mark the block "to confirm in the meeting" and write the question that would surface it.

### Scale

For several pitches at once, run one agent per deal to draft the spine and a second agent to verify against the checklist. For a single pitch, work inline.

### Limits

- Do not invent proof or numbers. What is not in the CRM, the evidence library or the notes becomes a question for the meeting.
- Do not write to the CRM from this skill.
- The deck inherits your editorial rules. Without them the pitch does not ship.

## Checklist

- [ ] Opening slide speaks about the customer's pain, not about your company
- [ ] There is one result number, with how the customer confirms it
- [ ] Every technical term is defined or removed
- [ ] The difference block covers the status quo, not only named competitors
- [ ] The closing request is one concrete action with a success criterion
- [ ] Every gap became "to confirm" plus a question; nothing invented
- [ ] Passed `slide-writing-rules`, `anti-slop` and `plain-language`

## Example

Acme Field Sales Assistant, fictional: an AI agent that drafts follow-up emails and updates the CRM after customer meetings. Pitch to the sales operations lead of a mid-size distributor, illustrative figures.

**Weak opening**

> "Acme is a leading provider of next-generation AI solutions for sales teams. Our platform has been adopted by many customers and delivers significant value. In this presentation we will walk you through our company, our vision and our product."

**Corrected spine**

1. **Pain:** "After each customer visit, reps spend about 25 minutes writing the follow-up and updating the CRM. Roughly half of visits never get logged." Cost of not acting: a forecast built on incomplete records.
2. **Result:** "Drafts ready within two minutes of the visit; CRM updated on every logged meeting. Confirmed by the share of visits with a CRM record within 24 hours, tracked weekly."
3. **Approach:** "The assistant reads the meeting notes, drafts the email for the rep to review and proposes CRM field updates. Nothing is sent or written without the rep's approval."
4. **Proof:** "Pilot with a comparable team: share of visits logged within 24 hours, before and after. Anonymized, with the method shown."
5. **Difference:** "Versus a generic note-taking tool: it writes to your CRM fields, not to a document. Versus doing nothing: every unlogged visit stays invisible to the forecast."
6. **Request:** "Approve a four-week pilot with one team. Success: at least 80 percent of visits logged within 24 hours."

What changed: the opening is the customer's problem with a number, every promise has a confirmation method, the status quo is treated as a competitor, and the close is one action with a success criterion.

## Definition of done

A reader who was not in the deal can say what the customer's problem is, what result is promised, how it is confirmed and what is being asked, from the script alone.

## Related

- `build-deck`: the pipeline for the deck version of the pitch.
- `slide-writing-rules`, `anti-slop`, `plain-language`: the mandatory editorial validation.
- `pm-communication`: the follow-up message after the meeting.
