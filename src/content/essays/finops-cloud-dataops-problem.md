---
title: "Reflections on FinOps: Why Your Cloud Bill Is a DataOps Problem"
description: "Cutting infrastructure costs by 30% was never about better tooling. It was about putting every workload's cost in front of the engineer who created it, until capacity stopped being free and became a design constraint."
tagline: "Read the folio, cancel the spa nobody visits, then spend the difference on the reason you made the trip"
pillar: "leadership"
publishedDate: 2026-07-03
---

*Your cloud bill is not a finance problem. It is a DataOps problem.*

The uncomfortable moment came the day we read our cloud bill the way you read a hotel folio at checkout: line by line, asking one question of each entry. *Did we use this?*

I was leading data and infrastructure at a tech company, a 100% digital business, processing more than 20 million records a day, and the answers were sobering. Clusters sized for peaks that came twice a year. Development environments running through nights and weekends for no one. Storage nobody had touched in twelve months. Commitment discounts we qualified for and had never claimed.

If you have ever checked out of a luxury resort after a business trip, you know this invoice. You travelled for one purpose: to close the deal. But the folio tells a different story. Room service ordered and left on the tray. A spa booking you never found time for. A suite upgrade that had nothing to do with the meeting you flew in for. Every line is legitimate. Every line was signed by someone. Almost none of it is the reason you made the trip.

The cloud is that resort. Everything is excellent, everything is available instantly, and everything is one signature away. Nobody is cheating you. The kitchen cooked what was ordered. The question is whether anyone is ordering with the purpose of the trip in mind.

Most digital companies believe that *growth will pay for the extras.* If revenue is climbing and the platform is scaling, then questioning a provisioned cluster feels like questioning ambition.

Finance gets the aggregate bill it can not decompose. Engineers see instant capacity that arrived seconds after they asked. Nobody in the company sees their own signatures, totalled and priced, thus nobody feels responsible for how that number came to be.

This lack of responsibility has consequences. Cloud spend does not blow up; it compounds quietly. A drift of just 3% a month is invisible in any single review, and twelve months later you are paying 42% more for the same work. Long stays make expensive folios.

## FinOps is like putting the folio in front of the guest

When this topic was brought up at the tech chapter and we decided to act, the temptation was to buy something: another tool, another report, another consultancy. We had good tooling before and after, and tooling was never the difference.

The difference was chargeback. We put the cost of every workload in front of the engineers who created it, with their team's name on the line, exactly like a folio slipped under the door.

Something remarkable happens when an engineer sees her own signatures totalled. Capacity stops being free and becomes a design constraint, the same as latency or memory. Engineers are the best cost optimisers in any company, because they are the only people who know *why* each resource exists. Finance can question a number. Only the builder can rightsize it. My job as leaders was to make the number visible, keep the conversation blame-free, and celebrate the savings as loudly as the launches.

Infrastructure costs fell by 30%. And this is the part most FinOps conversations miss: that money did not disappear into a savings line. It became the financial space for the roadmap. New data products got green-lit. An experimentation environment got funded. The AI workloads the business had been demanding finally had headroom. We stopped paying for the spa and spent the difference on the reason we made the trip.

That is the real case for FinOps. Not a smaller bill. A healthier path to the data assets your company keeps asking for.

The industry has given the discipline a proper shape, and it maps onto our experience almost exactly: a life cycle of three phases: Inform, Optimize, Operate. These principles are cloud-agnostic; only the service names change between providers.

### 1. Reading the folio (Inform)

You cannot question a charge you cannot see. Visibility starts with tagging discipline: every resource labelled with a team, an environment, a project, a cost centre. Aim for at least 95% tag compliance and enforce it with policy, not reminders. Then allocate: dashboards per team, showback before chargeback if the culture needs a gentler on-ramp. The goal is that no euro on the bill is anonymous.

### 2. Ordering only what you will use (Optimize)

With visibility, the actions are almost boring. Rightsize what is oversized. Shut down what is idle, and automate the shutdown of non-production environments. Move cold data to cold tiers. Commit to reservations and savings plans for steady-state workloads, and hold yourself to 90%-plus utilisation of what you committed to. This is the unsexy work that determines everything else.

### 3. Checking the bill before checkout (Operate)

One optimisation sprint saves money once; without a standing habit, the extras creep back onto the folio the following quarter. Budgets with alerts. Anomaly detection that pages someone. And the practice I consider non-negotiable: a recurring cost review with engineering, finance, and the business at the same table, treated with the seriousness of a performance review. Because that is exactly what it is.

Notice the pattern across all three phases. Tooling is necessary. The people are decisive.

You can have flawless dashboards and perfect tags, but if no human being owns the number, the extras simply learn to live below your alert threshold.

It would be unfair to write about my FinOps journey without giving credit where credit is due: One provider has supported me harder than most: Microsoft.

The FinOps machinery is built into the platform. Microsoft Cost Management gives you the allocation and budgeting engine. Azure Advisor continuously hands you rightsizing and reservation recommendations, unprompted. Azure Policy enforces your tagging discipline so you do not have to. Reservations, Savings Plans, and Hybrid Benefit are the commitment levers, sitting in the console. In my own FinOps experience, Microsoft's ecosystem was fundamental to our success: the recommendations were already there, refreshed daily. Our job was to build the culture that acted on them.

And Microsoft goes a layer further, one most companies forget they own. If your organisation holds enterprise support through Microsoft Unified, you have access to the Success Program: a Customer Success Account Manager who orchestrates proactive services, on-demand assessments of your workloads, cloud success planning, and engagements tailored to your priorities. These assessments are telemetry-based reviews of your actual estate against best practice, including cost. In my hotel analogy: the concierge will sit with you, go through the folio, and show you what to cancel, and your company has already paid for the service. If you hold Unified and your last cost-posture assessment was "never", that is the cheapest meeting you will book this quarter.

Microsoft now frames FinOps as executive strategy alignment: efficiency as the funding mechanism for AI-driven innovation, not cost-cutting for its own sake. My experience backs that framing. Every euro reclaimed from an idle cluster is a data product your team can now build, an experiment your analysts can now run, a bet your competitor placed that you can now match.

So read the folio. Cancel the spa nobody visits. Then spend the difference on the reason you made the trip.

---

*If your cloud bill is growing faster than the value it delivers, I'd be glad to compare notes. Find me on [LinkedIn](https://linkedin.com/in/erlonrachi).*
