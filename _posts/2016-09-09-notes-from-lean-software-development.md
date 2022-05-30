---
layout: post
title:  Notes from Lean Software Development - An Agile Toolkit
date:   2016-09-09 09:30
categories: lean factory physics agile scrum
---

#### General Principles: ###

- Eliminate Waste
- Amplify Learning
- Decide as Late as Possible
- Deliver as Fast as Possible
- Empower the Team
- Build Integrity In
- See the Whole

<br>

#### Tools: ###
<div class="row">
	<div class="col-md-6">
		<ol>
			<li>Seeing Waste</li>
			<li>Value Stream Mapping</li>
			<li>Feedback</li>
			<li>Iterations</li>
			<li>Synchronization</li>
			<li>Set-based Development</li>
			<li>Options Thinking</li>
			<li>The Last Responsible Moment</li>
			<li>Making Decisions</li>
			<li>Pull Systems</li>
			<li>Queuing Theory</li>
		</ol>

	</div>
	<div class="col-md-6">
		<ol start="12">
			<li>Cost of Delay</li>
			<li>Self-Determination</li>
			<li>Motivation</li>
			<li>Leadership</li>
			<li>Expertise</li>
			<li>Perceived Integrity</li>
			<li>Conceptual Integrity</li>
			<li>Refactoring</li>
			<li>Testing</li>
			<li>Measurements</li>
			<li>Contracts</li>
		</ol>
	</div>
</div>

#### Page 16:###
<table class="table">
	<thead>
		<th>Development</th>
		<th>Production</th>
	</thead>
	<tr>
		<td>
			<em>Designs the Recipe</em>
		</td>
		<td>
			<em>Makes the Dish</em>
		</td>
	</tr>
	<tr>
		<td>
			Quality is fitness for use
		</td>
		<td>
			Quality is conformance to requirements
		</td>
	</tr>
	<tr>
		<td>
			Variable results are good
		</td>
		<td>
			Variable results are bad
		</td>
	</tr>
	<tr>
		<td>
			Iteration generates value
		</td>
		<td>
			Iteration generates waste (rework)
		</td>
	</tr>
</table>

<br>

_Quality in software development results in a system with both perceived integrity and conceptual integrity. Perceived integrity means that the totality of the product achieves a balance of function, usability, reliability, and economy that delights customers. Conceptual integrity means that the system's central concepts work together as a smooth, cohesive whole._

<br>

#### Page 30: ###

- The team must be small and staffed with the necessary expertise. Some team members must be experienced in the domain and some in each critical technology.
- The team must have enough information about requested features to be able to decide what is feasible to accomplish in the time-box.
- The team must be assured of getting the resources it needs.
- Team members must have the freedom, support, and skill to figure out how to meet its commitments.
- The team must have or create the basic environment for good programming:
  - Automated build process
  - Automated testing
  - Coding standards
  - Version Control
  - Etc.

<br>

#### Page 64: ###

_A clear statement of intent is the key to enabling emergent behavior on the front line. In business, the communicating intent is generally done through a small set of well-chosen, simple rules._

<br>

#### Page 65: ###

_This is the key to simple rules: They allow everyone in an organization to act quickly, synchronously, in a coordinated manner, without the necessity of waiting for instructions from above._

<br> 

#### Page 72: ###

_The simple mathematical fact working here is that variation is always amplified as it moves down a chain of connected events. A little variation in step one introduces a huge variation five steps later._

<br> 

#### Page 82: ###
_Queueing theory is a well-known discipline that applies whenever something flows through a constrained resource. Here is a quick summary of how queues work:_

- _Measuring the amount of work waiting to be done (let's call this work-in-queue) is equivalent to measuring the cycle time of a system._
- _As variability (in arrival time or processing time) increases, cycle time and work-in-queue will increase._
- As batch size increases, variability in arrival and processing time increases, and therefore cycle time and work-in-queue will increase.
- _As utilization increases, cycle time will increase nonlinearly._
- _As variability increases, cycle time will increase nonlinearly._
- _Continuous flow requires a reduction in variability._
- _Variability may be reduced by an even arrival of demand, small batches, an even rate of processing, and parallel processing._
- _Decreasing variability early in the process has larger impact than decreasing various ability late in the process._

<br> 

#### Page 96: ###

_Frequently, the programs increases the intensity of factors leading to job dissatisfaction (policy, supervision, administration) instead of increasing factors that contribute to job satisfaction (achievement, recognition, responsibility)._

<br> 

#### Page 97: ###
_As frequently implemented, these programs tend to remove process design and decision-making authority from developers and put it under control of central organizations ... Lean thinking capitalizes on the intelligence of front-line workers, believing that they are the ones who should determine and continually improve the way they do their jobs._

<br> 

#### Page 98: ###
_Ibid: "To truly accelerate development work and optimize time-to-market, your people must do their jobs the right way the very first time" (p. 10). "Require detailed and complete plans, review these plans, and then negotiate commitments with the people who will do the work" (p. 39). Humphrey calls this "rational management." It seems to us that rational management has a tendency to foster sequential development and it does not deal well with uncertainty. Highsmith's "optimization paradox" discusses how increasing focus on prediction and control induces failure in uncertain environments._

<br> 

#### Page 116: ###

_PRoject leaders play an important role in an agile project; it's just not the role they learned at their project management class. Instead of scheduling with Pert and Gantt charts, they create a release plan with frequent milestones and keep the focus on meeting iteration commitments. ... instead of worrying about change approval processes, they worry about change-tolerant design practices._

<br> 

#### Page 128: ###
<img class="img img-thumbnail img-responsive" src="{{site.baseurl}}/assets/integrity.jpg" alt="Integrity">

<br> 

#### Page 129: ###

_Three fundamental requirements for improved software development performance are:_

- _Increased application domain knowledge across the entire software development staff._
- _Acceptance of change as an ordinary process and the capability to accommodate emergent design decisions._
- _An environment that enhances communication to integrate people, tools, and information._

<br> 

#### Page 144: ###

<img class="img img-thumbnail img-responsive" src="{{site.baseurl}}/assets/refactoring_productivity.jpg" alt="Refactoring Productivity">

<br> 

#### Page 153: ###

_Jay Forrester ... notes that the policies established to solve a problem will often exacerbate the problem, creating a downward spiral; As a problem gets worse, managers apply even more aggressively the policies that are causing the problem._

<br> 

#### Page 159: ###
_If you can't measure everything that is necessary to optimize the overall business goal, then you are better off without the sub-optimizing partial measurements. Otherwise, you are in serious danger of encouraging sub-optimized behavior._