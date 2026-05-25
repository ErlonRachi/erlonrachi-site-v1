**Public Portfolio**

**Erlon Rachi \- 32 projects, 2013-2026**

*These thirty-two projects, executed from 2013 throughout 2026, brought real impact for the companies that commissioned them and were also learning opportunities for me and the teammates who shared the journey. Client names have been withheld in this public version \- the work and the business impact are described in full. For my employers, clients, partners, mentors and friends, I will be forever grateful. Nothing that is worth doing can be done alone.*

Each case is presented twice. First, briefly, as Situation-Complication-Resolution \- what the world looked like, why it was a problem, and what I did about it. Then, more discursively, as a story \- because every project, in the end, is a story about people. Read either or both.

*Case 1 | Contractor era \- 2026*

# **Re-Architecting an HR-Tech Scale-Up for 10x Growth**

*Brazilian HR Tech scale-up / Lead Consultant, team of 4 (incl. Erlon)*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A fast-growing HR Tech company had built its early product on pgvector, Railway, and Heroku — the classic startup combination that gets you to product-market fit but doesn't get you to the next zero.

**Complication.** Leadership had committed to a 10x volume expansion over three years. The legacy stack couldn't carry it. Costs were creeping up, deploys were getting brittle, and the engineering team was burning hours on coordination and bug-firefighting rather than on shipping features.

**Resolution.** I led a four-person engagement in two phases. Phase one was diagnostic: a frank, numbers-backed assessment of the existing architecture, with cost modelling and scalability projections. Phase two was rebuild: an AI-ready analytical environment, full data governance, an MLOps lab, and a production environment with DevOps practices wired in from day one — sized for 10x volume over three years. We also integrated Anthropic's Claude into the CI/CD pipeline to catch shipping errors before they reached production.

**Impact.** 10x scalability headroom architected in. 30% reduction in current infrastructure cost. 66% drop in code shipping errors via the Claude integration. The integration paid for itself within weeks.

## **The longer story**

Every scale-up I've ever seen has the same architecture diagram drawn somewhere on a whiteboard, with an apologetic shrug attached: 'I know, I know, but it works for now.' That's actually the right answer for a Series A. It's a catastrophically wrong answer the moment someone signs a deal that 10x's the load. The interesting bit of this engagement wasn't the cloud diagram — anyone competent can draw one. The interesting bit was Claude in the CI/CD pipeline. Software engineers, by professional pride, tend to believe their code mostly works. The data says it mostly does — except for the bit that doesn't, which is the bit that ships at 4pm on a Friday because someone wanted to clear their plate before the weekend. What if you put a tireless, calm, slightly pedantic colleague at the gate, who reads every PR and politely points out the bit you got wrong? Errors dropped by two-thirds. The economic value of that wasn't really in the avoided bugs. It was in giving every engineer their attention back. People who spend their week fighting fires can't think; people who can think build the thing that 10x's the company. The architecture was the boring part. The behavioural shift — engineers trusting that a second pair of eyes was on every commit — was the part that compounded.

*Case 2 | Contractor era \- 2026*

# **Compliance Automation for a Safety-Critical National Regulator**

*National regulator in a safety-critical sector / Co-Founder & Principal Consultant, two-person team*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A national regulatory agency, responsible for one of the most safety-critical sectors of its economy, employed deep specialist analysts whose judgment is genuinely irreplaceable.

**Complication.** Those specialists were spending a large fraction of their week not on substantive decisions, but on procedural review — the kind of work where the document either ticks the box or doesn't. Meanwhile the regulated industry was moving faster, and the backlog was growing.

**Resolution.** I led the engagement end-to-end across three blocks. (1) Data infrastructure modernisation and migration, with data governance built for a regulated environment. (2) Cybersecurity hardening across the analytical and operational stack. (3) Targeted AI integration using Google Gemini, scoped narrowly: not to make compliance decisions, but to prepare, summarise, and pre-classify the inputs that specialists then review. We applied EU AI Act-equivalent principles — explainability, auditability, clear separation between AI suggestion and human decision.

**Impact.** 90% reduction in analyst review time on automated workflows. Specialist capacity released for the high-judgment decisions only they can make. Infrastructure foundation now supports continued AI expansion across other compliance functions.

## **The longer story**

If you talk to anyone who works in a serious regulator, they will eventually tell you the same thing: 'My problem isn't the hard cases. My problem is the easy cases drowning out the hard ones.' This is the part the AI-replaces-humans narrative gets exactly backwards. Nobody wants a machine deciding nuclear safety questions. But everybody — including the regulators themselves — wants a machine doing the photocopying that surrounds the decision. We built precisely that: an AI that prepares, sorts, and pre-flags so that a specialist who used to spend Monday reading 200 pages to find the three that mattered, now opens Monday morning with those three pages already on top of the stack. The specialist still decides. That is the entire point. The deeper lesson is one that comes up in every regulated environment I work in: the political legitimacy of AI in government comes from where you draw the line. Draw it in the wrong place and the whole programme dies in a press conference. Draw it where the humans still own the verdict and the AI only handles the queue, and suddenly you have a productive, trusted partnership. 90% less time on the boring bits means more time on the bits that actually keep a country safe.

*Case 3 | Contractor era \- 2026*

# **AdTech Campaign Effectiveness — From Intuition to Evidence**

*Italian AdTech firm / Solo engagement, Lead Consultant*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A European AdTech firm wanted a sharper, more defensible view of which campaign characteristics were actually driving conversion — not which ones the team felt were driving conversion.

**Complication.** Campaign managers were making decisions on a mix of pattern-matching and gut. When you asked why a campaign performed well, the answer was usually a story. Stories are unfortunately not a reliable basis for budget allocation.

**Resolution.** Working solo over three months, I designed the analytical pipeline on Google Cloud and Vertex AI, built a predictive model linking campaign attributes to conversion outcomes, and established an A/B testing framework the client could run independently after delivery. I deliberately prioritised interpretability over black-box accuracy — campaign managers had to trust the recommendations enough to act on them. The system was scoped as an evidence-generating tool for the human, not a replacement for them.

**Impact.** 15% conversion-rate uplift across the campaigns analysed. A repeatable A/B testing framework now embedded in the client's operating cadence — they can ask the question again, monthly, forever, without me.

## **The longer story**

AdTech has a strange dirty secret: most of the people running campaigns are extraordinarily talented pattern-spotters, and most of those patterns are wrong. Not because they're stupid — quite the opposite — but because humans are evolved to find patterns even in random data. We're confidence machines. The trick with building analytics for this audience isn't accuracy. The trick is interpretability. I could have built a deep-learning monster that out-predicted my interpretable model by three percentage points. Nobody would have used it. The reason is psychological: a campaign manager cannot defend, in a meeting with the client, a recommendation they don't understand. So the model that gets adopted is not the model that's most right; it's the model that's most explainable to a non-technical CMO at 9am on a Tuesday. We delivered that model. The 15% conversion uplift is the visible number. The invisible number — the one that matters more — is that the team kept using the system after I left. That's the test of any consultant: did the thing you built outlive the engagement? In this case, yes — because the team trusted what they could explain.

*Case 4 | Contractor era \- 2025-2026*

# **AI Foundation for a UK RegTech Startup**

*UK-based RegTech / process-mining startup / Lead Consultant, team of 3 (incl. Erlon)*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A UK RegTech startup operating in the process-mining space was building an enterprise product whose commercial proposition rested on a single word: assurance. Enterprise clients would only buy if they trusted the analytics. They would only trust the analytics if they trusted the data underneath.

