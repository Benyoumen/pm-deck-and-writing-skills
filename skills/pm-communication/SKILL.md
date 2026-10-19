---
name: pm-communication
description: Writes any written communication from a product manager as the official project record. It logs decisions, formalizes agreements, reports progress, assigns next steps with an owner, avoids divergent interpretations, and reads in under a minute. Eleven message types, each with its own structure: daily status, meeting recap, validation request, decision record, workshop invite, cross-team alignment, executive update, post-meeting follow-up, risk notice, initiative kickoff, phase close. Use when asked to "write an email about...", "status update", "validation request", "decision record", "communicate a risk", "executive update", "kickoff" or any PM message.
---

# PM communication: the official project record

A product manager sits between teams. Each written message is an **official record**: it must log decisions, formalize agreements, report progress, leave clear next steps with owners, serve as history and **prevent divergent readings**. This skill produces that text in the register of a senior PM, with one structure per situation, so every message comes out consistent.

The product is the **text** (subject and body). Delivery (draft in a mail client, chat post) is a separate step. Create drafts, never send.

## Framework (applies to every type)

Two non-negotiable goals:
- **Readable in under 60 seconds.** About 200 words at most (daily status, far fewer).
- **Only what drives an ACTION or records a DECISION goes in.** Before closing, reread and **cut** every sentence that does neither.

Principles:
1. **Start with progress** since the last update. No long greeting, no retelling context the readers already know.
2. Record **only relevant decisions** (a consensus or a change of direction), not every exchange of ideas.
3. **Every next step has an owner** (and a date when one exists).
4. Do not list a completed activity **without its result**.
5. **Neutral, objective, factual** language. No sales adjectives, no internal judgment, no exposed chasing of a person.

Style:
- **Strong verbs**, past tense or first person plural for what was done: Refined, Validated, Defined, Consolidated, Identified, Prioritized, Aligned, Calibrated. For what comes: "We will start...", "Next we...".
- **Banned openers** (they sound like generic email): "I would like to inform you...", "We continue to evolve...", "I hope you are well...", "I am writing to...". Begin with the fact.
- Email anti-slop: no long dash, no emoji, no exclamation mark, no ALL CAPS emphasis, no AI cliches ("furthermore", "it is worth noting", "in this regard", "seamless"). Neutral rendering: one plain font, no colors or tables.
- **No thank-you and no sign-off phrase at the end** ("Best", "Regards", "Thanks"). The last line is the validation request (when there is one), then your name. Thanks belong at the opening, when acknowledging someone's involvement.
- Short greeting by time of day; to one person, just the name.

Base structure (most types are a variation; use only the sections the content supports):
**Status** (what progressed) | **Decisions** (agreements or changes) | **Next steps** (activity, owner, date) | **Dependencies and risks** (only when present).

## The eleven types

Each type inherits the framework and adjusts structure and emphasis. The subject line is always factual, with no adjectives.

