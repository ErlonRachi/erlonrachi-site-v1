---
title: "Reading a Country's Mood During a Constitutional Crisis"
client: "Emerging data enterprise, political sentiment"
year: "2016"
primaryTheme: "strategy-vision"
secondaryThemes: []
metric: "Correctly predicted all four voting rounds of an impeachment process."
---

## In brief

**Situation.** A constitutional impeachment process was unfolding in a major democracy. Real-time public sentiment, across social media, mainstream editorial, and the political class itself, was politically and commercially valuable in a way it had rarely been before.

**Complication.** Existing social-listening tools were either too shallow (counting hashtags) or too academic (slow, costly, not real-time). What was needed was a daily pipeline that fused multiple sources, tracked influencers as they emerged, and could be validated against actual political outcomes.

**Resolution.** I developed the methodology and led the team that built the system. Data was collected daily from Facebook and Twitter, from major media editorial articles, and from selected politics experts. New influencers were identified as they emerged. The pipeline transformed these sources into datasets within an on-premise architecture, enabling sentiment analysis, diffusion modelling, and reach assessment, culminating in a positive-sentiment score index. The methodology was extended to track the online interactions of 1,000 elected representatives and senators.

**Impact.** Daily aggregated analyses delivered to clients in real time. The model's accuracy was validated by its precise predictions across all four voting rounds that ultimately led to the impeachment outcome. Demonstrated capability in designing high-stakes sentiment-analysis systems under political pressure.

## The longer story

Predicting a vote in a parliament is a different problem from predicting an election. In an election, you have millions of voters and probabilistic patterns. In a parliament, you have a few hundred individuals, each of whom is a fully formed political actor with personal incentives, party pressures, regional considerations, and private deals.

The clever thing about this project was not the sentiment analysis on the public, though that worked. The clever thing was applying the same methodology to the legislators themselves. By tracking what each of them said online, who they were retweeted by, who they retweeted, and how their constituents were pressuring them, we could model not "public opinion" in the abstract but the specific calculus of each parliamentary vote.

Four voting rounds. Four correct predictions.

The wider lesson, which I keep coming back to in every regulated or political context I work in, is that data about a system is most predictive when it is collected at the resolution of the actors who make the decisions. Aggregate sentiment is interesting; individual decision-makers, tracked individually, are predictive. Build at the right resolution and you can see what is about to happen.
