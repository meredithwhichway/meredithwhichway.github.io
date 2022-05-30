---
layout: post
title:  The Seven Zeros of JIT Applied to Product Development
date:   2016-08-16 09:30
categories: lean factory physics
---

J.N. Edwards was one of the first people to introduce Just in Time (JIT) to the West when he presented it at an APICS conference in 1983. As with most Westerners, he wrote in terms of absolute ideals (Hopp, in _Factory Physics_, speculates that this could either be the result of the generally more-symbolic Japanese language, or the difficulty in translating cultural context). While not to be taken literally, the seven zeros provide an overview of what the JIT production process looks like:

1. **Zero defects.** Make it correctly the first time.
2. **Zero (excess) lot size.** In order to be responsive to downstream demand, parts must be produced as quickly as possible. Making things in large batches hinders this responsiveness. This is more commonly stated as "a lot size of one."
3. **Zero setups.** This goes hand in hand with lot size. Manufacturing a variety of parts quickly means we have to be able to configure workstations to produce the parts quickly. This is better known as Single Minute Exchange of Die (SMED), Shigeo Shingo's setup goal.
4. **Zero breakdowns.** Preventative maintenance keeps the line running smoothly, which is required since a buffer of inventory is unavailable.
5. **Zero handling.** Downstream workstations require parts exactly when needed. If parts are being handled, we will have to raise our WIP levels in order to ensure the downstream process doesn't starve. 
6. **Zero lead time.** Parts are available as soon as they are requested.
7. **Zero surging.** The process can flow as long as the production plan is smooth. Keeping demand level is key to reducing delays. 

Again, these are ideals: zero lead time is impossible, as it means instantaneous production. Breakdowns are inevitable, and setups exist no matter what, even in SMED (they just take a single minute, obviously). Still, striving towards these goals can lead to an efficient JIT process. 

***
Product development is not like manufacturing. Developing a new product doesn't involve repetitive tasks, so things like setups and breakdowns aren't __quite__ applicable, but still useful as lofty ideals. With this in mind, here's how these can help your product development process:

1. **Zero Defects.** This is self-explanatory. The only way to reach an acceptable level is via automated testing. 
2. **Zero (excess) lot size.** This applies to several places in the development process:
- Requirements: define these as late in the game as possible. Don't define a product up-front; allow the market or customer to dictate the direction
- Code: Ensure phases are overlapping to prevent large batches from moving through the system. Design, Code, Test, Deployment should be done as close together as possible, ideally by the same developer. 
- Deployment: Release early and release often. Don't batch large features together. 
- Information: communicate face-to-face, or using synchronous methods like video calls, IMs or other chat tools (like Slack), or regular old phone calls. Banish email. 
3. **Zero setups.** Two ways to interpret this:
- Within product development, ensure that developers have access to all the tools that they need and the ability to get the ones they don't currently have. Using standardized machine images helps get people up to speed on a new project. Teams should establish on-boarding materials, like code standards, repository maps, and machine images to ramp up new members quickly. 
- Outside of product development, ensure that deployments are as quick and painless as possible. This means that downstream processes that consume the product are not subject to large setup times by using your code. 
4. **Zero breakdowns.** This is also outside of the product development process, but be sure to build in robust, redundant infrastructure to keep your product running. Make sure it's monitored effectively. 
5. **Zero handling.** Make it easy to pass information back and forth between team members. Zero handling is achievable if one resource handles all phases of the production process, and this is only possible if resources are cross-trained and infrastructure is in place for writing automate tests and deployments. Otherwise, make sure that information is radiated to the team with a visual board and that everyone is aware of the current status of tasks. 
6. **Zero lead time.** Again, use visual boards to limit Work in Process (WIP), and also to build in a pull system. 
7. **Zero surging.** Level customer demand. Limit WIP for a smooth flow, or base the number of work in a sprint on historical velocities from the team (Jeff Sutherland calls this __yesterday's weather__). Demand is never deterministic and rarely set in stone. Work with your most difficult customers to explain the process and compromise on demand. 

There are other applications for the seven zeros that isn't mentioned above. Get creative when thinking about these ideals in your specific process: the goal may not be attainable, but striving for it will undoubtedly improve your work. 