**Complication.** Startup pace and enterprise-grade rigour pull in opposite directions. Move fast and you cut corners; move carefully and you don't ship. The founders needed both.

**Resolution.** Leading a team of three across eight months, I designed and implemented cloud infrastructure (multi-vendor), established the AI integration pattern for the process-mining engine, and built the data-quality framework that guaranteed the level of accuracy needed for the startup to make assurance claims to its enterprise clients. Data lineage, validation, and accuracy controls were architectural, not bolted on. The engagement was paced for short iterations and weekly founder check-ins.

**Impact.** AI foundation delivered. Cloud infrastructure operational. Data-quality and assurance framework now in production, supporting the startup's enterprise client conversations with verifiable accuracy claims.

## **The longer story**

Selling RegTech to an enterprise is a strange theatre. The buyer is not buying software. The buyer is buying a story they can tell their auditor. If that story has a single weak link — a single 'and how do we know the data is right?' that ends in a shrug — the deal dies, often quietly. The job, then, is not to build a piece of process-mining software. The job is to build a piece of process-mining software AND simultaneously build the paper trail that lets a Chief Risk Officer sleep at night. We baked the assurance layer into the architecture from week one because retrofitting it later would have been like trying to add foundations to a finished house. The lesson generalises. Every startup selling to large institutions eventually discovers that 60% of their product is the actual product, and 40% is the artefacts that let the buyer prove to a third party that they did the right thing in buying it. Treat the assurance layer as a feature, not as overhead. It's the only feature the auditor reads.

*Case 5 | Contractor era \- 2026*

# **Building Iarandu's Own Agentic AI IP**

*Iarandu (my firm) / Co-Founder, solo build*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Iarandu's positioning is straightforward: a consultancy that builds Agentic AI for regulated industries and scaling organisations.

**Complication.** A consultancy that recommends AI integration without using it itself carries a credibility gap. Clients can smell it. The slide deck says 'embrace the future'; the consultant's own development workflow says 'we still ship by Slack message and prayer.' The gap closes the door before the pitch is over.

**Resolution.** I built Iarandu's own productised Agentic AI integrations — connecting Anthropic's Claude with Slack, Jira, Railway, and Heroku — and we run them in production. Two design principles drove everything: AI augments human decision rather than replacing it, and every Claude-mediated action is auditable through traceable metadata. Both principles are now baked into Iarandu's IP rather than bolted on.

**Impact.** 25% reduction in development cycle time inside Iarandu. The IP is now a core asset of the firm, referenced in every client engagement, and licensed to clients as a reference implementation when the conversation calls for it.

## **The longer story**

There is a particular flavour of meeting that every consultant has experienced, in which a senior client asks, with a small twinkle, 'so, do you use this stuff yourselves?' What they're testing is whether you've eaten the cooking, or whether you're just selling the cookbook. We decided, very early, that Iarandu would always be able to answer 'yes' — not as marketing, but as engineering. So I built the integrations we recommend, on the firm's own product and governance workflows, and we use them every day to ship the thing we use to ship things. The shipping-cycle reduction is the visible win. The invisible win is what happens when a client asks, in the discovery meeting, 'how do you actually integrate Claude into a real workflow?' We do not reach for a slide. We reach for the screen, and we show them a Slack channel where Claude has just suggested a fix to a Jira ticket, with an auditable metadata trail showing why. The credibility differential is enormous. The lesson, in case it needs stating: be your own first customer. If your product isn't good enough for you, it isn't good enough for them, and they will know.

*Case 6 | 2022-2025*

# **Founding a Unified Data & AI Function in a Multinational**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A multinational operating across 20+ countries had grown its data, BI, and AI capabilities organically — which is a polite way of saying they were scattered across reporting lines (CTO, CFO, Innovation Lab), with different career paths, compensations, and processes.

**Complication.** On paper, the organisation said 'we are data-driven.' In practice, dashboards contradicted each other, AI initiatives competed with reporting for attention, and the C-suite did not know which numbers to trust.

**Resolution.** Reporting to the CTO, I consolidated three departments into one Technology, Data & AI function. Using a Goals/Strategy/Tactics framework, I aligned C-level vision, built an 18-month action plan, restructured the team into clear topologies, unified budgets and partnership management, and worked with the People function to fix compensation discrepancies and standardise career paths.

**Impact.** Three senior heads now reported directly to me: Technology and Big Data Infrastructure; Business Intelligence and Analytics; and Data Products and AI. The area moved from being a report-provider to becoming the breeding ground of a strategic competency. Every project listed in this portfolio's 2022-2025 section happened because this foundation existed.

## **The longer story**

Imagine someone gives you three boats, each crewed by people who slightly dislike each other, and asks you to win a regatta. Your first instinct is to buy faster sails. That is the wrong instinct. The right instinct is to figure out why the crews dislike each other, because no amount of equipment beats a crew that rows together. My single biggest leadership conviction is that the central data function in any company should aspire to be like electricity — ubiquitous, invisible, taken for granted, and unbelievably important the moment it goes off. You cannot get to that state by buying a better data warehouse. You get there by doing the unglamorous work of fixing compensation bands, unifying budgets so people stop fighting over scraps, drawing organisational charts that make competing agendas impossible, and giving teams clear KPIs that they themselves measure against. The technology was the easiest part. The hardest part — and the part that took 18 months — was making three sets of people who had previously reported to three different bosses believe that they now belonged to the same thing. Once they believed it, every subsequent project in this portfolio became dramatically cheaper to deliver.

*Case 7 | 2022-2025*

# **Data FinOps — Putting a Price on Curiosity**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Big-data infrastructure is expensive in a way that hides until it doesn't. Every department was running queries, building dashboards, and asking for AI experiments, and the bill was landing on one central line in the budget.

**Complication.** When data is 'free' to the requesting department, demand is infinite. Reports are commissioned and then never opened. Dashboards proliferate. The cloud bill grows. The team gets blamed for spending without anyone noticing that the spending is being driven by the requesters, not the providers.

**Resolution.** I sponsored a Data FinOps programme with Microsoft and Databricks to allocate cloud data-processing costs back to the requesting business areas. I worked with the CFO, CTO, and CCO to make sure cost transparency was wired into how teams prioritised. KPIs, reports, and dashboards were rated by strategic value and impact.

**Impact.** Department heads gained clear visibility into their data consumption and cost. Analytical requests became more deliberate. ROI moved from being a slogan to being a number. Resource allocation improved measurably; financial efficiency of the data function rose significantly.

## **The longer story**

The moment you put a price on something previously free, behaviour changes overnight. Restaurants did not invent the dessert menu by accident. The single most useful intervention I have ever made as a budget owner has been to put numbers next to requests. Not to refuse them — refusal makes you the villain — but to display them. 'Yes, you can have this dashboard. It costs £4,000 a month to keep running. Are you sure?' Suddenly the dashboard that someone wanted last quarter is no longer essential. The deeper insight is behavioural: most over-consumption in organisations isn't malice, it's invisibility. Make the cost visible and people self-correct without you ever having to say no. This is much more sustainable than gatekeeping, because gatekeeping creates resentment whereas visibility creates partnership. By the end of the year, the same teams that had been requesting endlessly were proactively coming to us asking 'can we kill these three reports we no longer use?' That is the holy grail of any cost transformation: customers volunteering to give back what they once demanded.

*Case 8 | 2022-2025*

