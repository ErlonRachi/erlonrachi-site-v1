---
title: "Zero Trust by Design"
description: "Trust in AI is built when real-world outcomes match predictions. Borrowing the Zero Trust posture from data security, applied to the AI lifecycle."
pillar: "ai-governance"
publishedDate: 2023-06-15
originalSource: "LinkedIn"
---

In the fast-paced world of artificial intelligence development, trust emerges as the most valuable asset for both companies and individuals. If we want a team on the ground to carry out anything that came out from AI, people have to trust that they will get the best outcome from following suit.

Think about these scenarios: a sales representative visiting a certain customer at a specific day, offering a particular product and charging a dynamic price for it. Or a technician installing equipment supported by AI interpreting a highly complex manual. Or an elderly customer who is trying to get someone to fix a botched purchase. In those cases, if the sale does not go through, or if the equipment is not repaired properly, or if the customer quits the channel, trust will be lost.

We are humans and trust is what makes our societies work. It is the basis of our legal contracts, and it even grants our money worth. Without trust, pursuing business goals is futile. If it is shattered, rebuilding it is a costly endeavour. As more and more organisations jump onto the AI bandwagon, the question "can I trust AI" becomes ever more important. Answering this question in a practical perspective is a matter of continuously measuring how well AI responds to the problems we want it to tackle.

As large-scale AI proof-of-concept projects are being deployed, we are getting both encouraging results that excite us and also anecdotal problems that challenge trust in machine learning and AI, like hallucination and poor accuracy.

**Hallucination**, an issue experienced in some AI models, occurs when the system generates false or misleading outputs that seem plausible at first glance. For instance, an image recognition algorithm might mistakenly identify a turtle as a rifle due to a specific combination of colours and patterns. Such errors, while rare, raise concerns about the reliability of AI predictions and the potential consequences they may have in critical decision-making scenarios.

**Poor accuracy** is inherent to the model that has been used. Despite significant advancements, AI models are not immune to inaccuracies. In certain cases, models may fail to provide accurate predictions due to various factors, such as insufficient training data or biases within the dataset. For example, an AI-powered diagnostic tool may incorrectly classify a benign tumour as malignant, potentially leading to unnecessary medical interventions or misdiagnoses.

Besides that, the very nature of reality changes and AI might still be operating under circumstances that are no longer true. For instance, a dynamic pricing AI model may struggle to adapt to unforeseen economic events or shifts in market behaviour, viral information, scandals, and so on. This raises questions about the reliability of AI predictions when faced with unpredictable fluctuations and changing situations.

I have been contemplating the challenge of trust for a while as more and more of our teams started working to develop AI for clients. I proactively decided to address it by getting inspiration from another area in the data landscape: data security. I came to adapt and utilise the Zero Trust perspective to all my developments. The results are amazing.

## So, what exactly is this Zero Trust Approach?

The Zero Trust model acknowledges that trust is built when real-world outcomes match predictions or interpretations. With this in mind, the developing team must establish a framework of continuous experimentation and verification of AI to ensure its reliability. Instead of blindly trusting the outputs of AI or language models like ChatGPT, the Zero Trust model assumes the presence of inaccuracies, errors, or false responses. It requires subjecting AI models to rigorous testing, using real-world data collected from the field.

Zero Trust aligns with a core belief in experimentation, measurement, analysis, and redeployment. The difference now is that the whole process is oriented towards AI development. By adopting the Zero Trust Approach, we shift from a mindset of hoping the predictions are accurate to understanding if it has met its purpose.

Zero Trust is embedded by design in the product development cycle with clear metrics, purpose, and responsibilities. It has to be communicated to the entire group of stakeholders in the AI development, not only coders or data scientists. Its main tenets are:

**Continuous Experiments.** Establishing a culture of ongoing experimentation and validation for AI models. Testing and verification against real-world scenarios will uncover potential weaknesses, biases, or inaccuracies. This allows for continuous improvement and enhances the overall trustworthiness of AI predictions and interpretations.

**Never Trust, Always Verify.** Instead of assuming that everything generated by AI or machine learning models is accurate, the Zero Trust model promotes an attitude of scepticism. It encourages us to verify the outputs rigorously through meticulous testing and comparison. By keeping AI's results and assumptions in check, we get ahead of hallucination and push the whole application to remain trustworthy and reliable.

**Continuous Integration with Field Results.** Truly understanding what success looks like in the field, seeking a more accurate representation of the challenges and complexities encountered in real-life situations. Not only to verify if the models worked but checking if the outputs were effective, useful, and added value to whoever used the AI.

There are some other technical and non-technical issues regarding the Zero Trust Approach, including ones related to compliance with proposed regulations. Implementing it to the fullest, even in organisations with a tradition of experimentation and customer centricity, has been a challenging task. It involves a mindset shift from blind reliance to critical verification, enabling teams to identify and rectify weaknesses, enhance accuracy, and ensure that AI aligns with the desired outcomes.

For the time being I submit to you that the Zero Trust Approach is an effective way to foster the thing the AI systems will need the most.
