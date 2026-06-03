---
title: "The Secret Sauce Is Still a Secret"
description: "10% algorithm, 20% data and governance, 70% process and people. The 10/20/70 ratio is the most important number in enterprise AI rollout right now, and almost nobody is acting on it."
tagline: "AI implementation success is not about algorithms and models, it is all about everything around them"
pillar: "leadership"
publishedDate: 2026-06-03
---

*It is not about algorithms and models, it is about everything around them.*

Fifteen months ago I wrote a piece called *Implementing AI Solutions: The Practical Playbook for Innovators*. I closed it with a line that has aged remarkably well: AI success boils down to clarity of purpose, agile processes, and people who understand, embrace and innovate with data. I called it then the Three Ps: People, Processes and Prowess.

Prowess is the deep technical craft: the mathematicians, the statisticians, the data scientists, the data architects. Processes are how work actually moves through your organisation. People are everyone else whose lives the AI is about to touch.

Time went by and two things happened to this framework. It got sturdier and there is more data to support it.

By the freshest counts, AI adoption is nearly universal: 88% of organisations have it in production somewhere, but measurable enterprise-wide returns remain rare. RAND's 2025 analysis put the project-level failure rate at around 80%; MIT's NANDA study found that 95% of GenAI pilots produce no detectable P&L impact at all.

The technology hasn't gotten worse. The frontier models are dramatically better than they were a year ago. So what is actually going wrong?

Once you analyse independently researched reports released by Gartner, MIT NANDA, McKinsey and RAND, seeking reasons for AI initiatives failures throughout 2025 and early 2026, out of every hundred enterprise AI projects that failed, about ten did so because the algorithm wasn't good enough, twenty crumbled under bad data or weak governance, while seventy came out short due to poorly mapped processes, or because the organisation wasn't prepared for the cultural change AI required.

Let me repeat this ratio: 10/20/70. This is the most important ratio in enterprise AI rollout right now, and almost nobody is acting on it.

## For people that treat AI like magic, this is the big misdirection

I talk to a lot of people either in summits, workshops or in leadership meetings organized around Data & AI. The conversation always spins around questions like: Which model? Which vendor? Build or buy? Fine-tune or RAG? Multi-agent or single? Claude or GPT or Gemini?

I saw the field evolve from humble neural networks to the hundred-billion parameter models common these days. I enjoy engineering data flows and robust data architectures. I care about these conversations, I am a mathematician who cares about data after all. That's why I can't ignore the 10/20/70 ratio.

Every one of those questions sits inside the 10%, while the ones related to the other 90% are barely considered.

Companies that are more data savvy go one step further and tackle questions related to the 20% bracket like weak governance and bad data. I have myself championed data quality and data governance offices and I can tell that flawed data is usually downstream of messy, poorly designed processes. Weak governance is usually downstream of unprepared people, poor communications, tepid accountability. They're not really separate categories so much as symptoms of the same underlying neglect.

Few people ask: *Do we actually know how this process works today? Have we agreed what success looks like before we start? Have we prepared the people whose roles this will reshape?* These are the questions that decide whether the AI ever produces a return. They're also the questions almost everyone skips, because they're harder, slower, less photogenic, and don't make for impressive demos.

Gartner's April 2026 release was the most direct piece of evidence yet. Of the I&O leaders who reported AI failures, 57% blamed unrealistic timelines: *"expected too much, too fast."* That isn't a technology failure. That's a culture-and-expectation failure dressed in technology's clothes.

It is perfectly consistent with separate research from RAND and McKinsey. MIT Sloan points out 73% of failed AI projects had no agreed definition of success before starting, 61% of projects approved on projected ROI were never measured post-launch, 380% average RAG cost overrun versus pilot projections, merely 14-month median time from pilot approval to shutdown.

They paint a bleak picture of just a small minority of organisations that *do* see real returns from AI, which are roughly twice as likely to have redesigned their workflows *before* picking a model.

This is the central mistake of the AI investment cycle so far. We are pouring 90% of attention and budget into 10% of the problem.