# **GA4 Migration Without Losing the Plot**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Google announced the deprecation of Universal Analytics and the move to GA4. Every business that ran its marketing on Google Analytics — which is essentially every consumer business — had a six-month window to migrate.

**Complication.** Migrating analytics is not like changing a coffee supplier. It means rebuilding dashboards, redefining metrics, and reassessing the business value of every KPI the company had been using for years. Get it wrong and the marketing and commercial teams lose their visibility on revenue. Get it slow and the deadline passes.

**Resolution.** I oversaw the full migration within the six-month window, with execution led by the Head of BI and Analytics reporting to me. Stakeholders — Marketing, Global Commercial — were involved continuously to reassess the business value of each metric before re-implementing it. Dashboards, algorithms, and reports were all transitioned without rupture.

**Impact.** Critical analytics assets preserved. Insights to business users continued uninterrupted. The company's analytical capability survived a vendor-imposed platform change that broke a lot of other companies' reporting for months.

## **The longer story**

Forced migrations have one underrated virtue: they make you throw things out. Most companies have a graveyard of dashboards built three CMOs ago, watched by no-one, but still consuming engineering attention because nobody dared switch them off. A vendor-imposed migration is a free pass to do the audit. You can't migrate everything in six months, so you migrate what matters. By the time we finished, we had not just a GA4 implementation — we had a leaner, more deliberate set of metrics that the business actually used. Half the dashboards never came back. Nobody noticed. The lesson is one I now apply on purpose, even when nobody is forcing me: every two years, schedule a 'forced migration' on yourself. Pretend the tool is going away. Decide what you'd rebuild. Quietly retire the rest. Organisations that do this stay light. Organisations that don't end up paying engineers to maintain dashboards last looked at in 2019\.

*Case 9 | 2022-2025*

# **A Season's Worth of Sport, Decoded**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The business sat on top of fan engagement with major sports leagues — football, basketball, tennis, the lot — across multiple markets. Each season generated an avalanche of customer behaviour, league performance, and sponsorship signal.

**Complication.** The marketing team had to decide, with millions of euros at stake, where to spend sponsorship budget for next season. They were doing it largely on relationships and gut. The data existed; nobody had built the analytical pipeline to turn it into a season-spanning narrative.

**Resolution.** I oversaw a comprehensive Season Analysis across the leagues that represented over 90% of the business — covering customer behaviour, fan engagement, on-field team performance, and sponsorship ROI. The Head of BI and Analytics, reporting to me, ran the detailed analytical work. The result was a structured, repeatable framework that translated a sport season into commercial decisions.

**Impact.** Multi-million-euro commercial strategies were directly informed by the analysis. Marketing decisions on sponsorship and channel allocation became evidence-based. A repeatable blueprint and new KPIs were established for the 2025 season onwards — the analytical maturity of the company stepped up.

## **The longer story**

Sport is the oldest commercial drama humans have. Two teams enter, one team wins, the crowd reacts, and someone, somewhere, decides how to spend money based on what just happened. The interesting commercial question is not 'who won?' — anyone with a phone knows that. The interesting question is 'what happened to the audience while they were watching?' That is a much harder question. You need to overlay behavioural data on top of league data on top of sponsorship data on top of season-long narratives, and you need to do it for dozens of leagues simultaneously. Once you do, an extraordinary thing becomes visible: not all wins are equal. A 4-0 thrashing of a rival generates different commercial value to a 2-1 nail-biter, even though both count as 'a win.' Drama drives engagement; engagement drives spend. Once you can see the difference in your data, you stop sponsoring the team and start sponsoring the moment. That insight reshaped how we placed multi-million-euro bets on the next season.

*Case 10 | 2022-2025*

# **Listening to Customers by Triangulating Their Behaviour**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Customer journey mapping in most companies is done in workshops, on whiteboards, with sticky notes, by people who are not the customer. The result is a beautiful diagram of the journey the company thinks the customer takes.

**Complication.** Real customers don't take that journey. They wander. They abandon. They come back. They use the product in ways nobody imagined. The fixed-path journey map becomes a piece of office decor while the actual customers continue to misbehave in revealing ways.

**Resolution.** I co-led, with the Commercial Director of Customer Experience, a project to capture the actual journey from data — what we called the Timeline of Facts. Analytical pipelines ingested behavioural data across thousands of customer journeys in multiple markets, with algorithms determining the primary, secondary, and tertiary root causes of dissatisfaction. The two technical heads reporting to me — Big Data Infrastructure, and BI and Analytics — ran the execution.

**Impact.** Dramatically improved understanding of where products were failing customers. The Customer Experience team's analytical work was streamlined and response times accelerated. The methodology is now scalable across markets and products, providing a foundation for continuous product improvement.

## **The longer story**

The single most important question in customer experience is one most companies are afraid to ask: 'why did our customer give up?' We are afraid of the answer because the answer is often 'because of something we did.' The advantage of pulling the journey from actual behavioural data, rather than from a workshop, is that the data doesn't lie politely. It says 'on average, your customers abandon at step seven, and the reason is that step seven is annoying.' Once we built the timeline-of-facts pipeline, every department that touched the customer had to look at the same data. The marketing team could no longer claim their campaign worked while the product team claimed the product was fine. Both teams shared a customer who was, at this exact step, deciding to give up. Conversations changed. Defensiveness dropped. You cannot triangulate excuses; the data has only one version of events.

*Case 11 | 2022-2025*

# **Reading Customer Mindset From Product Telemetry**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Customers don't tell you how they feel. They tell you how they feel by what they do — by how fast they click, how often they reload, what they abandon, what they return to. Every product generates this signal continuously.

**Complication.** Translating raw interaction telemetry into emotional and behavioural indicators — anxiety, frustration, joy, engagement, eagerness, satisfaction — requires both deep data modelling and careful collaboration with the people responsible for customer welfare.

**Resolution.** Building on the Timeline of Facts work, this initiative used advanced data modelling to translate product interactions into mindset indicators. The work was scoped with close collaboration from Customer Experience, Product Development, and Responsible Customer Engagement to ensure the analytics aligned with business objectives and with the company's duty of care.

**Impact.** Better understanding of customer mindsets, leading to improved product development, more personalised experiences, and — importantly — a proactive lens on responsible behaviour for at-risk users.

## **The longer story**

Here is a thing that took me far too long to fully internalise: human beings are very bad at telling you why they did something, and very good at telling you something that sounds plausible. The data is the opposite. The data is honest in a way the survey isn't. If a customer clicks the same button seven times in two seconds, they are not 'engaged.' They are frustrated. The system has failed them, and they have communicated this in the only language available — by hitting the button harder. The interesting design question in a gaming product is that the same telemetry that tells you 'this customer is loving it' also tells you 'this customer is in trouble.' Joy and compulsion are not the same thing, and a responsible operator needs to be able to tell them apart. The model we built doesn't replace human judgment; it lights up the cases that need it. That is, I think, the right ethical posture: AI as the early-warning system, humans as the responders.

*Case 12 | 2022-2025*

# **Architecting a Customer Data Platform**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The company held vast amounts of customer interaction data: CRM, product behaviour, preferences, qualified personal information — all of it sitting in separate systems, none of it speaking to the others.

**Complication.** Without a unified Customer Data Platform, every personalisation effort started from scratch. Every CRM campaign reinvented its own audience definitions. AI work was bottlenecked on data plumbing. And compliance with GDPR and equivalent frameworks was getting harder, not easier, as data sprawled.