### 1. Daily status
When: the daily update on a project.
- **One paragraph** (the day's progress and the hook into the next step), then **"Next steps:"** (three to five bullets, infinitive verb, with owner or date). No continuity line, no validation request.
- Subject: `<Project> | daily progress | DD/MM`. Target: under 120 words.

### 2. Meeting recap
When: recording what was covered and agreed.
- One-line opening for context, **Decisions**, **Agreed actions** (owner, date), **Next steps**, a short validation request.
- Subject: `Recap | <meeting> | DD/MM`.

### 3. Validation request
When: you need someone's approval on a specific point before moving on.
- One line of context, **what must be validated** (objective, no detour), when there are alternatives list them in two bullets, **deadline and impact** of deciding. Close with a clear decision question addressed to the person who decides.
- Subject: `Validation | <topic> | DD/MM`. Address the decider; copy only those who follow.

### 4. Decision record (ADR)
When: formalizing a structural decision for project history.
- **Decision** (the sentence itself), **Context** (the problem, why now), **Alternatives considered** (and why not), **Consequences** (what changes, trade-offs), **Owner and date**.
- Subject: `ADR | <decision> | DD/MM`. Factual tone; no persuasion, it is a record.

### 5. Workshop invite
When: calling a working session with a goal and preparation.
- **Objective** (what comes out of the session), **What we will bring**, **What we ask of you** (preparation, inputs), **When, how long, where**, **Participants**.
- Subject: `Workshop | <topic> | DD/MM`. Short; state the expected outcome, not just the agenda.

### 6. Cross-team alignment
When: the message involves another area (business before technical).
- **Business context** (why it involves both areas, the problem or opportunity), **What we propose**, **What we need from your area**, **Next steps** (with owners).
- Subject: `<Area> x <Team> | <topic> | DD/MM`. Name the objective and the benefit; no loose technical jargon.

### 7. Executive update
When: reporting progress to leadership.
- **One headline sentence** (where we are against the target or milestone), **Progress** (two or three points with results), **Decisions or risks that depend on you**, **Next milestone (date)**.
- Subject: `<Program> | executive update | DD/MM`. The leanest of all; focus on decision and risk, not activity. No person named in a judgment.

### 8. Post-meeting follow-up
When: after a meeting that validated or decided items, confirm what was agreed with those who must agree.
- One-line opening, **topics** (each a short paragraph with the state of the decision: "was validated", "was requested", a transition plan with a date, what is still under evaluation), then a **validation request** ("If you agree, we proceed with this plan; send any adjustment.").
- Subject: `Follow-up | <topic> | DD/MM`.

### 9. Risk notice
When: flagging a risk and what you ask for in response.
- **Risk** (what can go wrong, factual), **Impact** (schedule, scope, cost), **Urgency**, **Proposed mitigation**, **Decision or support needed** (from whom, by when).
- Subject: `Risk | <topic> | DD/MM`. Sober tone, no alarm or drama; focus on the requested action.

### 10. Initiative kickoff
When: opening an initiative and aligning everyone on the starting point.
- **Objective**, **Scope** (what it is and what it is **not**), **How we will work** (named phases), **Roles** (Name: responsibility), **Next steps and first date**.
- Subject: `Kickoff | <initiative> | DD/MM`.

### 11. Phase close
When: closing a phase or deliverable and moving to the next.
- **What was delivered** (with the result, not only the activity), **Decisions made**, **What carries to the next phase**, **Lessons** (if relevant), a specific acknowledgment (it fits here, in the opening).
- Subject: `Close | <phase> | DD/MM`.

## Example: executive update (fictional)

Subject: `Acme Field Sales Assistant | executive update | 14/05`

> The pilot is on schedule: 6 of 10 pilot reps have logged visits through the assistant since 5 May (illustrative).
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

## How to use

1. **Identify the type.** The PM says it, or you infer from the situation; when in doubt, ask in one line.
2. **Gather data** from the right source (meeting notes, project context, roadmap). Relative dates are relative to the day of the message.
3. **Write** applying the framework and the type's structure. Pass it through `anti-slop` and `plain-language`. Run the 60-second test and the final cut (every sentence that is neither action nor decision goes).
4. **Deliver** what was asked: the text alone, or a draft in the mail client. Never send.

## Checklist

- [ ] Opens with progress or the point, not with a greeting or context
- [ ] Under about 200 words
- [ ] Every sentence drives an action or records a decision
- [ ] Every next step has an owner; dates where they exist
- [ ] Results accompany completed activities
- [ ] Neutral, factual wording; no judgment of a person
- [ ] No thank-you or sign-off phrase at the end; the last line is the request or the name

## Definition of done

A recipient who skims for 60 seconds knows what progressed, what was decided, what is asked of them and by when.

## Limits

- A draft is never sent from this skill.
- Do not invent progress, dates or owners. Missing items become a question to the PM.
- Pair with a dedicated skill for recurring formal readouts and meeting recaps when you have one.
