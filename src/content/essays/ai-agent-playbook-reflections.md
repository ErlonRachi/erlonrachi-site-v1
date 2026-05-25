---
title: "My Reflections on the AI Agent Playbook"
description: "The most successful AI initiatives are not radical overhauls. They are phased: match agents to existing workflows, then transform. Build the central nervous system: observability, accountability, governance."
pillar: "agentic-ai-architecture"
publishedDate: 2025-09-18
originalSource: "LinkedIn"
---

If you are in the trenches of data science and AI, you know the conversations are shifting. It is no longer just about building cool models or automating a single task. We are talking about AI agents: entities that can reason, plan, and execute complex workflows on their own.

But here is the cold, simple truth I learned in practice this summer: the most successful AI initiatives are not about trying to rip out entire infrastructures, nor about building AI expert teams isolated from IT or big data competencies and starting from scratch. That is a fool's errand. The real competitive advantage is being unlocked by a far more pragmatic strategy: matching AI agents to the existing human processes and workflows already in place.

This is not a sign of limited vision. It is a two-step master plan for success.

**First, you integrate.** You find a high-value process, maybe a customer quote system or a KYC analysis workflow, and you deploy an agent to make it better. You get a quick win, a measurable return on investment, and you start building trust and momentum within the organisation. This is about being smart and strategic, not about making a big, noisy announcement. It is about building a foundation of data and buy-in for what comes next.

**Then, you transform.** Once you have proven the value, you can begin the more ambitious, transformative work. You start to fundamentally redesign your core workflows around the unique capabilities of AI. This is not just about working faster; it is about reimagining how work gets done. Think about a product development cycle that used to take two years, now being completed in four months because you have parallelised sequential human activities with AI. That is not a marginal improvement, that is an exponential leap.

This phased approach is what separates the companies that get a little bit better from those that become "AI-infused".

## The Interoperability Problem

This strategy however falls victim to its own success as the explosion of specialised AI agents, from a data agent in Snowflake to a conversational one in AWS, has created a new kind of architectural problem. Your agents cannot talk to each other. They are siloed, and they cannot collaborate on complex tasks.

This is why interoperable AI agent frameworks are no longer a luxury, they are a strategic imperative.

These frameworks act as the central nervous system for your AI ecosystem. They provide the protocols and standards that allow different agents, models, and tools to communicate and collaborate seamlessly. Without this, your multi-agent system is just a collection of disconnected tools.

We are already seeing two key protocols emerge to solve this. The **Model Context Protocol (MCP)** standardises how AI systems connect to various datasets and APIs. This means your developers are not writing custom code for every single integration, which saves time and money. It is the plumbing that ensures your agents can pull data from a dozen different sources without a hitch.

The other piece of this puzzle is the **Agent Communication Protocol (ACP)**. This is the common language that allows agents themselves to talk to one another. It enables them to negotiate tasks, resolve conflicts, and work together as a cohesive unit. This is critical for complex operations, like a supply chain where multiple agents are managing warehousing, shipping, and inventory in real time.

Organisations that get locked into a single-vendor ecosystem risk being outpaced by more agile competitors. The ability to mix and match specialised agents from different providers gives you the flexibility to adapt to changing market demands and stay ahead of the curve.

## The Central Nervous System

This central nervous system for AI is my key learning point of the summer. It accounts for AI effectiveness, compliance, and coordination.

Companies do not invest in AI because it makes them look cool (though some do). They invest because AI has to be effective: cutting costs, augmenting productivity, providing better experiences. This means this central nervous system has to measure and proof beyond doubt that the AI agents are effective, productive, and impactful.

They cannot do so at any cost, nor by acting rogue. There are rules and regulations to be followed, not only the most obvious ones like GDPR, EU AI Act, Digital Services Act, but also company policies, authorisation paths, log registries, shipping regulations. Therefore making sure that each and every AI agent must stay compliant and their assembled work must also be compliant to rules.

Finally coordination is needed to make sure that those AI agents that have been developed by different teams, for a variety of purposes, can evolve and grow without stepping on each other's toes as they stay active for long.

I have talked about this many times, it has been true for a while and will continue to be true in the future: this central nervous system must also rest on three non-negotiable pillars into the AI lifecycle: **observability, accountability, and governance**.

**Observability.** Think of this as the eyes and ears of your AI system. It is about continuous monitoring of your data, models, and infrastructure. Without it, your models can "silently degrade over time" due to changes in data or a shift in the problem you are trying to solve. You will not know there is a problem until it is too late. Observability provides the visibility to detect issues before they impact your bottom line.

**Accountability and Governance.** These are the ethical and operational frameworks that keep your AI systems in check. You need policies and procedures to ensure ethical deployment, manage risk, and protect stakeholders. This includes fairness and bias mitigation, transparency and explainability, and the principle that humans, not machines, must take ultimate responsibility for AI-driven decisions.

The most successful AI strategies are not those that attempt a radical, disruptive overhaul. They are defined by a phased, human-centric approach that begins with integration and evolves into strategic transformation. This journey validates a simple truth: matching AI agents to existing processes is the recipe for early success.

The future of work is not a zero-sum game between humans and machines. It is a symbiotic partnership. AI agents are the perfect partners for automating routine work and providing predictive insights. Human expertise remains crucial for creativity, empathy, and ethical judgment.

My final summer message: **AI is a different beast. It is NOT like software development.** Run the same software a million times over and it will perform exactly as it was coded every single time. Run the same prompt twice and you will get different results even so slightly. Agentic AI is an entity, not a program. It evolves, changes, drifts, adapts, improves. AI is the unavoidable future, its adoption is necessary but the sooner CTOs and CEOs understand they are not dealing with lines of code, the better.
