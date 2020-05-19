---
path: /tools-for-cutting-edge-deep-learning-mlops
date: 2020-05-19T07:54:00.142Z
title: 'MLOps Overview of Tools and Processes For Modern Deep Learning  '
description: A description of the current MLOps toolkit and methods
---
###### **TOOLS FOR MODERN DEEP LEARNING**

by [Aleksei Shabanov](emailto:aleksei.shabanov@neuromation.io)

### Contents

* A high-level overview of the deep learning pipelines and tools 
* Discussion on what a training loop is, tools and approaches for implementing

### An initial ML pipeline on neu.ro platform

1. [Collect and store raw data](#collect_raw_data)
2. [Setup labeling process](#labeling)

   \- Done with labeling tools wrapped in a neu.ro job
3. Write  scripts to store data on the storage in the correct format
4. Analyze data

   \- Use jupyter notebook wrapped in neu.ro job
5. Write and debug the code for training loop from scratch or import an existing solution

   \- Start a neu.ro a job and connect to it via IDE with remote interpreter to work on the code
6. Train the model

   \- Training can also be done with additional options like hyper parameters search and distributed training via neu.ro
7. Serve the demo

   \- Deploy the model as a neu.ro job with a simple Web UI
8. Next steps

   The following steps are very dependent on the project and may include model hosting and monitoring, triggers for retraining a model, data versioning etc.

###### <a name="collect_raw_data"></a> Collect raw data

This is a simple step if you are not building a continuous model retraining pipeline. Neu.ro lets you define storage either in terms of NFS or [Object Storage](https://docs.neu.ro/toolbox/accessing-object-storage-in-gcp) in the cloud of your choice.

###### <a name="labeling"></a> Setup labeling 

You can use crowdsourcing platforms for labeling, some of them have special tools for labeling. For example: 

[Yandex Toloka](https://toloka.yandex.ru/)
[Amazon Mechanical Turk](https://www.mturk.com/)

Another option is to start the labeling tool as a neu.ro job and serve independently hiring people directly. It can be useful if you work with secure data or want to optimize costs and quality directly. Neu.ro will be happy to set you up with an instance and get your process going through our remote MLOps service. Example tools: 

[Scalabel](https://github.com/scalabel/scalabel)
[LabelMe](http://labelme2.csail.mit.edu/Release3.0/index.php?message=1)
[CVAT](https://github.com/opencv/cvat)
