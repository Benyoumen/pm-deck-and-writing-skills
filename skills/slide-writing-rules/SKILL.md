---
name: slide-writing-rules
description: Editorial rules for the text of any slide deck. Covers short factual titles, capitalization, anonymity of people, nothing that reads as criticism, plain wording, no allegorical analogies, explicit validation criteria, the slide takeaway block, concrete dates and owners, no repeated slides, fit inside 16:9, and bold key points. Use when writing, reviewing or cleaning up a deck, or when asked to "fix the titles", "tighten this deck" or "review the wording".
---

# Slide writing rules

These rules cover the **text** of a deck: titles, sentences, tone, structure of ideas across slides. Visual design is a separate concern (see `build-deck`). Use them on any deck, from a one-page update to a 40-slide readout.

Reading test behind every rule: a smart reader who was not in the room understands the slide in under ten seconds and can repeat its point.

## Rule 1: Titles are short, factual and consistent

- Maximum six words. The title states the message, not a story about it.
- No literary or dramatic language ("the heart of", "a turning point", "the root of the problem", "the golden question").
- Capitalization has two registers:
  - **Cover title:** all caps. Keep the source text in sentence case and let CSS apply `text-transform: uppercase`.
  - **Every other title and section heading:** sentence case. Capital letter on the first word only.
  - Exceptions stay capitalized: acronyms (`KPI`, `CRM`, `MVP`) and proper nouns (company, product and agent names).

| Weak | Better |
|---|---|
| Where Do We Go From Here? | Next steps |
| The Hidden Cost Of Doing Nothing | What the current process costs |
| Our Journey So Far | Status at the end of Q2 |

## Rule 2: People are anonymous

- Never name a person in a slide, note, quote or table. This protects whoever gave an interview or feedback.
- Replace names with roles or areas: "sales leadership", "finance", "one account executive".
- A quote becomes an anonymous principle stated as a general fact, without quotation marks.
- Refer to meetings by type and date ("field visit, 12 March"), never by participants.
- **Exception:** an internal accountability deck may name owners of actions and decisions, with the role in parentheses: `Jordan Lee (PM)`. Remove the names before the deck leaves the group.
- Company, product and category names stay. The rule protects people, not organizations.

## Rule 3: Nothing reads as criticism of a person

- Do not expose anyone's tenure, seniority, background or individual mistakes.
- Describe the process, not the people in it.
  - Bad: "Reps classify deals wrongly."
  - Good: "Deal stage varies with each person's own criteria."
- Turn a complaint into a neutral fact or a need: "The practical reading needs sign-off from sales leadership."

## Rule 4: Every sentence means something to an outsider

- A line that only repeats jargon does not count.
  - Bad: "Counts in the ICP; no confirmed need or meeting."
  - Good: "Company fits the target customer profile, but no sales conversation has started."
- When a technical criterion appears, say what it means in practice. Spell out an acronym the first time, in three to six words.
- No slang or casual idiom ("ballpark", "dirty data", "hit the ceiling"). Use the professional equivalent.

## Rule 5: Plain words

Short sentences, active voice, common vocabulary. The audience includes non-specialists. If a concept is technical, explain it before using it (see `plain-language`). Avoid the long dash as a connector; use a period, comma or colon (see `anti-slop`).

## Rule 6: No allegorical analogies

- Forbidden: invented images such as a building with floors, a traffic light, a hero's journey, a football team.
- Allowed: literal comparisons from the reader's own domain ("win rate by stage").
- Describe the mechanism directly. If the analogy is the only way to be understood, the explanation is missing a step.

## Rule 7: Every claim carries its validation criterion

- Never leave a statement where the reader could ask "how would I verify that?".
  - Vague: "The customer showed interest."
  - Verifiable: "The customer accepted and scheduled the first meeting, recorded in the CRM."
- A criterion is a filled field, a number, a deadline or a logged event. Name the trigger and where it is recorded.
- During review, flag every sentence that depends on interpretation and replace it with a measurable one.

## Rule 8: The value is always visible

For any deck about a product, agent or initiative, show the return in three terms: efficiency (time saved), quality (accuracy, fewer errors) and added value (revenue, predictability). Each capability block answers "what improves for the business?", not only "what does it do?".

## Rule 9: The takeaway block closes every content slide

Each content slide ends with one block that carries the single sentence the reader keeps. Build it in this order:

1. **Open with the fact, translated.** State what the number means in plain words. Do not repeat the title or the table.
2. **Define the technical term on the spot**, in three to six words.
3. **Show the tension.** Contrast two figures or two readings: declared versus verified, today versus target.
4. **Close with the "so what".** End on a decision, an action or something to verify this week. Never end on neutral description ("to be monitored").
5. **Quantify.** Every figure has a unit. No "a lot", "several", "high impact" without a number.
6. **Active voice, short sentences, no long dash.**
7. **Label it specifically.** The label names the content of that slide, not the function of the block. Banned: "How to read this". No repeated label on consecutive slides. Good labels: *Largest gap*, *Pending decision*, *Promotion rule*, *Scope limit*, *Expected effect*, *Common bottleneck*, *Source*. Test: if the label would fit any other slide, it is too generic.

