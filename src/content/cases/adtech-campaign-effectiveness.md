---
title: "AdTech Campaign Effectiveness, From Intuition to Evidence"
client: "Italian AdTech firm"
year: "2026"
primaryTheme: "revenue-growth"
secondaryThemes: []
metric: "15% conversion-rate uplift across analysed campaigns."
---

## In brief

**Situation.** A European AdTech firm wanted a sharper, more defensible view of which campaign characteristics were actually driving conversion, not which ones the team felt were driving conversion.

**Complication.** Campaign managers were making decisions on a mix of pattern-matching and gut. When you asked why a campaign performed well, the answer was usually a story. Stories are unfortunately not a reliable basis for budget allocation.

**Resolution.** Working solo over three months, I designed the analytical pipeline on Google Cloud and Vertex AI, built a predictive model linking campaign attributes to conversion outcomes, and established an A/B testing framework the client could run independently after delivery. I deliberately prioritised interpretability over black-box accuracy. Campaign managers had to trust the recommendations enough to act on them. The system was scoped as an evidence-generating tool for the human, not a replacement for them.

**Impact.** 15% conversion-rate uplift across the campaigns analysed. A repeatable A/B testing framework now embedded in the client's operating cadence. They can ask the question again, monthly, forever, without me.

## The longer story

AdTech has a strange dirty secret: most of the people running campaigns are extraordinarily talented pattern-spotters, and most of those patterns are wrong. Not because they are stupid, quite the opposite, but because humans are evolved to find patterns even in random data. We are confidence machines.

The trick with building analytics for this audience is not accuracy. The trick is interpretability. I could have built a deep-learning monster that out-predicted my interpretable model by three percentage points. Nobody would have used it. The reason is psychological: a campaign manager cannot defend, in a meeting with the client, a recommendation they do not understand.

So the model that gets adopted is not the model that is most right; it is the model that is most explainable to a non-technical CMO at 9am on a Tuesday.

We delivered that model. The 15% conversion uplift is the visible number. The invisible number, the one that matters more, is that the team kept using the system after I left. That is the test of any consultant: did the thing you built outlive the engagement? In this case, yes, because the team trusted what they could explain.
