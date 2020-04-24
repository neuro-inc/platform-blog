---
path: /onprem-vs-cloud
date: 2020-04-23T16:30:28.894Z
title: Should I train my models on-premise or in the cloud?
description: Our answer to the fundamental question
---
At some point in the evolution of ML teams, they grow out of their laptops and under-table computers because of the need for more compute and storage. They then face a difficult choice: either buy a lot of powerful ML-oriented machines (i.e. go on-premise) or go into the cloud. Let’s compare these two options.

## On-premise vs Cloud

### Location

* On-premise infrastructure is based on the physical hardware, located in your office. These might be powerful developer computers with several GPUs each, or specialized ML development hardware, or even supercomputers with dozens of GPUs and a separate room to keep them in; regardless, these machines are under your full control.
* Cloud infrastructure is based on the virtual machines a cloud provider gives you access to. The physical machines are located somewhere far from you, probably in other countries or even continents.

### Maintenance

* On-premise infrastructure maintenance is completely on your shoulders. Most probably, you need a dedicated devops team to support it, update the software, and guarantee uptime.
* For cloud infrastructure, the majority of the maintenance activities are the responsibility of the cloud provider, who has an SLA and guarantees the uptime and the health of the software.

### Scalability

* On-premise infrastructure is hard to scale. From the moment when you understand that you need more compute and storage to the moment when you actually get it, days or even weeks could pass.
* Cloud infrastructure is scalable by design. Usually, you can get additional resources within minutes.

### Security

* On-premise infrastructure is very secure in terms of data privacy. You can keep your data and code within your local network without any risk of being exposed to the world.
* Cloud infrastructure is less secure. In some cases, you can’t even consider using it due to legal concerns (for example, for protected industries or if a country’s regulations do not allow keeping personal data outside the country).

### Cost-efficiency

* On-premise infrastructure is often more cost-effective than the cloud option in the long term: in many cases, buying powerful hardware once in a while is cheaper than paying for cloud compute on a regular basis.
* Cloud infrastructure for ML purposes is pretty expensive due to the cost of GPU compute.

## OK, how do I choose?

Ideally, the optimal choice of infrastructure requires a lot of assumptions and estimations. You need to estimate several things:

* The workload of your team for the next several months.
* The amount of resources they will need.
* The cost of compute and storage.
* The cost of maintenance.

None of these estimations is easy to do. The most difficult part here is the first one: you can probably guess how many ML projects your team is going to do in a few weeks, but what about in three or even six months?

The cost of making an incorrect choice is rather high. If you allocate more resources than you’ll need, you will lose money. If you allocate less resources and don’t get the compute exactly when you need it, you may lose clients or reputation - and again, money.

We at [Neu.ro](https://neu.ro/) have a solution.

## Don't choose: use both with Neu.ro

Neu.ro is an infrastructure-agnostic ML development platform. Our solution allows you to dynamically balance your ML workloads between on-premise and cloud. See, how it corresponds with the comparison points above:

### Location

We provide a hybrid solution. You use your on-premise compute and storage while they provide the required capacity and go into the cloud for heavy tasks, like hyperparameter tuning or distributed training of a massive model.

### Maintenance

Neu.ro frees you from the majority of DevOps and MLOps tasks. Our subscription model includes several hours of consulting per month, which can be used for your infrastructure support, as well as for MLOps for your projects.

### Scalability

As soon as your local compute is not enough for your ML tasks, Neu.ro upscales in the cloud, seamlessly linking both types of infrastructure. It also downscales back to on-premise infrastructure when additional capacities are no longer needed.

### Security

To help companies all over the world comply with their local legal, privacy and security requirements, we not only integrate with major cloud providers like GCP and AWS (who have a lot of capacity in different parts of the world), but also partner with local cloud providers to ensure that your client data is in the same country or region where they are.

### Cost-efficiency

Neu.ro uses your resources efficiently due to comprehensive scheduling facilities, allowing you to get way more from your under-table computers than by using it without the platform. When you need additional capacity, you can get it in the cloud within minutes and just as easily get rid of it as soon as the heavy task is done.

As you see, Neu.ro uses the benefits of both on-premise and cloud types of infrastructure and gets rid of their disadvantages. You don’t have to make a hard decision with Neu.ro.[Contact us](mailto:team@neu.ro) or [schedule a demo](https://neu.ro/booking), and we will boost your ML infrastructure.