**Resolution.** I provided strategic direction for a major long-term CDP initiative in collaboration with a London-based digital transformation consultancy. The platform integrated all customer interaction data into a single architecture with built-in EU regulatory compliance. I guided the Head of Big Data Infrastructure on the technical roadmap.

**Impact.** Significant foundational groundwork laid: data architecture, ingestion processes, data quality standards, governance. Enables future monetisation of data assets, drives customer behaviour insights, supports responsible-gaming practices, and enhances campaign and CRM effectiveness. The CDP is now the strategic backbone of all customer-oriented developments.

## **The longer story**

The trouble with a Customer Data Platform is that it is the IT equivalent of the Sagrada Família — it takes years, costs more than promised, and looks, midway through construction, like an expensive failure. Almost no Customer Data Platform is 'finished' the day a CIO leaves. The job, then, is not to finish it. The job is to lay foundations that the next person — and the person after them — can keep building on without having to dig up what you did. Architecture, in this sense, is the politest form of legacy planning. Get the foundations right and successors look like geniuses. Get them wrong and successors look like archaeologists. The platform we set up is now the spine of every customer-facing AI initiative the company runs. I will not be there to see its full bloom, and that is fine. The point of laying a foundation is precisely that you are betting on a future you will not personally inhabit. The discipline is anti-narcissistic, and the world needs more of it.

*Case 13 | 2022-2025*

# **Standing Up a Development Centre in a New Geography**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The company's data product capability was concentrated in European development centres. Growth ambitions and talent economics both pointed to expanding beyond Europe.

**Complication.** Establishing a development centre in a new country is not the same as opening an office. It requires balancing existing teams' roadmaps, transferring company culture, deciding who travels, who gets promoted, who teaches, and how compensation works across regions. Get it wrong and you build a B-team that resents the A-team. Get it right and you double your effective capacity.

**Resolution.** I led the establishment of a fully-fledged Data Product Development Center in Brazil. The work included identifying culture ambassadors to transfer the company ethos, assessing existing team members for promotion, identifying training needs, and adjusting compensation frameworks to be fair across regions.

**Impact.** Centre successfully created and fully integrated into the global data strategy, enabling localised development aligned with company objectives. Effective data capacity expanded without a culture rupture.

## **The longer story**

Setting up a development centre in a new country is mostly an exercise in anthropology. The technology travels easily — you can install the same tools anywhere. The culture does not. Send the wrong person to set up an office and within six months you have two cultures, one of which is the parody version of the other. The trick is to identify, in the existing team, the people who carry the culture without realising they carry it. They are usually not the loudest. They are usually the ones whom everyone else cites when they say 'this is how we do things here.' Those are your culture ambassadors. Send them. Pay them well. Promote them when they come back. The companies that successfully internationalise are the companies that recognise this is a human-systems problem, not a logistics problem. The companies that fail tend to send whoever was available.

*Case 14 | 2022-2025*

# **Connecting Marketing Spend to Revenue, Properly**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Marketing and CRM teams ran campaign after campaign, each with its own measurement story. At budget review time, every team could show that its campaigns had 'performed well.'

**Complication.** When every campaign performs well, total performance is somehow still flat. The arithmetic doesn't work. The reason is that campaign measurement was disconnected from real P\&L impact, and nobody was systematically integrating product, marketing, and CRM data against actual financial outcomes.

**Resolution.** I co-led, with the Director of CRM, the Campaign Effectiveness Analysis project. The Head of BI and Analytics led the execution. The team built a database combining proprietary product data with public and commercial datasets — many of which had never been integrated into the big-data architecture. Models linked historical marketing and CRM campaigns directly to P\&L outcomes and strategic corporate goals.

**Impact.** Commercial and Marketing teams gained genuine visibility into the timing, effectiveness, and ROI of their campaigns. Budget allocation became evidence-based. The company's approach to campaign analysis was reset to a defensible standard.

## **The longer story**

Every marketing department in the world keeps a small museum of campaigns it considers triumphs. The exhibits glow under spotlights of selective memory. The reason they all glow is that the metrics by which they're judged were chosen by the people who ran them. This is not malicious. This is human. Anyone given the chance to grade their own homework will not give themselves an F. The only solution is to take the grading away. Once campaign effectiveness was tied to real P\&L outcomes — to the actual numbers that the CFO recognised — the conversation changed. Some long-loved campaigns turned out to have been roughly break-even. Some unloved campaigns turned out to have been quietly carrying the year. Money started moving from the photogenic campaigns to the workhorses. Total performance stopped being flat. The lesson, applicable everywhere: if your measurement system was chosen by the team being measured, you don't have measurement. You have theatre.

*Case 15 | 2022-2025*

# **A Multi-Cloud Strategy That Wasn't About Clouds**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The company was running on a hybrid of on-premises infrastructure and a single cloud provider. Both data volumes and AI ambitions were growing faster than the existing setup could absorb.

**Complication.** Doubling down on a single cloud meant single-vendor risk and rising costs. Splitting across clouds without a plan meant operational chaos. Neither option was good. A real multi-cloud strategy — diversified, integrated, with a coherent data mesh — was needed, but it was a multi-year initiative with significant up-front cost.

**Resolution.** Under the CTO's guidance, I co-led the Multi Cloud Strategy with the Director of Technology and Infrastructure, drawing on Gartner research and partnerships with Google, AWS, Microsoft, and Databricks. We defined strategic objectives, built a comprehensive technical roadmap, ran an MVP to establish performance baselines, and aligned partners on integration, scalability, cost, and pricing.

**Impact.** A robust framework capable of scaling efficiently, controlling operational expenses, and supporting sustained growth. Long-term foundation laid for cost-effective, scalable, resilient big-data infrastructure.

## **The longer story**

Multi-cloud strategies are usually pitched as a technology decision. They are not. They are a political decision dressed in technology clothing. Choosing a single cloud means giving one vendor an enormous amount of leverage over your future cost base. Vendors know this, and over time the bill rises in ways that have nothing to do with your usage and everything to do with their leverage. Multi-cloud — properly done — is not about having two of everything. It is about having a credible threat. The vendor who knows you can walk negotiates differently to the vendor who knows you can't. The interesting design question was therefore not 'how do we use two clouds?' but 'how do we architect things such that any workload can credibly move?' Workloads that can move are workloads that get good prices. Workloads that can't move are workloads that get expensive. The strategy was, in essence, a decade-long bargaining-position upgrade. We modelled it, scenario-tested it, and laid the rails. Whoever inherits this will save the company eight figures over the next decade, mostly without anyone realising it.

*Case 16 | 2022-2025*

# **Migrating One of Europe's Largest Data Repositories**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The first concrete move within the multi-cloud strategy was to migrate one of the largest data repositories in Europe to a new cloud tenant.

**Complication.** Migrations at this scale are not routine. The data drives everything from commercial dashboards to fraud detection to AI personalisation. A wobble in the migration is a wobble across every department in the company.

**Resolution.** The team under the Head of Technology, Big Data, reporting to me, executed the migration to a new Azure tenant. The new environment introduced automated failover, better resource management, and cost alignment with actual usage. We collaborated with Commercial, Marketing, CRM and Compliance to design a cloud architecture optimised for real-time workloads and rapid data ingestion.

**Impact.** Improved system resilience. Costs reduced by aligning storage to actual usage and consolidating redundancies. Performance up. The migration unlocked downstream AI scale — personalisation, fraud detection — that had previously been bottlenecked by infrastructure.

## **The longer story**

