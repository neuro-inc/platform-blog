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

### Typical ML pipeline

* Collect and store raw data
* Setup labeling process

  \- Done with labeling tools wrapped in a neu.ro job
* Write  scripts to store data on the storage in the correct format 
* Analyze data

  \- Use jupyter notebook wrapped in neu.ro job
* Write and debug the code for training loop from scratch or import an existing solution

  \- Start a neu.ro a job, connect to it via IDE with remote interpreter to work on the code
* Train the model

  \- Training can also be done with additional options like hyper parameters search and distributed training via neu.ro
* Serve the demo

  \- Deploy the model as a neu.ro job with a simple Web UI
* Next steps

   The following steps are very dependent on the project and may include model hosting and monitoring, triggers for retraining a model, data versioning etc.

#### <a name="labeling"></a> Some Notes on Labeling

You can use crowdsourcing platforms for labeling, some of them have special tools for labeling. For example: 

[Yandex Toloka](https://toloka.yandex.ru/) [Amazon Mechanical Turk](https://www.mturk.com/)

Another option is to start the labeling tool as a neu.ro job and serve independently hiring people directly. It can be useful if you work with secure data or want to optimize costs and quality directly. Neu.ro will be happy to set you up with an instance and get your process going through our remote MLOps service. Example tools: 

[Scalabel](https://github.com/scalabel/scalabel) [LabelMe](http://labelme2.csail.mit.edu/Release3.0/index.php?message=1) [CVAT](https://github.com/opencv/cvat)

#### Development Tools

After labeling is done, data is processed and stored, it is time to start the development process.

The main language for developing deep learning models is python. Other languages usually can be used for deploying pipelines into production.

Initial data analysis can be done with useful python-based [jupyter notebook](https://jupyter.org/).

The development of large code fragments is conveniently can be done in an IDE ([PyCharm](https://www.jetbrains.com/ru-ru/pycharm/), [Visual Studio Code](https://code.visualstudio.com/) and so on). Since the calculations are massive, usually the code is developed in the IDE locally, but it is runs remotely via a remote interpreter ([remote debugging](https://www.jetbrains.com/help/pycharm/remote-debugging-with-product.html)).

#### Training the model (Training Loop)

A key element of model development is the model training. At the core of it is the training loop. 

It is a process where the model receives labeled samples, backpropagation algorithm calculates the error and the gradients of the loss function are calculated, then the optimizer changes the model’s weight. This loop runs epoch after epoch, batch after batch, as a result we get the best state of the model in terms of best metric value on validation data.

![mlops-model-training-loop](../../assets/model_training_loop.png "Model Training Loop (mlops)")

#### Training Loop Providers

Since the training loop has several repeating parts (such as feeding model data, calculating the loss function, its gradients and metrics, doing an optimizer step) we can write this loop once in an abstract form  and allow the user to insert their own logic where necessary via callbacks mechanic.

A callback is a procedure that starts at a certain point. For example:

* a callback that saves the state of a model is executed at the end of an epoch
* a callback that logs metrics values is executed after each data batch

We name the library that provides such an abstract loop -- the loop provider.

Lets look at several examples of Training Loop Providers:

#### Loop Provider: Catalyst

![catalyst-loop-provider-mlops](../../assets/catalyst.png "Catalys loop MLOps")