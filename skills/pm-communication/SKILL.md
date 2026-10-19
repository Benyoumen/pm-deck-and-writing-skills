---
name: pm-communication
description: Writes any product manager message as the official project record, with one structure for each of eleven types from daily status to phase close, readable in under a minute. Use when asked for a status update, meeting recap, validation request, decision record, risk notice, executive update, kickoff or any other PM message.
license: MIT
metadata:
  version: "1.1"
  author: Benjamin Tayar
  method: pm-deck-and-writing-skills
---

# PM communication

> Every written message from a product manager is the official project record: it logs decisions, formalizes agreements, reports progress, leaves next steps with owners and prevents divergent readings, in under a minute of reading.

## When to use

- "Write an email about...", "status update", "validation request", "decision record", "communicate a risk", "executive update", "kickoff", or any other PM message.
- The product is the **text** (subject and body). Delivery (a draft in a mail client, a chat post) is a separate step. Create drafts, never send.

## Inputs

- The message type, stated by the PM or inferred from the situation; when in doubt, ask in one line.
- The source data: meeting notes, project context, roadmap, tracker. Relative dates are relative to the day of the message.
- The recipients: who decides, who follows.
- Dates and owners for every next step, or the question that gets them.

## Procedure

1. **Identify the type** from the eleven below.
2. **Gather the data** from the right source.
3. **Write** applying the framework and the type's structure. Pass it through `anti-slop` and `plain-language`. Run the 60-second test and the final cut: every sentence that is neither action nor decision goes.
4. **Deliver** what was asked: the text alone, or a draft in the mail client. Never send.

## Rules

### Framework (applies to every type)

Two non-negotiable goals:
- **Readable in under 60 seconds.** About 200 words at most (daily status, far fewer).
- **Only what drives an action or records a decision goes in.** Before closing, reread and **cut** every sentence that does neither.

Principles:
1. **Start with progress** since the last update. No long greeting, no retelling context the readers already know.
2. Record **only relevant decisions** (a consensus or a change of direction), not every exchange of ideas.
3. **Every next step has an owner** (and a date when one exists).
4. Do not list a completed activity **without its result**.
5. **Neutral, objective, factual** language. No sales adjectives, no internal judgment, no exposed chasing of a person.

### Style

- **Strong verbs**, past tense or first person plural for what was done: Refined, Validated, Defined, Consolidated, Identified, Prioritized, Aligned, Calibrated. For what comes: "We will start...", "Next we...".
- **Banned openers** (they sound like generic email): "I would like to inform you...", "We continue to evolve...", "I hope you are well...", "I am writing to...". Begin with the fact.
- Email anti-slop: no long dash, no emoji, no exclamation mark, no ALL CAPS emphasis, no AI cliches ("furthermore", "it is worth noting", "in this regard", "seamless"). Neutral rendering: one plain font, no colors or tables.
- **No thank-you and no sign-off phrase at the end** ("Best", "Regards", "Thanks"). The last line is the validation request (when there is one), then your name. Thanks belong at the opening, when acknowledging someone's involvement.
- Short greeting by time of day; to one person, just the name.

### Base structure

Most types are a variation; use only the sections the content supports.
**Status** (what progressed) | **Decisions** (agreements or changes) | **Next steps** (activity, owner, date) | **Dependencies and risks** (only when present).

### The eleven types

Each type inherits the framework and adjusts structure and emphasis. The subject line is always factual, with no adjectives.