There is a small, irritating truth in IT operations: nobody ever rewards you for the things that did not happen. The migration in question moved an enormous amount of data — quietly, on schedule, without anyone outside the data team noticing. If you wanted to win popularity inside the company that quarter, this was not the project to be on. Nobody cheered. The CEO did not send a note. But six months later, when the company's personalisation algorithms started running at speeds previously impossible, and when the fraud-detection systems started catching things they had never been able to catch — those wins were powered by the migration nobody had thanked us for. The unsung infrastructure work is always the work that makes the visible work possible. I've stopped expecting the thank-you and started just doing the migration. The compounding pays off later, and louder, than you'd think.

*Case 17 | 2022-2025*

# **Data Governance at Exabyte Scale**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The company managed exabytes of data. Trust in that data — across the C-suite, across business units, across regulators — was the prerequisite for everything else.

**Complication.** At that scale, governance is not a side project. Without unified data concepts, defined ownership, and clear quality standards, every business unit ends up with its own dialect of the same data, and senior leadership ends up making decisions based on inconsistent numbers.

**Resolution.** I led a comprehensive Data Governance initiative, inspired by the DAMA framework, in partnership with Accenture. We built data dictionaries, defined quality standards, set clear roles and responsibilities, and created the company's Data Governance Office, chaired by the CTO and operationally managed by me. The Office became the central authority on data-related decisions, including monetisation. Databricks Unity Catalog and related tooling were expanded. Extensive internal training programmes turned employees into data-literate practitioners.

**Impact.** Departments gained increased autonomy from the centralised data function — they could self-serve while being accountable for the quality of what they produced. More agile decision-making, better regulatory compliance, improved data accuracy. Foundation laid for the company's long-term ambition of becoming a fully data-driven organisation, trusted by stakeholders at every level — CEO, CFO, CTO, Director of Compliance.

## **The longer story**

Most companies treat data governance the way medieval kingdoms treated tax collection: nobody likes it, but everyone agrees somebody else should be doing it. The trick to making data governance work is to stop calling it governance. Call it democratisation. Frame it as: 'we are giving every team the right to use the data they need, in exchange for the responsibility of keeping the data they generate clean.' Suddenly governance stops sounding like a tax and starts sounding like citizenship. Once teams felt they had been given autonomy — rather than had restrictions imposed on them — adoption of the governance framework accelerated dramatically. Compliance officers stopped being the villain. Data quality became a source of pride. The cultural shift was the project. The data dictionaries and the Unity Catalog were the tools. The training was the bridge. Without all three you do not have governance, you have paperwork.

*Case 18 | 2022-2025*

# **Real-Time Data Infrastructure for a Social Product**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The company was launching one of its key strategic innovations: a set of social data features designed to transform how customers interacted with the product and with each other.

**Complication.** Social features only work if the data flows in real time. A feed that updates every five minutes is not a feed; it is a calendar. The infrastructure had to capture social interactions, enrich them, and connect them to the existing big-data architecture without becoming a bottleneck.

**Resolution.** I defined the technical objectives, guided the design of data pipelines, and made sure the data collection and processing frameworks measured customer engagement accurately. The work aligned closely with the broader CDP strategy. Under my guidance, the team built scalable pipelines connecting real-time social interaction data with the existing architecture, providing reliable flows for product iteration.

**Impact.** Strong technical foundation for innovative social features with the potential to transform customer interactions. High-quality, actionable data available from day one, letting the Innovation team refine the product based on real engagement data.

## **The longer story**

Social features are the closest thing in product design to a chemical reaction: when they work, they generate energy from the users themselves, and you, the operator, just have to keep the temperature right. When they fail, they fail spectacularly, because the absence of social activity is more glaring than the absence of any other kind of feature. The infrastructure for a social product is therefore not a back-end concern. It is the difference between a feature that catches fire and a feature that sits there looking sad. We built the pipes such that the first user to try the social feature got the same near-instant response as the millionth. That symmetry is what allows social features to scale. Without it, the feature works for the first ten people, fails for the next thousand, and gets quietly cancelled.

*Case 19 | 2022-2025*

# **Responsible Gaming — Real-Time, Without Compromise**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A regulated industry obliges operators to monitor customer behaviour for signs of risk, and to act on those signs proactively. The bar for accuracy and timeliness is high.

**Complication.** Off-the-shelf third-party software for responsible gaming had to be integrated with the company's big-data platform such that flags reached the right team in real time, without compromising data privacy or regulatory standards.

**Resolution.** I led the integration of a third-party solution with the Customer Data Platform, designing data pipelines that ensured seamless exchange, accuracy, and reliability. We layered our own behavioural-analysis ML model on top to identify and flag risky patterns. We mapped internal processes to identify the precise intervention points within customer journeys where action could be taken.

**Impact.** Significantly enhanced ability to address sensitive compliance obligations proactively. Big-data capabilities used at full power without compromising privacy. The infrastructure now supports swift, accurate intervention.

## **The longer story**

There is a question I think every operator in a regulated industry has to answer privately: 'do you actually want to know?' The technology to detect at-risk behaviour exists. The question is whether the company wants the detection turned up loud, because turning it up means intervening more, and intervening more means short-term revenue impact. The brave answer is: yes, turn it up. The brave answer is also the long-term commercial answer. Operators who treat responsible gaming as a compliance box-tick eventually lose their licence, lose their public reputation, or both. Operators who treat it as a duty of care to the customer end up with a more sustainable business and a more durable licence. The data project here was technically interesting — third-party software bolted onto our infrastructure with privacy controls — but the harder work was internal. It was making sure the model's flags ended up in front of people who would act on them. Detection without intervention is detection theatre.

*Case 20 | 2022-2025*

# **Data Security and Disaster Recovery — Imagining the Bad Day**

*Global online gaming and sports-betting platform / Director of Technology, Data & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A company processing exabytes of customer data has a duty to imagine, in detail, what the worst possible day looks like — and to have rehearsed it.

**Complication.** Disaster recovery and data security cannot be retrofitted after an incident; they have to be designed and stress-tested in advance, covering scenarios from infrastructure failure to hostile cyberattacks.

**Resolution.** I led the development of a comprehensive Data Security and Disaster Recovery strategy across production and analytical systems. The work involved scenario modelling for a full range of risk conditions and ensured the company's readiness to recover rapidly while maintaining data integrity.

**Impact.** Significant enhancements to existing infrastructure and operational practices. Improved resilience and security posture. Directly led to the establishment of a new senior role — Head of Cybersecurity — demonstrating institutional commitment to data protection.

## **The longer story**

Disaster recovery is one of the few areas in business where pessimism is professionally rewarded. The job is to spend Wednesdays imagining catastrophe — ransomware, data centre fire, malicious insider, regulatory raid, accidental DELETE FROM. Most of the scenarios you model will never happen. A small number will. The discipline is in not knowing which. The deeper organisational benefit of a serious DR programme is that it forces leadership to articulate, in writing, what the business actually depends on. You will discover, in the exercise, that the official 'critical systems' list is wrong. The actual critical system turns out to be a spreadsheet maintained by someone in operations who left two years ago, and it has been the load-bearing pillar of a process nobody documented. DR exercises uncover these pillars. The recovery plan is the visible output. The map of hidden dependencies is the underrated output, and it is the one that makes the company actually safer.

*Case 21 | 2023*

# **Three Data Strategies for Three Industries, in One Year**

*Three major UK enterprises — automotive, healthcare, FMCG / Senior Director of Data Science & AI at a global consultancy*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Three large UK enterprises — one in automotive, one in healthcare, one in FMCG — each wanted to become data-driven. Each had the budget, the appetite, and the C-suite mandate.

