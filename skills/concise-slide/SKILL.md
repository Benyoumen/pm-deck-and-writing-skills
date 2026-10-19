---
name: concise-slide
description: Builds a one-idea slide with a word budget, four accepted layouts and ready HTML and CSS for a fixed 1280 by 720 stage. Use when asked for a short slide, a slide with just the direction, or when a deck needs breathing room after dense slides.
license: MIT
metadata:
  version: "1.1"
  author: Benjamin Tayar
  method: pm-deck-and-writing-skills
---

# Concise slide

> One slide, one idea: a sentence that stands alone, read in five seconds without scanning the screen.

## When to use

Use it when the content is **direction, decision, sequence or result**: where we are heading, in what order, what that yields. Use it also to give the eye a rest after two or three dense slides.

Do not use it for status, tables, request lists, a KPI with a target, a comparison of more than three items, or anything that needs a caveat. Content that needs a footnote does not fit here, and squeezing it only produces a vague slide.

A concise slide is the opposite of a dense slide, not a summary of one.

## Inputs

- The single idea the slide must carry, in one sentence.
- The context or time frame for the eyebrow ("From next quarter", "Pilot, weeks 1 to 4").
- The layout, chosen from the four below, or the content type so the layout can be chosen.
- The design tokens of the deck (accent, ink, card) and the 1280 by 720 stage.

## Procedure

1. Confirm the topic qualifies: direction, decision, sequence or result. If it is status, a table, a KPI with a target or a list of requests, pick another format.
2. Choose the layout: three-node flow for a sequence, two-column contrast for today versus later or in versus out, big number for breathing room, result band alone to close a chapter.
3. Write inside the word budget. If the copy does not fit, cut content; never shrink the type.
4. Drop the copy into the stage HTML below. Light one node at most.
5. Check the slide at 1280 by 720: visible space around the content, nothing cut off, no second message.

## Rules

### Word budget (a rule, not a suggestion)

| Element | Ceiling |
|---|---|
| Eyebrow | 6 words, gives the time frame or context |
| Title | 5 words, sentence case |
| Lead paragraph | none. If you need a lead, the slide is not concise |
| Node title | 3 words |
| Node body | one sentence, 20 words at most, no final period |
| Nodes | 3 at most; 2 is fine |
| Result band | 2 items of 4 words each |

If the content does not fit the budget, it is not a concise-slide topic. Pick another format instead of shrinking the font.

### The four layouts

1. **Three-node flow (default).** Three numbered boxes with arrows between them and a dark band of objectives below. Use for sequence: first this, then that, then the other.
2. **Two-column contrast.** Two boxes of equal size, one highlighted with the accent color and one neutral. Use for "today versus later" or "what is in versus out". No arrow.
3. **Big number.** Dark background, two to four large numbers with a short label under each. Use for breathing room after dense content. Every number needs a verifiable source.
4. **Result band alone.** Only the dark block with two or three large statements. Use to close a chapter.

### Visual anatomy

- Light background, dark text, one accent color used only for the eyebrow, numbering, arrows and the active node border.
- **One node can be lit** (the thing happening now). Only one.
- The number badge sits half outside the box (negative top offset). This gives the look of a drawn piece.
- The result band is dark with white 32 px text at heavy weight.
- Generous space: 28 px gap between the row and the band, minimum node height of 176 px.
- No takeaway block. **The whole slide is the conclusion.**

### Ready HTML and CSS

It sits inside a fixed 1280 by 720 stage. Everything is in pixels. Replace the example copy with your own and keep the budget.

```html
<section class="slide slide--light" id="s7">
  <div class="stage">
    <div class="eyebrow">From next quarter</div>
    <h2>Next steps</h2>

    <div class="flow">
      <div class="frow">
        <div class="fnode fnode--now">
          <span class="fnum">01</span>
          <h3>Team input</h3>
          <p>Collect the view of the people who will use the <b>assistant</b> every day</p>
        </div>
        <div class="farrow">&rarr;</div>
        <div class="fnode">
          <span class="fnum">02</span>
          <h3>Shared direction</h3>
          <p>Agree which follow-ups the assistant drafts and which stay manual</p>
        </div>
        <div class="farrow">&rarr;</div>
        <div class="fnode">
          <span class="fnum">03</span>
          <h3>Pilot backlog</h3>
          <p>Turn the agreed scope into ordered work for the pilot team</p>
        </div>
      </div>

      <div class="fdown"><span class="fdl">Goals</span><span>&darr;</span></div>

      <div class="fout">
        <div class="oi"><div class="ov">Faster follow-up</div></div>
        <div class="oi"><div class="ov">Cleaner CRM data</div></div>
      </div>
    </div>
  </div>
</section>
```

