---
title: "Building Iarandu's Own Agentic AI IP"
client: "Iarandu (my own firm)"
year: "2026"
primaryTheme: "cost-reduction"
secondaryThemes: ["strategy-vision"]
metric: "25% reduction in development cycle time; productised Agentic AI now a core IP asset of the firm."
---

## In brief

**Situation.** Iarandu's positioning is straightforward: a consultancy that builds Agentic AI for regulated industries and scaling organisations.

**Complication.** A consultancy that recommends AI integration without using it itself carries a credibility gap. Clients can smell it. The slide deck says "embrace the future"; the consultant's own development workflow says "we still ship by Slack message and prayer." The gap closes the door before the pitch is over.

**Resolution.** I built Iarandu's own productised Agentic AI integrations, connecting Anthropic's Claude with Slack, Jira, Railway, and Heroku, and we run them in production. Two design principles drove everything: AI augments human decision rather than replacing it, and every Claude-mediated action is auditable through traceable metadata. Both principles are now baked into Iarandu's IP rather than bolted on.

**Impact.** 25% reduction in development cycle time inside Iarandu. The IP is now a core asset of the firm, referenced in every client engagement, and licensed to clients as a reference implementation when the conversation calls for it.

## The longer story

There is a particular flavour of meeting that every consultant has experienced, in which a senior client asks, with a small twinkle, "so, do you use this stuff yourselves?" What they are testing is whether you have eaten the cooking, or whether you are just selling the cookbook.

We decided, very early, that Iarandu would always be able to answer "yes". Not as marketing, but as engineering. So I built the integrations we recommend, on the firm's own product and governance workflows, and we use them every day to ship the thing we use to ship things.

The shipping-cycle reduction is the visible win. The invisible win is what happens when a client asks, in the discovery meeting, "how do you actually integrate Claude into a real workflow?" We do not reach for a slide. We reach for the screen, and we show them a Slack channel where Claude has just suggested a fix to a Jira ticket, with an auditable metadata trail showing why.

The credibility differential is enormous. The lesson, in case it needs stating: be your own first customer. If your product is not good enough for you, it is not good enough for them, and they will know.