**Complication.** The phrase 'data-driven' had been used in three different boardrooms to mean three different things. Each company had different industry constraints, different existing data maturity, and different cultural starting points. A copy-paste strategy from one to another would have failed all three.

**Resolution.** I led the development of comprehensive, tailored data strategies for each client. Every strategy established four enabling functions: infrastructure and data processing; data governance and compliance; data product and AI development; and data culture training and change management. I built detailed roadmaps for data hunting, ingestion, transformation, team building, and data utilisation, customised to each industry.

**Impact.** Each strategy led to the establishment of new director-level data departments inside the client organisation. Execution phase produced multiple data-centric projects and AI algorithms, some under my direct supervision. The accelerated digital transformation yielded millions of pounds of business impact across the three.

## **The longer story**

Strategies fail for one of two reasons. Either they are too generic to be useful, or they are too specific to be implemented. Generic strategies sound smart and do nothing; specific strategies sound dull and get followed. The trick is to know which audience needs which voice. The automotive client did not need to hear about FMCG-style customer analytics; they needed to hear about supply chain and warranty data. The healthcare client did not need to hear about consumer personalisation; they needed to hear about clinical data governance. The FMCG client did need to hear about consumer analytics, but in their industry's language — shoppers, channels, shelf. Same four pillars in all three cases. Three completely different conversations. The reason the strategies got executed — and not just printed — was that each one read as though it had been written for that specific company, by someone who actually understood their world. Which it had been.

*Case 22 | 2023*

# **A Sales Tech Ecosystem That Scaled to Ten Markets**

*Fortune 500 food multinational / Senior Director of Data Science & AI at a global consultancy*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The international division of a Fortune 500 food multinational, based in London, wanted to start its digital transformation. Performance monitoring across multiple national markets was fragmented; decisions were made on lagging, inconsistent data.

**Complication.** Building a single data and analytics framework that worked across multiple national markets, each with its own quirks of distribution and consumer behaviour, was the kind of project that often dies a death by committee.

**Resolution.** I led the implementation across three blocks. (1) Cloud-based data infrastructure on Microsoft Azure and Databricks, with full ingestion-to-storage pipelines. (2) Data products to support decision-making and automate digital transactions — algorithms and analytical tools to improve operational efficiency and strategic insight. (3) Change management and data culture: mapping business processes to identify where data could move KPIs.

**Impact.** Successfully deployed in France and the UK first, demonstrating effectiveness. Subsequently scaled by the client to over ten additional markets — the strongest possible signal that the model worked.

## **The longer story**

The single best signal in consulting is not the testimonial. It is the second purchase. When a client takes the thing you built and rolls it out to ten more places without asking you to come back and re-design it, you have built something durable. We built the first version for two markets — France and the UK — and we built it deliberately portable. Every assumption that was country-specific was made explicit. Every assumption that was universal was hard-coded. The result is that the client's own teams could take the framework into Germany, Italy, Brazil, and seven other markets, plug in local data, and have it work. The lesson generalises. If you find yourself building something for a multinational, ask continuously: 'would this work in a country I have never visited?' If the answer is no, you are building a project. If the answer is yes, you are building a product. Products survive; projects don't.

*Case 23 | 2022-2023*

# **Building an EMEA Data Practice From a Boutique Acquisition**

*Global digital-transformation consultancy / Senior Director of Data Science & AI*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A global digital-transformation consultancy had acquired a London-based digital transformation boutique. The strategic intent was to expand the consultancy's data practice across the EMEA region using the boutique as the seed.

**Complication.** Post-acquisition integration is the corporate equivalent of a marriage. The acquired team brought talent and existing client relationships; the acquiring company brought scale and operational discipline. Without deliberate intervention, the two cultures would either fight or run on parallel tracks indefinitely.

**Resolution.** I built fully operational data product development teams in the UK and Portugal, scaling to over 40 data professionals. I led talent acquisition, training, and mentoring — transforming data scientists into skilled data product experts. I also developed the EMEA data business proposition, integrating a solid scientific approach with agile digital transformation methodologies and (later) intensive use of AI.

**Impact.** Robust EMEA data practice established. The business proposition built around it allowed the consultancy to effectively serve FMCG, automotive, and healthcare clients in Europe. Forty-plus data professionals trained, mentored, and operational.

## **The longer story**

Acquisitions are bought on spreadsheets and made to work by people. The single biggest predictor of whether the acquired talent stays is whether the first six months feel like a promotion or a demotion. If they feel like a promotion — bigger projects, more resources, real career growth — people stay. If they feel like a demotion — endless meetings, redundant approvals, lost autonomy — the best people leave inside a year, taking the value of the acquisition with them. My job was to make the first six months feel like a promotion. We pushed acquired team members into bigger roles, gave them mentoring, paired them with the global consultancy's network of clients. Forty people, three years later, were still building data practice across EMEA. The integration was not a software problem. It was a people problem disguised as an org-chart problem disguised as a software problem.

*Case 24 | 2018-2021*

# **Multi-Year Data and AI Transformation for a Global CPG**

*Global CPG leader (Brazil operations) / Senior Manager of Data Science & Advanced Analytics, on behalf of a global consultancy*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A global CPG company was operating in one of its top ten markets — a country where it had nearly a century of presence and 99% market penetration — but where data-driven decision-making was still emerging.

**Complication.** The CEO wanted the country operation to become a beacon of innovation for the wider group. That meant moving from siloed reporting to enterprise-grade data and AI, across 24 local business units and 5 Latin American units — without rupturing operations.

**Resolution.** I led the technical data team from the original business proposal through three years of execution. The remit integrated data engineering, infrastructure, analysis, experimentation, data hunting, data science, product development, process optimisation, data governance, and software deployment. I worked directly with CEO, COO, VP, and Division Directors to translate business needs into projects. I led teams of engineers, scientists, analysts, digital experts, and product managers, adapting agile, CRISP-DM, and DAMA practices to build a streamlined delivery framework.

**Impact.** One of the earliest large-scale enterprise deployments of Microsoft Azure and Databricks anywhere in the world. The initiative became a critical component of the company's digital transformation, recognised both locally and at global HQ. It continues, in evolved form, to this day.

## **The longer story**

Multi-year transformations look impressive on a CV and feel exhausting in real life. The interesting structural insight is that a three-year transformation is not one project; it is roughly twelve projects, each lasting three months, joined by a continuous narrative. If you try to plan three years in detail at the start, you will be wrong in interesting ways within ninety days. If you try to wing it, you have no narrative and the C-suite loses faith. The middle path is to plan the narrative at three years and the work at three months. We had a north star — 'this company will make decisions with data, and the data will be trustworthy' — and we had a quarterly delivery cadence under it. The north star changed maybe once. The quarterly plans changed every quarter. That asymmetry is, I think, the heart of how you make long initiatives survive their own duration. People stay motivated by a story. People deliver against a quarter. Confuse the two and you get either drift or paralysis.

*Case 25 | 2020*

# **Forecasting Out-of-Stock Across 9,500 Stores and 2,300 SKUs**

*Global CPG leader (Brazil) / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** Sales reps for a major CPG visit small retailers to keep shelves full. Whenever a product runs out before the next visit, that's a lost sale that never comes back.

**Complication.** With 9,500 points of sale and 2,300 SKUs, the number of product-location combinations to track was in the tens of millions. Sales reps could not be expected to inspect every combination at every visit. A forecasting capability was needed to tell them where the next out-of-stock was about to happen.