I find myself repeating in client conversations since mid-2025: LLMs, cleverly designed agentic flows, multi-agent systems, they all crumble if they are fed poor data, if they are poorly governed, and if they land onto organisations that have not been prepared to use them.

## Data oriented way to approach the 70% Sphinx

Here's where the diagnosis becomes practical. The big chunk of those 70% assigned to "processes" lives in event logs and system flows; another considerable part lives in human heads; the remainder has never been recorded and work gets done by hard work, chaotic interactions around loosely defined interactions binded by software.

I used two distinct and serious approaches to deliver pretty successful projects this year. Both work. Both require culture change to succeed. Both are evolutions of what has worked for me in almost 20 years of implementing data projects.

### Process mining

Process mining reconstructs how work actually happens, from the digital footprints your systems already produce. Every ERP, CRM, ticketing and workflow tool emits event logs. Tools like Celonis, SAP Signavio, IBM, UiPath and Microsoft read those logs and rebuild your real process. It can also be applied through human observation, interviewing, recording: every variation, every bottleneck, every "we always do it this way except when..." that today lives only in someone's head.

What it gives you is honest scope. It helps you focus on the one or two steps that actually matter, not the twelve a demo promises to automate. It provides a defensible success baseline related to cycle time, cost per transaction, variant count. It maps paths for ROI validation and team engagement.

### Agent choreography

The second approach is newer and considerably less understood. Instead of building one large AI agent that runs through a fixed playbook, you build a network of smaller, specialised agents that *listen* for business events (an order being placed, a complaint filed, a regulatory deadline approaching) and coordinate among themselves to respond. There is no central conductor. Each agent reacts to what it sees, calls others when it needs help, and steps back when its job is done.

The industry name for this is "event-driven multi-agent architecture." For the rest of us, *agent choreography* is a more useful shorthand: it borrows from distributed-systems terminology that already distinguishes between orchestration (a central planner tells everyone what to do) and choreography (each participant reacts to events). Choreography turns out to be a far better fit for the messy, non-linear, exception-heavy processes that defeat traditional AI workflows, and for organisations that can't realistically be re-engineered to fit a rigid linear flow.

## Both demand culture change and support from the top

Here is where the conversation usually goes off the rails. Projects fail at the top. Boards and C-suites that approve AI budgets without genuinely understanding what AI does or doesn't do. CEOs who treat models as magic and timelines as standard software contracts. CFOs who demand 12-month payback on what is, honestly, a capability investment. Executive committees that revise the definition of success three times during a six-month build.

Process mining and agent choreography both expose the messy reality of how work actually flows. That is their power. It is also why they often hit the most resistance at the top: they make uncomfortable things visible. Without genuine executive willingness to look at the real process, accept that timelines are set by the people-side rather than the software-side, and redesign roles before redesigning systems, neither technique will deliver what it could.

## Now what?

If you were to ask me to strip everything in this piece and boil it down: across thousands of failed enterprise AI projects, the cause was almost never the algorithm itself. It was the process the algorithm landed on, or the organisation who weren't ready to receive it.

The roadmap to turn this game around exists. Tools are all here. The models are cheap and abundant. Process mining is mature. Agent choreography is rapidly maturing. The change-management playbooks have been written for two decades. When you explain your approach, management engages and supports.

What is missing is the discipline to do the un-glamorous 70% before reaching for the 30%.

I've spent this year delivering three engagements that combined these two approaches. They work. There are real ups and downs, real surprises, and real lessons about where each technique shines and where each one struggles. I'll explore them, the wins, the misfires, and the parts I wish I'd done differently, in the next piece.

Mine the process. Choreograph the agents. Prepare the people, starting with the people who sign the cheques. Then build.

The Three Ps have not changed. The data has finally caught up.

---

*If you are working on landing an AI project that delivers measurable ROI, and if you do not want to end at the 80% graveyard, I'd be glad to compare notes. Find me on [LinkedIn](https://linkedin.com/in/erlonrachi).*
