---
name: anti-slop
description: Reviews and rewrites text to remove AI tells, such as the long dash used as a connector, cliches, inflated transitions, robotic vocabulary and predictable structures, while keeping a professional register. Use when asked to "make it sound human", "remove the AI feel", "anti-slop", "clean up the text", or when reviewing anything that will be published to people.
---

# Anti-slop: natural, human writing

Goal: take a text (a human draft or a model draft) and return it sounding like a person wrote it: direct, specific, without the tics that give away machine text. Do not lose information and do not change the meaning.

The rule is not "never use these words". It is: when a word is there as decoration or as an AI reflex, cut it or swap it for the plain version. A technical word used precisely stays.

## 1. Punctuation first

1. **Ban the em dash and the en dash as connectors.** It is the number one sign of machine text. Rewrite as two sentences, or use a comma, colon or parentheses.
   - "The product is ready, only testing is left." or "The product is ready. Only testing is left."
   - Ranges use "to" or a plain hyphen: "10 to 12", "pp. 10-12".
2. **Do not swap one tic for another.** Do not turn every dash into a colon. Vary punctuation the way a person would.
3. Avoid dramatic colons ("The truth is simple:"), suspense ellipses and gratuitous semicolons.
4. Quotes and italics only when they add something. No scattered ironic quotation marks.

## 2. The crutch word "real"

Do not use "real", "real-world" or "genuinely" to fake concreteness ("the real impact", "the real problem", "real-world examples"). Cut it or be specific.

- "the real reason for the delay" becomes "the reason for the delay"
- "real-world examples" becomes "examples from the sales team" (say which)
- "real value for the customer" becomes the concrete value (hours saved, revenue)

Exception: technical terms where it has a fixed meaning ("real numbers", "real time" in a system spec, real versus nominal in finance).

## 3. Professional register: no casual or figurative language

Slang, familiar phrases and figures of speech do not belong in a work document, whether it is a chat message, a board card, a slide, an email or a code comment. Everything written at work circulates to developers, sponsors or executives.

| Rejected | What is wrong | Approved |
|---|---|---|
| "nonsense" | conversational; discredits writer and reader | name the effect: "outdated information shown to the customer" |
| "the phrase is buried in the notes field" | metaphor in place of the fact | "the phrase sits in the notes field with no emphasis" |
| "the rep reads the system as one more boss with a whip" | a meeting figure carried onto a slide | "from policing to executing" |

**The ruler, in one line:** describe the mechanism, not the image. Verb and object stay; adjective, metaphor and slang go.

Living list of what goes (same family, not only these): nonsense, buried (figurative), have a quick look, run after it, the penny drops, roll up your sleeves, at the end of the day, open a conversation, terrain (figurative), hitch a ride, spin it up.

**How to check:** read the sentence imagining a tech lead you never met opening the card. If the word would sound odd in a signed document, it goes. When in doubt, replace it with the literal description of what happens; it is almost always shorter.

Shortening does not license informality, and formality does not license pompous jargon (section 4). Both apply together: **literal, specific, short.**

## 4. Vocabulary to remove (or ration)

**Transitions that fire automatically:** furthermore, moreover, additionally, in addition (when stacked), it is worth noting, it is important to note, it bears mentioning, that said, in essence, ultimately, in conclusion, to sum up, in other words.

**Cliche openers and closers:** "In today's fast-paced world", "In the digital age", "In an increasingly complex environment", "More than ever", "In conclusion,", "I hope this helps!", "Certainly!", "Of course!".

**Empty adjectives:** seamless, innovative, groundbreaking, cutting-edge, state-of-the-art, holistic, nuanced, multifaceted, pivotal, paramount, bespoke, comprehensive, transformative, unparalleled, unprecedented, meticulous, ever-evolving, game-changing, next-generation, world-class, crucial, vital, essential (as filler).

**Decorative nouns:** tapestry, realm, testament, treasure trove, journey, odyssey, paradigm, pinnacle, nexus, ecosystem, plethora, beacon, cornerstone, linchpin, milestone (as filler).

**Automatic marketing verbs:** utilize, harness, underscore, foster, empower, embark, unlock, unleash, elevate, amplify, facilitate, revolutionize, transcend, showcase, resonate, navigate the complexities, dive deep, take it to the next level.

**Robotic hedging:** generally speaking, by and large, it is worth considering, it should be noted.

**Symmetric formulas:** "not only... but also...", "it is not just X, it is Y", "more than X, it is Y". Once at most; repetition gives it away.

**Inflated quantifiers:** a multitude of, a plethora of, a wide range of, countless, myriad.