**Resolution.** I directed a multidisciplinary team of engineers, scientists, and analysts. We analysed 36 months of sales data, using a hybrid of time series and combinatorial analysis on PySpark within Microsoft Azure/Databricks. The resulting algorithm produced daily forecasts for 20.7 million product-location combinations, surfacing real-time alerts to the sales field application. Five-month field tests validated accuracy above 70%, paving the way for scaled deployment.

**Impact.** Average reduction of 15% in lost sales due to out-of-stock situations. Inventory management optimised; sales reps could prioritise. A tangible, measurable improvement in operational efficiency.

## **The longer story**

There is a kind of work that consultancies love to talk about — strategic, visionary, paradigm-shifting — and there is the kind of work that actually moves money: making sure the right product is on the right shelf at the right time. The second kind is harder, less photogenic, and worth dramatically more. A 15% reduction in lost sales, applied across 9,500 stores and 2,300 SKUs, is the kind of number that takes the CFO ten seconds to recognise as a very large amount of money. It also takes a sales rep ten seconds to understand what to do with the alert: 'this shelf is about to be empty, please refill it.' The interesting design lesson is that the consumer of an AI model in operational settings is almost never a data scientist. It is a sales rep on a motorcycle, in heat and traffic, who has thirty seconds between stores. If the model's output cannot be acted on in that thirty seconds, the model is useless. We built the model accordingly. The 70% accuracy isn't the headline; it's the fact that 70%-accurate alerts, delivered into a sales-rep app at the moment they could be acted on, were enough to move 15% of lost sales. Useful beats clever, every time.

*Case 26 | 2019*

# **Data-Driven Launch of a Premium Product Line**

*Global CPG leader (Brazil) / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A premium product line was launching nationally in a large market. Speed and execution quality of the launch would determine the line's trajectory for years.

**Complication.** Historically, launch performance had been measured slowly — weeks or months after the fact. By then, course-correcting was either impossible or expensive. The launch needed near-real-time visibility on shelf presence, pricing, availability, out-of-stock likelihood, total sales, and adherence to the launch plan.

**Resolution.** I designed and implemented a data-gathering strategy integrating diverse sources, including second-party retailer data. I established data governance and validation processes to ensure reliability. The dashboards delivered compelling data storytelling aligned with the operational needs of the launch — stakeholders could make decisions in real time.

**Impact.** Data products developed in a record timeframe. New standard set for launch traceability. Reaction times reduced significantly; understanding of customer behaviour improved; insights into the performance of different retail channels became available immediately rather than retrospectively.

## **The longer story**

Launches are like wedding receptions: you have one shot, you've sunk a lot of money in advance, and the variance between a brilliant launch and a forgettable one is mostly about the things you notice in the first 48 hours. The traditional model of launch analytics — wait a month, write a report — is, structurally, the same as inviting feedback from your wedding guests via a postal survey six weeks after the event. By the time the data arrives, the moment is gone. What we built was the analytics equivalent of having a friend at the wedding texting you live: 'the bar's running out of gin, the music's too loud, table six is dancing.' Each signal was actionable in minutes. The CPG team could call retailers, redirect stock, adjust pricing — all while the launch was still happening. The lesson generalises: the best analytics are not the most accurate; they are the most timely. A 70%-correct alert this hour beats a 95%-correct report next month.

*Case 27 | Q2 2020*

# **Emergency B2B Digitalisation During COVID-19**

*Global CPG leader (Brazil) / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A traditional B2B sales operation — sales reps visiting small retailers, in person, building relationships — was the working model of the country's largest consumer-goods distribution channel. Then COVID-19 hit and physical visits became, overnight, impossible.

**Complication.** The company had weeks, not months, to digitalise a sales process that had run on handshakes for decades. Failure meant lost revenue and, in many cases, lost retailer relationships that had been built over generations.

**Resolution.** A cross-functional team of data engineers and scientists worked directly with the client's commercial leadership. We analysed online journey data and offline performance to identify improvement opportunities. We built targeted customer interactions: optimised outreach, product recommendations, churn prevention, cross-sell/upsell. Iterative evaluation and refinement based on data insights ensured continuous optimisation.

**Impact.** 430% increase in monthly digital sales volume. Achieved by streamlining client interactions, enhancing service delivery, and improving customer satisfaction and retention. The project showcased the value of data-driven strategies in rapidly adapting to market shocks.

## **The longer story**

Crises are accelerants. The digitalisation that, in a normal year, would have taken five years of stakeholder consensus-building was compressed into ten weeks because there was no alternative. This is the under-discussed silver lining of every disaster: it gives organisations permission to do the thing they were already supposed to do, but had been politely procrastinating on. The 430% growth number is real, and impressive, but it is also a slightly unfair comparison — the baseline was almost zero. The more important point is that ten weeks of forced digitalisation did, structurally, what five years of board meetings could not. After the crisis passed, the digital channel did not get rolled back. It became permanent. The B2B sales force did not get smaller; they became more effective, because they were now supported by digital tools rather than competing with them. The lesson, if you want one: organisations have far more capability for rapid change than they normally admit. The bottleneck is not capability; it is permission.

*Case 28 | Q4 2020*

# **AI-Powered Product Recommendations Across 100,000 Retailers**

*Global CPG leader (Brazil) / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A CPG sales force visited around 100,000 small grocery stores nationally. Each visit was an opportunity to recommend products. The recommendations, historically, were a mix of intuition, recent training, and what the rep happened to have visible in the truck.

**Complication.** If recommendations could be personalised to each individual store — based on its size, location, sales history, neighbourhood, season — the value would compound across every visit, every day, for years. But building that personalisation at 100,000-store scale was a serious engineering and modelling task.

**Resolution.** I authored the feasibility study that secured project funding and set the KPIs jointly with finance. I architected the technical service blueprint. A team of data scientists, engineers, product developers, scrum masters, and business experts built a personalised recommendation engine on Azure and Databricks, deployed via agile cycles. Iterative field tests with the sales team refined accuracy and usability. The system delivered real-time, store-specific recommendations to reps during visits.

**Impact.** National deployment to 100,000+ retailers. Revenue from the AI-driven recommendations exceeded projected targets by a factor of four.

## **The longer story**

The interesting design problem here was not the algorithm. The interesting design problem was the sales rep. A sales rep with thirty seconds in a small store will follow a recommendation only if (a) the recommendation makes sense in context and (b) the rep does not have to do extra work to act on it. Every additional click in the app reduces compliance. So the model had to be excellent — and the interface around the model had to disappear. We field-tested obsessively. We watched reps use the app on motorcycles in heat. We threw away every interface that required a second tap when one would do. The fourfold revenue overshoot was the visible result. The invisible result was something more interesting: sales reps started trusting the model. After enough times of seeing the recommendation work, they stopped second-guessing it. Trust, in a deployed AI system, is the real production metric. Until trust is established, the model is theoretical. Once trust is established, the model becomes muscle memory, and the revenue follows. We built for muscle memory.

*Case 29 | Q4 2020*

# **Productising Data Transformation — The Datalab Proposition**

*Global digital-transformation consultancy / Senior Manager of Data Science & Advanced Analytics*

## **In brief \- Situation, Complication, Resolution**

**Situation.** The consultancy I worked at served large global CPG clients. Each was investing heavily in data and digital transformation, but the investments were fragmented — funded piecemeal, run by different departments, with no shared infrastructure or methodology.

