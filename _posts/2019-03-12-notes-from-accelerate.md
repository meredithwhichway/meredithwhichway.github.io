---
layout: post
title:  Notes from Accelerate
date:   2019-03-12 12:00
categories: lean agile devops
---

<br>
#### Page 14: ###

In our search for measures of deliver performance that meet these criteria, we settled on four: delivery lead time, deployment frequency, time to restore service, and change fail rate. ... Software delivery performance impacts organizational performance and noncommercial performance.

<table class="table">
	<thead>
		<th>2017</th>
		<th>High Performers</th>
		<th>Medium Performers</th>
		<th>Low Performers</th>
	</thead>
	<tr>
		<td>
			<strong>Deployment Frequency</strong>
		</td>
		<td>
			On demand (multiple deploys per day)
		</td>
		<td>
			Between once per week and once per month
		</td>
		<td>
		  Between once per week and once per month
		</td>
	</tr>
	<tr>
		<td>
			<strong>Lead Time for Changes</strong>
		</td>
		<td>
			Less than one hour
		</td>
		<td>
			Between one week and one month
		</td>
		<td>
		  Between one week and one month
		</td>
	</tr>
	<tr>
		<td>
			<strong>MTTR</strong>
		</td>
		<td>
			Less than one hour
		</td>
		<td>
			Less than one day
		</td>
		<td>
		  Between one day and one week
		</td>
	</tr>
	<tr>
		<td>
			<strong>Change Failure Rate</strong>
		</td>
		<td>
			0-15%
		</td>
		<td>
			0-15%
		</td>
		<td>
		  31-45%
		</td>
	</tr>
</table>

<br>
#### Page 30: ###

We decided to select a model defined by sociologist Ron Westrum. ...

**Pathological** (power-oriented) organizations are characterized by alrge amounts of fear and threat. People often hoard information or withhold it for political reasons, or distort it to make themselves look better.

**Bureaucratic** (rule-oriented) organizations protect departments. Those in the department want to maintain their "turf", insist on their own rules, and generally do things by the book - _their_ book.

**Generative** (performance-oriented) organizations focus on the mission. How do we accomplish our goal? Everything is subordinated to good performance, to doing what we are supposed to do. 

An additional insight from Westrum was that this definition of organizational culture predicts performance outcomes. 

<br>
#### Page 84: ###

We examined four capabilities which make up our model of a Lean approach to product development (see also Figure 8.1).

1. The extent to which teams slice up products and features into small batches that can be comleted in less than a week and released frequently, includeing the use of MVPs (minimum viable products)

1. Whether teams have a good understanding of the flow of work from the business all the way through to custoemrs, and whether they have visibility into this flow, including the status of products and features.

1. Whether organizations actively and regularly seek customer feedback and incorporate this feedback into the design of their products.

1. Whether development teams have the authority to create and change specifications as part of the development process without requiring approval.

Analysis shows that these factors were statisticallty significant in predicting high software delivery performance, as well as improving organizational culture and decreasing burnout.

<br>

#### Page 106: ###

Another key point is that identity incudes vaues alignment with the goals of the team and the organization. Recall from the previous chapter that one of the key contributors to burnout is a mismatch of personal and organizational values. What this tells us is that a sense of identity can help reduce burnout by aligning personal and organizational values. Therefore, investments in continuous deilvery and Lean management practices, which contribute to a stronger sense of identity, may very well help reduce burnout. Once again, this creates a virtuous circle of value creation in the business where investments in technology and process that make the work better for our people are essential for delivering value for our customers and the business.

<br>
#### Page 118: ###

We measured transformational leadership using survey questions adapted from Rafferty and Griffin (2004):

My leader or manager:
* (Vision)
  - Has a clear understanding of where we are going.
  - Has a clear sense of where he/she wants our team to be in five years.
  - Has a clear idea of where the organization is going.
* (Inspirational communication):
  - Says things that make employees proud to be a part of this organization.
  - SAys positive things about the work unit.
  - Encourages people to see changing environments as situations full of opportunities.
* (Intellectual stimulation):
  - Challenges me to think about old problems in new ways.
  - Has ideas that have forced me to rethink some things that I have never questions before.
  - Has challenged me to rethink some of my basic assumptions about my work.
* (Supportive leadership):
  - Considers my personal feelings before acting.
  - Behaves in a manner which is thoughful of my personal needs.
  - Sees that the interests of employees are given due consideration.
* (Personal recognition):
  - Commends me when I do a better than average job.
  - Acknowledges improvement in my quality of work.
  - Personally copliments me when I do outstanding work.

Our analysis found that these characteristics of transformational leadership are highly correlated with software delivery performance.

<br>
#### Page 208: ###

[Source](https://devops-research.com/assets/transformation_practices.pdf)

<img class="img img-thumbnail img-responsive" src="{{site.baseurl}}/assets/high-perf.png" alt="High Performance Behaviors and Practices">