**1. Daily status.** The daily update on a project. One paragraph (the day's progress and the hook into the next step), then "Next steps:" (three to five bullets, infinitive verb, with owner or date). No continuity line, no validation request. Subject: `<Project> | daily progress | DD/MM`. Target: under 120 words.

**2. Meeting recap.** Recording what was covered and agreed. One-line opening for context, **Decisions**, **Agreed actions** (owner, date), **Next steps**, a short validation request. Subject: `Recap | <meeting> | DD/MM`.

**3. Validation request.** You need someone's approval on a specific point before moving on. One line of context, **what must be validated** (objective, no detour), when there are alternatives list them in two bullets, **deadline and impact** of deciding. Close with a clear decision question addressed to the person who decides. Subject: `Validation | <topic> | DD/MM`. Address the decider; copy only those who follow.

**4. Decision record (ADR).** Formalizing a structural decision for project history. **Decision** (the sentence itself), **Context** (the problem, why now), **Alternatives considered** (and why not), **Consequences** (what changes, trade-offs), **Owner and date**. Subject: `ADR | <decision> | DD/MM`. Factual tone; no persuasion, it is a record.

**5. Workshop invite.** Calling a working session with a goal and preparation. **Objective** (what comes out of the session), **What we will bring**, **What we ask of you** (preparation, inputs), **When, how long, where**, **Participants**. Subject: `Workshop | <topic> | DD/MM`. Short; state the expected outcome, not just the agenda.

**6. Cross-team alignment.** The message involves another area (business before technical). **Business context** (why it involves both areas, the problem or opportunity), **What we propose**, **What we need from your area**, **Next steps** (with owners). Subject: `<Area> x <Team> | <topic> | DD/MM`. Name the objective and the benefit; no loose technical jargon.

**7. Executive update.** Reporting progress to leadership. **One headline sentence** (where we are against the target or milestone), **Progress** (two or three points with results), **Decisions or risks that depend on you**, **Next milestone (date)**. Subject: `<Program> | executive update | DD/MM`. The leanest of all; focus on decision and risk, not activity. No person named in a judgment.

**8. Post-meeting follow-up.** After a meeting that validated or decided items, confirm what was agreed with those who must agree. One-line opening, **topics** (each a short paragraph with the state of the decision: "was validated", "was requested", a transition plan with a date, what is still under evaluation), then a **validation request** ("If you agree, we proceed with this plan; send any adjustment."). Subject: `Follow-up | <topic> | DD/MM`.

**9. Risk notice.** Flagging a risk and what you ask for in response. **Risk** (what can go wrong, factual), **Impact** (schedule, scope, cost), **Urgency**, **Proposed mitigation**, **Decision or support needed** (from whom, by when). Subject: `Risk | <topic> | DD/MM`. Sober tone, no alarm or drama; focus on the requested action.

**10. Initiative kickoff.** Opening an initiative and aligning everyone on the starting point. **Objective**, **Scope** (what it is and what it is **not**), **How we will work** (named phases), **Roles** (Name: responsibility), **Next steps and first date**. Subject: `Kickoff | <initiative> | DD/MM`.

**11. Phase close.** Closing a phase or deliverable and moving to the next. **What was delivered** (with the result, not only the activity), **Decisions made**, **What carries to the next phase**, **Lessons** (if relevant), a specific acknowledgment (it fits here, in the opening). Subject: `Close | <phase> | DD/MM`.

### Limits

- A draft is never sent from this skill.
- Do not invent progress, dates or owners. Missing items become a question to the PM.
- Pair with a dedicated skill for recurring formal readouts and meeting recaps when you have one.

## Checklist

- [ ] Opens with progress or the point, not with a greeting or context
- [ ] Under about 200 words
- [ ] Every sentence drives an action or records a decision
- [ ] Every next step has an owner; dates where they exist
- [ ] Results accompany completed activities
- [ ] Neutral, factual wording; no judgment of a person
- [ ] No thank-you or sign-off phrase at the end; the last line is the request or the name

## Example

Acme Field Sales Assistant, fictional; figures are illustrative. An executive update on the pilot.

**Weak**

> Subject: Quick update on the assistant!!
>
> Hi all, I hope you are all well. I would like to inform you that we continue to evolve the pilot and things are going great. The team has been very busy and we have made a lot of progress on many fronts. Jordan has been amazing. We will keep you posted. Thanks so much, best regards.

**Corrected**

> Subject: `Acme Field Sales Assistant | executive update | 14/05`
>
> The pilot is on schedule: 6 of 10 pilot reps have logged visits through the assistant since 5 May.
>
> **Progress**
> - CRM updates drafted for 112 visits; reps approved 94 without edits.
> - Email drafts cut average follow-up time from the next day to the same day.
>
> **Decision needed from you**
> - Approve extending the pilot to the second regional team by 21 May, or confirm it stays at one team until the data-access review closes.
>
> **Risk**
> - The CRM permissions review may delay field writes for the second team. Owner: IT security. Mitigation: start in draft-only mode.
>
> **Next milestone:** pilot readout on 7 July.
>
> Jordan

What changed: a factual subject, a headline sentence with a number, results instead of activity, one decision addressed to the reader with a date, a risk with an owner, and no greeting, praise or sign-off phrase.

## Definition of done

A recipient who skims for 60 seconds knows what progressed, what was decided, what is asked of them and by when.

## Related

- `anti-slop` and `plain-language`: every message passes through both before delivery.
- `slide-writing-rules`: Rule 10 (dates, status, owners) applies to messages as well.
- `tech-pitch`: the follow-up after a pitch meeting uses type 8.
