---
title: "Sampling Bias is a Good Thing: TikTok's Imbalanced Training Approach"
description: "Field note on a TikTok and University of Connecticut paper. Non-uniform negative sampling that keeps the confusing samples and discards the easy negatives. Why it matters for any recommendation system."
pillar: "data-infrastructure"
publishedDate: 2024-08-15
originalSource: "LinkedIn"
---

We all build models of the world in our heads. It is how we make sense of things and predict what is coming next. But garbage in, garbage out, right?

That goes for our brains and our AI. A great article by Damien Benveniste, PhD, dives into the nitty-gritty of optimally sampled imbalanced training data. Just like we need to read different viewpoints and connect with diverse people, AI needs a balanced input to avoid becoming a narrow-minded bot.

## How do you deal with imbalanced data?

If you do not have too much data and the imbalance is not too extreme, the typical way to deal with it is to simply reweigh the samples such that the loss function considers the positive and negative samples equally. When you have an overwhelming amount of negative samples, you may want to downsample them to minimise training latency.

But not all samples are equal. At TikTok, for example, for their recommendation engine, they use a non-uniform negative sampling scheme they developed with the University of Connecticut. They proved that optimal sampling of the negative class is done when giving more weight to samples with a higher probability of being positive (Theorem 3 in the paper). This means that it is better to keep samples that are confusing for a model. This way, the model focuses on learning how to separate true positive samples from negative samples that look like positive ones.

Interestingly enough, this theorem also means **sampling bias is a good thing**. In ML applications, a model shows users some samples they are likely to engage with. When they do not engage with those, they become negative samples for the next training batch. That is sampling bias because only the samples with a high probability of engagement ever get shown to users, and they never get the opportunity to interact with the "lesser" samples, so we never get signals for those.

By sampling the data, we bias the probability estimates coming out of the model, and they become meaningless. The model is not calibrated anymore. To fix that, they came up with a correction of the likelihood function to generate unbiased estimates of the model parameters and, therefore, the probabilities.

## The process

1. Uniformly sample the negative class so that the data becomes balanced.
2. Train a model with balanced data. They call it a "pilot" model.
3. Predict the full data with that pilot model. You get an estimate of how much the model believes the sample is a positive one.
4. Normalise that probability *p* by the average probability *w* and multiply by the sampling rate *r*: *r × p / w*.
5. For each negative sample, pick a uniform random number *u*. If *u < r × p / w*, keep the sample; remove it otherwise. The greater *p* is, the more likely we will keep it.
6. *r × p / w* is the sampling probability. When training the model or predicting, correct the log odds using that probability.

A neat trick worth bookmarking the next time you are tuning a recommendation engine and the negatives are drowning the signal.