Reference example (illustrative figures):

> **Largest gap.** Only 24 of the 75 units in the forecast have evidence in the CRM: a named decision maker, a proposal and a date. Reps declare 75, so about two thirds still lack proof. This week's two actions: correct deal classification and unblock the three largest stalled accounts.

Why it works: it opens on a translated number, defines "evidence" inline, contrasts verified with declared, closes on two actions, and every figure has a unit.

**Exception, client assessments:** a client-facing assessment or readout may drop the labeled box. Items 1 to 5 still apply, in a plain unlabeled paragraph at the foot of the slide.

## Rule 10: Dates, status and owners (tracking decks)

- **Concrete dates, not vague terms.** "This week" becomes `23 to 27 June`. "Soon" becomes a date.
- **Name the week by date**, not by number: "week of 15 June", not "week 1".
- **Commit with slack.** Prefer "planned for", "on track for" and a date over a rigid promise. It protects credibility if the date moves.
- **Status needs evidence.** Do not write "done" or "already applied" without a number or proof. Without proof, state the rule ("no agent ships without a defined KPI"), not a completed status.
- **Owner pairs a person with a person or a team.** Never a person with a system ("Alex and the platform").

## Rule 11: No repeated slides

- Each concept is explained in depth once, in one owner slide. Other slides cite it in one line.
- The summary slide and the closing slide are maps, not copies.
- Text and a chart of the same content are one slide.
- **Delete test:** if removing this slide loses nothing that appears elsewhere, delete or merge it.
- **One question per slide:** why, how, when, who, how much, what to decide. Two slides answering the same question are merge candidates.
- Cut, do not compress: intro of one line, card description of two lines at most, no sentence that only prepares the next one.
- Repetition signals: the same keyword as the title of two slides, the same table twice, one phase described in three places, an intro that repeats the title.

Ten slides without overlap say more than sixteen with an echo.

## Rule 12: Navigation (HTML decks)

A deck built in HTML must be navigable from the start, and clicking content must not navigate. Provide: fixed up and down buttons, arrow keys, Page Up and Page Down, Space, Home and End, a `#sN` hash that opens slide N, a progress bar and an `n / total` counter, and respect for `prefers-reduced-motion`. A click on a number or a text selection must do nothing. Clicks that moved the page were reported as a defect in client review.

## Rule 13: Everything fits in 16:9

- Each slide fits in 1280 by 720 with nothing cut off and nothing overlapping.
- A highlight number is a short token: `38%`, `3x`, `01`. A long comparison such as `38% vs 16%` goes in the text, not in the label.
- If space runs out, trim the text first, then reduce size slightly. Shrinking a lot means the slide has too much content: split it in two.
- Density has a ceiling. A table that does not fit becomes two slides or loses rows.

## Rule 14: Bold marks the key points

- Two to four bold fragments per slide, the ones that carry the message: a figure with its unit, a deadline, a rule or decision.
- Bold the payload, never a connective, a loose verb or an intensifier.
- If more than about a quarter of the text is bold, nothing stands out. Cut.
- **Scan test:** read only the bold fragments of the whole deck in order. They should tell the full story: situation, number, decision.

## How to run a review

1. Pass every title through Rule 1.
2. Sweep for personal names (Rule 2) and replace with roles.
3. Find anything that exposes or criticizes a person (Rule 3).
4. Read every sentence as an outsider (Rules 4 to 7).
5. Rewrite each takeaway block with Rule 9 and give it a specific label.
6. Apply Rule 14, then run the scan test.
7. Run the redundancy sweep (Rule 11): list each concept and where it appears, merge, apply the delete test.
8. Check fit and navigation (Rules 12 and 13) on a render.
9. Report what changed in two to four bullets.

## Checklist

- [ ] Titles at most six words, sentence case, cover in caps
- [ ] No personal names; roles only (or a named exception)
- [ ] No sentence reads as criticism of a person
- [ ] Jargon defined once; no slang
- [ ] No analogies in titles or body
- [ ] Every claim has a verification criterion
- [ ] Value shown as time, quality and revenue where relevant
- [ ] Takeaway blocks follow Rule 9 with varied, specific labels
- [ ] Dates are concrete; status has evidence
- [ ] Each concept has one owner slide
- [ ] Two to four bold fragments per slide; scan test passes
- [ ] Nothing overflows at 1280 by 720

## Definition of done

The deck passes the checklist, the scan test tells the story alone, and a reviewer who was not involved can state the main decision requested after reading only the titles and bold text.

## Limits

- Do not change figures, data or technical meaning while simplifying.
- Keep company, product and category names; anonymity applies to people.
- Fictional names in examples are fine. Mark the example as fictional.
- This skill covers text only. Visual rules live in the design file of your deck.
