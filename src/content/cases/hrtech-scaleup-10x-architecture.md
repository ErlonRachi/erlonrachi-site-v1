---
title: "Re-Architecting an HR-Tech Scale-Up for 10× Growth"
client: "Brazilian HR Tech scale-up"
year: "2026"
primaryTheme: "cost-reduction"
secondaryThemes: ["strategy-vision"]
metric: "10× scalability headroom; 30% infrastructure cost cut; 66% drop in shipping errors."
---

## In brief

**Situation.** A fast-growing HR Tech company had built its early product on pgvector, Railway, and Heroku, the classic startup combination that gets you to product-market fit but does not get you to the next zero.

**Complication.** Leadership had committed to a 10× volume expansion over three years. The legacy stack could not carry it. Costs were creeping up, deploys were getting brittle, and the engineering team was burning hours on coordination and bug-firefighting rather than on shipping features.

**Resolution.** I led a four-person engagement in two phases. Phase one was diagnostic: a frank, numbers-backed assessment of the existing architecture, with cost modelling and scalability projections. Phase two was rebuild: an AI-ready analytical environment, full data governance, an MLOps lab, and a production environment with DevOps practices wired in from day one, sized for 10× volume over three years. We also integrated Anthropic's Claude into the CI/CD pipeline to catch shipping errors before they reached production.

**Impact.** 10× scalability headroom architected in. 30% reduction in current infrastructure cost. 66% drop in code shipping errors via the Claude integration. The integration paid for itself within weeks.

## The longer story

Every scale-up I have ever seen has the same architecture diagram drawn somewhere on a whiteboard, with an apologetic shrug attached: "I know, I know, but it works for now." That is actually the right answer for a Series A. It is a catastrophically wrong answer the moment someone signs a deal that 10× the load.

The interesting bit of this engagement was not the cloud diagram. Anyone competent can draw one. The interesting bit was Claude in the CI/CD pipeline.

Software engineers, by professional pride, tend to believe their code mostly works. The data says it mostly does, except for the bit that does not, which is the bit that ships at 4pm on a Friday because someone wanted to clear their plate before the weekend. What if you put a tireless, calm, slightly pedantic colleague at the gate, who reads every PR and politely points out the bit you got wrong? Errors dropped by two-thirds.

The economic value of that was not really in the avoided bugs. It was in giving every engineer their attention back. People who spend their week fighting fires cannot think; people who can think build the thing that 10× the company.

The architecture was the boring part. The behavioural shift, engineers trusting that a second pair of eyes was on every commit, was the part that compounded.
