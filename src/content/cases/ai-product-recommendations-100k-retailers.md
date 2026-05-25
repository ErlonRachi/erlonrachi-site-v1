---
title: "AI-Powered Product Recommendations Across 100,000 Retailers"
client: "Global CPG leader, Brazil operations"
year: "2020"
primaryTheme: "revenue-growth"
secondaryThemes: []
metric: "Revenue from AI-driven recommendations exceeded projected targets by 4×."
---

## In brief

**Situation.** A CPG sales force visited around 100,000 small grocery stores nationally. Each visit was an opportunity to recommend products. The recommendations, historically, were a mix of intuition, recent training, and what the rep happened to have visible in the truck.

**Complication.** If recommendations could be personalised to each individual store, based on its size, location, sales history, neighbourhood, and season, the value would compound across every visit, every day, for years. But building that personalisation at 100,000-store scale was a serious engineering and modelling task.

**Resolution.** I authored the feasibility study that secured project funding and set the KPIs jointly with finance. I architected the technical service blueprint. A team of data scientists, engineers, product developers, scrum masters, and business experts built a personalised recommendation engine on Azure and Databricks, deployed via agile cycles. Iterative field tests with the sales team refined accuracy and usability. The system delivered real-time, store-specific recommendations to reps during visits.

**Impact.** National deployment to 100,000+ retailers. Revenue from the AI-driven recommendations exceeded projected targets by a factor of four.

## The longer story

The interesting design problem here was not the algorithm. The interesting design problem was the sales rep. A sales rep with thirty seconds in a small store will follow a recommendation only if the recommendation makes sense in context and the rep does not have to do extra work to act on it. Every additional click in the app reduces compliance. So the model had to be excellent, and the interface around the model had to disappear.

We field-tested obsessively. We watched reps use the app on motorcycles in heat. We threw away every interface that required a second tap when one would do.

The fourfold revenue overshoot was the visible result. The invisible result was something more interesting: sales reps started trusting the model. After enough times of seeing the recommendation work, they stopped second-guessing it. Trust, in a deployed AI system, is the real production metric. Until trust is established, the model is theoretical. Once trust is established, the model becomes muscle memory, and the revenue follows.

We built for muscle memory.
