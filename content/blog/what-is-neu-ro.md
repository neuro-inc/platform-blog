---
path: /what-is-neuro
date: 2020-02-20T15:04:28.046Z
title: What is Neu.ro?
description: Introduction to the Neu.ro platform
---
ML development is hard. We at [Neu.ro](https://neu.ro) are working on solutions that make it easier.

Imagine that you are an aspiring enthusiast who is learning ML and loves solving Kaggle challenges. Your life is bright and shiny. All you need to do is write the model code, they say. It’s all about choosing the best architecture, they say.

And then you get an ML job, start working on a production solution, and suddenly find out that the reality of an applied ML engineer is brutal. Here is an incomplete list of the activities you will need to perform to solve a real-life problem:

1. Collect the data. If you are lucky, you can scrape it from the Internet. If you are not… Running over the city with a camera and taking photos of supermarket shelves is not the worst scenario, believe us.
2. Label the data. Most probably, you’ll have to find a labeling tool and people who can process TB’s of data in a few days.
3. Experiment with several models in order to choose one with adequate performance. This step reminds you about the days when life was bright and shiny.
4. Train this model on the full dataset. All of a sudden, your laptop is not enough, and you need to use cloud capacities or a super-powerful server next door.
5. Realize that the model sucks when trained on the full dataset, and repeat steps 3 and 4 several times.
6. Deploy a model as a service with some API. For that, you learn to create a Flask server.
7. Monitor how well the model performs and how stable it is. In a few days, it turns out that the Flask server was good for a demo but didn’t perform well under the load, and you have to find another way to deploy API.
8. Regularly collect more data and repeat steps 2 to 7
9. …
10. Profit!

For each of these steps, you need specific tooling and computational resources. It turns out that writing the model code takes a tiny fraction of the time spent on the entire process. Here is where Neu.ro steps in.

[Neu.ro](https://neu.ro) is an ML development platform. We support the entire ML project life-cycle through efficient resource management and integrations with numerous tools, which allow us to build project-specific ML pipelines. Our key objectives are:

* **Reproducibility**: We want each of your experiments to be 100% reproducible; for that, we keep your data, code, and environments (Docker images) under version control.
* **Automation**: We take the burden of most of the repetitive tasks off your shoulders. We use pipelines to automate data management, model training, and model serving.
* **Cost-efficiency**: We make the most of your resources, be they in the cloud or on-premise. We also support hybrid infrastructure: you may do most of the ML operations on-premise and then jump into the cloud for heavy workloads, like distributed training or hyperparameter tuning.

In other words, we take care of your MLOps while you focus on solving your business tasks.

[Neu.ro](https://neu.ro) is designed to be flexible. We provide several preconfigured pipelines for you in the form of project templates. But we also understand that all ML projects are different, and it’s virtually impossible to fit their needs with one or even several tools. We also don’t leave you alone with your project configuration: our subscription model includes consulting hours, when our dedicated MLOps team helps you to adjust Neu.ro to your projects. We also have a trusted network of data labelers as well as synthetic data providers and can help you to build relationships with them.

We want to boost your ML development. [Sign up](https://app.neu.ro/signup) right now to give Neu.ro a try. [Contact us](mailto:team@neu.ro) or [schedule a demo](https://neu.ro/booking) if you want to know more.