**Corporate AI jargon (when stacked without need):** stakeholders, value proposition, paradigm shift, actionable insights, data-driven, scalable, mission-critical, best practices, low-hanging fruit, move the needle, circle back.

## 5. Structural patterns to fix

- **Bold-label-colon lists in series** ("**Efficiency:** ... **Scale:** ...") line after line. Use only when the list truly helps; otherwise write prose.
- **Artificial triplets:** everything in threes ("fast, simple and effective"). Break the rhythm: two, four or one.
- **Clone paragraphs:** every section with the same size and shape (topic, explanation, example, mini conclusion). Vary.
- **Echoing the question** at the start. Go straight to the answer.
- **A conclusion that only recaps.** Cut it.
- **Uniform cadence:** sentences of the same length. Mix short and long, and sometimes one very short.
- **Uniform enthusiasm:** everything is "great" or "powerful". Calibrate.
- **Decorative emoji** in serious text. Remove unless it is the agreed tone.
- **Denial-then-affirmation for effect:** "It is not about X. It is about Y." Rewrite directly.
- **Headline molds:** "The [noun] that [verb]": "The analogy that solves it", "The question that changes everything", "The mistake that costs you". Also "X in N steps", "The secret of...", "Why you should...". Say the thing directly: instead of "The analogy that solves it", write which analogy and what it solves.
- **Poetic metaphor in business writing.** Cut decorative images (lighthouses, bridges, seeds, tapestries) and state the fact. "The floor is high, but closing this month is unlikely" becomes "The deal is large, but closing this month is unlikely".

## 6. What makes writing sound human

- Sentences of different lengths.
- Active voice and a concrete subject: "The team delayed the deploy", not "There was a deploy delay".
- Specifics in place of abstraction: a number, a name, an example instead of "various benefits".
- Common words: "use" over "utilize", "help" over "facilitate", "improve" over "optimize".
- You may start a sentence with "And" or "But" when the tone allows.
- A position and a direction where appropriate, instead of lukewarm neutrality.
- Cut qualifiers that change nothing: very, really, basically, simply, extremely, literally, definitely.

## Before and after

Figures below are illustrative.

| Before | After | What changed |
|---|---|---|
| "In today's fast-paced world, teams face a plethora of challenges, and our seamless platform empowers them to unlock their potential." | "Sales teams lose about a day a week to CRM updates. The assistant drafts them after each meeting." | Cliche opener, decorative nouns and verbs replaced by a fact and a number |
| "The rollout was a huge success, and the whole team was thrilled." | "The rollout finished on 14 May. Eight of ten reps used it in week one." | Intensifiers and an unproven claim replaced by evidence |
| "It is not about speed. It is about trust." | "Reps adopt the tool only when they can see why it suggested each change." | Denial-affirmation pattern replaced by the mechanism |
| "Furthermore, it is worth noting that data quality is crucial." | "Data quality decides whether the forecast is usable." | Transition and filler adjective removed |

## How to run a review

1. **Identify the target.** If the text was not pasted, ask which file or passage.
2. **Confirm the delivery mode** if unclear: rewrite in place, return a clean version, or only point out problems.
3. **Run the checklist in order:** punctuation (dashes and "real" first), register (section 3), vocabulary, structure, naturalness.
4. **Preserve meaning and facts.** Do not invent, do not drop relevant information, do not change numbers or names. This is about form, not content.
5. **Keep the author's voice**, with one limit: section 3 wins. Respect formality and rhythm, but slang and figurative language go even when the input had them.
6. **When finished**, if you made many changes, list two to four bullets: what changed and why ("removed 3 dashes", "swapped 'seamless' for 'stable'", "cut 'real' in 2 sentences").

## Checklist

- [ ] No em or en dash connectors
- [ ] No "real" as emphasis
- [ ] No slang, familiar phrases or figures of speech
- [ ] No stacked transitions, cliche openers or empty adjectives
- [ ] No artificial triplets, clone paragraphs or recap conclusions
- [ ] Facts, figures and names unchanged

## Definition of done

The text reads as one specific person wrote it in a signed document, and a diff against the original shows no change in facts or numbers.

## Limits

- Do not apply to code, direct quotations, proper names, established technical terms, or passages the author asked to keep.
- A dash or listed word inside a **direct quotation** stays: it is someone else's speech.
- A legitimate technical term ("real time" in a spec, "stakeholders" in a management document where it is the agreed word) is not slop.
- If the text is already natural, say so instead of inventing changes.
- Natural does not mean forced informality. In a formal document, human means clear and direct, not slang.