```css
:root{--accent:#0B6BFF;--ink:#111;--ink-60:rgba(17,17,17,.6);--ink-10:rgba(17,17,17,.1);--card:#fff}
.flow{margin-top:30px;display:flex;flex-direction:column;gap:28px}
.frow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr;align-items:stretch}
.fnode{position:relative;min-height:176px;background:var(--card);border:1px solid var(--ink-10);
  border-radius:4px;padding:38px 24px 26px;display:flex;flex-direction:column}
.fnode--now{border-color:var(--accent);background:linear-gradient(180deg,rgba(11,107,255,.07),rgba(255,255,255,0) 72%),var(--card)}
.fnode .fnum{position:absolute;top:-21px;left:24px;width:42px;height:42px;border-radius:99px;
  background:var(--accent);color:#fff;font-size:16px;font-weight:900;display:flex;align-items:center;justify-content:center}
.fnode h3{font-weight:900;font-size:23px;letter-spacing:-.03em;line-height:1.14}
.fnode p{margin-top:10px;font-size:14px;line-height:1.4;color:var(--ink-60)}
.fnode p b{font-weight:700;color:var(--ink)}
.farrow{display:flex;align-items:center;justify-content:center;padding:0 16px;color:var(--accent);font-weight:900;font-size:20px}
.fdown{display:flex;align-items:center;justify-content:center;gap:11px;color:var(--accent);font-weight:800;font-size:16px}
.fdown .fdl{font-size:10px;letter-spacing:.18em;text-transform:uppercase}
.fdown::before,.fdown::after{content:'';height:1px;flex:1 1 auto;background:var(--ink-10)}
.fout{border-radius:4px;padding:34px 40px 36px;display:grid;grid-template-columns:repeat(2,1fr);gap:40px;background:#0A0A0A}
.fout .oi{position:relative;padding-top:18px}
.fout .oi::before{content:'';position:absolute;top:0;left:0;width:36px;height:2px;background:var(--accent)}
.fout .ov{font-weight:900;font-size:32px;letter-spacing:-.035em;line-height:1.08;color:#fff}
```

For three items in the band, use `grid-template-columns:repeat(3,1fr)` and lower `.ov` to 26 px.

### Limits

- A number in the big-number layout needs a verifiable source, or it does not go on the slide.
- The slide carries no footnote, caveat or second message. If one is needed, it is not a concise slide.
- Keep the tokens of your deck; the colors above are placeholders.

## Checklist

- [ ] Title is five words or fewer and states the message alone
- [ ] No node has more than one sentence
- [ ] No lead paragraph
- [ ] One lit node, and only one
- [ ] At 1280 by 720 there is visible space around the content; if it feels tight, remove content, do not shrink type

## Example

Acme Field Sales Assistant, fictional. A slide meant to show the pilot sequence.

**Weak**

> Eyebrow: *Our plan for the coming months and beyond*
> Title: *A Comprehensive Roadmap For The Assistant Rollout*
> Lead: *This slide summarizes the three phases we intend to follow, each with its own goals, owners and risks, which are detailed on the following slides.*
> Node 1: *Review all open requests from every team and consolidate them into a single prioritized list that the steering group can approve.* (22 words, two ideas)

**Corrected**

> Eyebrow: *From 2 June*
> Title: *Pilot in three steps*
> Node 1: *Team input* / *Collect the view of the ten reps who will use the assistant daily*
> Node 2: *Draft-only pilot* / *Assistant drafts, rep approves, nothing is written without approval*
> Node 3: *Readout* / *Share of visits logged within 24 hours, before and after*
> Result band: *Faster follow-up* / *Cleaner CRM data*

What changed: the eyebrow gives a date, the title is four words in sentence case, the lead is gone, each node is one sentence under 20 words, and the band carries the two results.

## Definition of done

A colleague reads the slide for five seconds and states its single idea correctly. The slide has no footnote, caveat or second message.

## Related

- `slide-writing-rules`: the title and wording rules this slide inherits.
- `build-deck`: where a concise slide is inserted after dense stretches.
- `templates/style-and-design.md`: the tokens to replace the placeholder colors above.