**Complication.** Fragmentation meant duplicated cost, slower delivery, and less compounding learning. A productised offering was needed: a way to package data transformation into a coherent, repeatable, scalable engagement that clients could buy as a single thing.

**Resolution.** I developed the conceptual framework, infrastructure requirements, operational methodologies, and execution strategy for what became the Datalab — a signature consultancy offering. Datalab functions as an embedded digital transformation accelerator inside a client. It consolidates fragmented resources, implements robust big-data infrastructure and governance, applies advanced data science and ML, and rapidly experiments with field tests of new processes, strategies, and offers.

**Impact.** Generated over USD 50 million in annual recurring business impact for the consultancy. Generated several billion dollars of impact for the client companies that adopted it. Continues to be a flagship offering.

## **The longer story**

The transition from selling consulting hours to selling productised offerings is the single most underrated commercial move a services firm can make. Hours are linear; products compound. The trick is that productising a service is not about taking the consulting work and wrapping it in a box. It is about asking, ruthlessly: what is the smallest set of things this engagement does that delivers most of the value, and can we standardise those things while leaving everything else flexible? Datalab was that exercise. We standardised the infrastructure setup, the governance framework, the experimentation methodology, the team topology, and the engagement rhythm. We left flexible the client-specific problems and the people doing the work. The result was an offering that delivered measurable value within months — fast enough that clients renewed, scaled, and recommended. The USD 50 million annual impact line is the consultancy's number. The few-billion-dollar impact line is the clients'. Both are real. Productised services are a force multiplier; the maths is simply different from selling hours.

*Case 30 | Q3 2018*

# **Restructuring B2B Customer Service for 2 Million Bank Clients**

*Leading Latin American bank / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A leading Latin American bank had two million B2B clients, each generating significant revenue, served through a customer-service structure that had grown organically over decades.

**Complication.** Service delivery was uneven, costs were rising, and the bank wanted to redesign the structure to match service categories to client characteristics — at scale, defensibly, without losing the high-revenue clients in the noise.

**Resolution.** I directed the data vertical of the strategic project. We analysed five years of client data — behaviour, attributes, service utilisation. Using factorial analysis and clustering, I identified distinct client segments. Linear optimisation and simulation were used to design a tailored service structure for each segment. The proposed structure was presented to the bank's board for refinement and validation. Throughout, we worked with bank subject-matter experts to interpret a highly sensitive proprietary data environment.

**Impact.** Two million clients reorganised into four defined classes with clear assignment rules. Client experience improved; operational efficiency optimised. Demonstrated the application of complex data analysis to high-stakes financial-industry problems, with results that could be defended to a board.

## **The longer story**

Banking has a particular cultural challenge with data science. The institution has had centuries to build internal expertise and political authority around how to manage clients. A data scientist walking in with a clustering algorithm is, structurally, a junior outsider telling the senior insiders that their intuitions are statistically wrong. This goes badly unless handled with care. The single most important thing I did on this engagement was not the modelling. It was the time I spent with the bank's subject-matter experts — relationship managers who had served corporate clients for twenty years — getting them to teach me what the data was actually showing. Their domain knowledge was extraordinary. My job was to formalise their tacit knowledge into something a board could approve. Every cluster the algorithm found, I sense-checked with the relationship managers. If they nodded, the cluster was real. If they frowned, the cluster was a data artefact. The board got four defensible client classes. The relationship managers got institutional validation of what they had been saying for years. Everyone won. The model was the visible artefact; the partnership between data and domain was the project.

*Case 31 | Q2 2018*

# **Simplifying 1,000 KPIs Into a Coherent Story**

*Global beverage company (Brazil) / Senior Manager of Data Science*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A global beverage company's national operations were measured by a data ontology of over 1,000 KPIs. Every region, every function, every layer of the hierarchy had added its own metrics over the years.

**Complication.** One thousand KPIs is not measurement; it is measurement theatre. No executive can hold a thousand numbers in mind. Real decisions were being made on a handful of intuited proxies; the other 990 KPIs were tracked because nobody dared retire them.

**Resolution.** I directed a project to simplify the ontology using factorial analysis and cluster classification. The goal was to reduce variable complexity and identify the small set of causal indicators that genuinely drove operational performance. The output was a streamlined KPI structure aligned to the strategic objectives of P\&L-owning C-level executives.

**Impact.** Executives gained clearer, more actionable insights. Decision-making accelerated. Resource allocation became more efficient. Tangible operational improvements across the organisation.

## **The longer story**

There is a tendency in mature organisations to confuse measurement with control. The reasoning goes: if we measure one thing, we control one thing. If we measure ten things, we control ten things. By extension, measuring a thousand things must mean we have a thousand levers of control. The reasoning is wrong. Beyond a certain number, additional KPIs do not add control; they subtract it. Attention is finite. A thousand KPIs is, in effect, no KPIs — because no human can act on them. The exercise of simplifying down to the few that genuinely drive the P\&L is uncomfortable because it requires deciding that some long-loved metrics no longer matter. The political resistance to that decision is enormous. The factorial analysis gave us air cover: we could say, with mathematical respect, 'these eight KPIs explain most of the variance in the outcomes you actually care about; the other 992 are noise.' That is a much easier sentence to defend in a board meeting than the same sentence asserted by intuition. Once we had the math behind it, the simplification could happen. Decision-making sharpened immediately.

*Case 32 | Q2 2016*

# **Reading a Country's Mood During a Constitutional Crisis**

*Emerging data enterprise tracking political sentiment / Director of Technology*

## **In brief \- Situation, Complication, Resolution**

**Situation.** A constitutional impeachment process was unfolding in a major democracy. Real-time public sentiment — across social media, mainstream editorial, and the political class itself — was politically and commercially valuable in a way it had rarely been before.

**Complication.** Existing social-listening tools were either too shallow (counting hashtags) or too academic (slow, costly, not real-time). What was needed was a daily pipeline that fused multiple sources, tracked influencers as they emerged, and could be validated against actual political outcomes.

**Resolution.** I developed the methodology and led the team that built the system. Data was collected daily from Facebook and Twitter, from major media editorial articles, and from selected politics experts. New influencers were identified as they emerged. The pipeline transformed these sources into datasets within an on-premise architecture, enabling sentiment analysis, diffusion modelling, and reach assessment, culminating in a positive-sentiment score index. The methodology was extended to track the online interactions of 1,000 elected representatives and senators.

**Impact.** Daily aggregated analyses delivered to clients in real time. The model's accuracy was validated by its precise predictions across all four voting rounds that ultimately led to the impeachment outcome. Demonstrated capability in designing high-stakes sentiment-analysis systems under political pressure.

## **The longer story**

Predicting a vote in a parliament is a different problem from predicting an election. In an election, you have millions of voters and probabilistic patterns. In a parliament, you have a few hundred individuals, each of whom is a fully formed political actor with personal incentives, party pressures, regional considerations, and private deals. The clever thing about this project was not the sentiment analysis on the public — though that worked. The clever thing was applying the same methodology to the legislators themselves. By tracking what each of them said online, who they were retweeted by, who they retweeted, and how their constituents were pressuring them, we could model not 'public opinion' in the abstract but the specific calculus of each parliamentary vote. Four voting rounds, four correct predictions. The wider lesson — which I keep coming back to in every regulated or political context I work in — is that data about a system is most predictive when it is collected at the resolution of the actors who make the decisions. Aggregate sentiment is interesting; individual decision-makers, tracked individually, are predictive. Build at the right resolution and you can see what is about to happen.