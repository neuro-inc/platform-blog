---
path: /tools-for-cutting-edge-deep-learning-mlops
date: 2020-05-19T07:54:00.142Z
title: 'MLOps Overview of Tools and Processes For Modern Deep Learning  '
description: A description of the current MLOps toolkit and methods
---
## **TOOLS FOR MODERN DEEP LEARNING**

by [Aleksei Shabanov](emailto:aleksei.shabanov@neuromation.io)

### Contents

* A high-level overview of the deep learning pipelines and tools 
* Discussion on what a training loop is, tools and approaches for implementing

### An initial ML pipeline on neu.ro platform

1. [Collect raw data](#collect_raw_data)
2. Setup labeling process

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



### <a name="collect_raw_data"></a> Collect raw data