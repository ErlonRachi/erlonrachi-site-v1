---
title: "Forecasting Out-of-Stock Across 9,500 Stores and 2,300 SKUs"
client: "Global CPG leader, Brazil"
year: "2020"
primaryTheme: "revenue-growth"
secondaryThemes: ["cost-reduction"]
metric: "15% reduction in lost sales due to out-of-stock; 20.7M daily product-location predictions at 70%+ accuracy."
---

## In brief

**Situation.** Sales reps for a major CPG visit small retailers to keep shelves full. Whenever a product runs out before the next visit, that is a lost sale that never comes back.

**Complication.** With 9,500 points of sale and 2,300 SKUs, the number of product-location combinations to track was in the tens of millions. Sales reps could not be expected to inspect every combination at every visit. A forecasting capability was needed to tell them where the next out-of-stock was about to happen.

**Resolution.** I directed a multidisciplinary team of engineers, scientists, and analysts. We analysed 36 months of sales data, using a hybrid of time series and combinatorial analysis on PySpark within Microsoft Azure and Databricks. The resulting algorithm produced daily forecasts for 20.7 million product-location combinations, surfacing real-time alerts to the sales field application. Five-month field tests validated accuracy above 70%, paving the way for scaled deployment.

**Impact.** Average reduction of 15% in lost sales due to out-of-stock situations. Inventory management optimised; sales reps could prioritise. A tangible, measurable improvement in operational efficiency.

## The longer story

There is a kind of work that consultancies love to talk about, strategic, visionary, paradigm-shifting, and there is the kind of work that actually moves money: making sure the right product is on the right shelf at the right time. The second kind is harder, less photogenic, and worth dramatically more.

A 15% reduction in lost sales, applied across 9,500 stores and 2,300 SKUs, is the kind of number that takes the CFO ten seconds to recognise as a very large amount of money. It also takes a sales rep ten seconds to understand what to do with the alert: "this shelf is about to be empty, please refill it."

The interesting design lesson is that the consumer of an AI model in operational settings is almost never a data scientist. It is a sales rep on a motorcycle, in heat and traffic, who has thirty seconds between stops. If the model's output cannot be acted on in that thirty seconds, the model is useless.

We built the model accordingly. The 70% accuracy is not the headline; it is the fact that 70%-accurate alerts, delivered into a sales-rep app at the moment they could be acted on, were enough to move 15% of lost sales. Useful beats clever, every time.
