---
path: /distributed-training-in-pytorch
date: 2020-04-08T16:11:41.657Z
title: >-
  Distributed training in PyTorch - using an example from the TensorFlow 2.0
  Question Answering Competition
description: A story from our ML engineers
---
State-of-the-art models in different applied areas of Deep Learning today contain millions of parameters, and training such models requires substantial computational power. If we look at the [ResNet](https://arxiv.org/abs/1512.03385) architecture, for example, ResNet50 and ResNet100, which are both widely used in Computer Vision, contain 23 million and 45 million parameters respectively. The state of the art in Natural Language Processing today also has similar demands; one of the representatives of the Sesame Street family - [Bert](https://arxiv.org/abs/1810.04805) Large model - contains 330 million parameters.

Furthermore, in most cases, a large batch size is required for training using the gradient descent algorithm. Bearing this in mind, it is not a foregone conclusion that it will be possible to retrain or even train models from scratch using your available resources or infrastructure.

To solve the issue with batch size, one option is to deploy training split up over several machines, i.e., to use distributed training. We demonstrate this technique below by training a Bert architecture on the data from the [TensorFlow 2.0 Question Answering competition](https://www.kaggle.com/c/tensorflow2-question-answering) held recently on Kaggle.

We try to not only explain the theory behind the phrase “distributed training”, but also to show in practice how easily the described concepts are applied when working with the Neu.ro platform. The code for the Pytorch solution is available on [GitHub](https://github.com/neuromation/ml-recipe-distributed-pytorch) and contains scripts to run on Neu.ro.

## Problem setup

Before diving into distributed training, let's first take a look at the problem we will be solving.

[Open-domain question answering](https://en.wikipedia.org/wiki/Question_answering#Open_domain_question_answering) (ODQA) aims to answer common questions from a broad range of domains by effectively reading through massive open-domain knowledge sources.

Current ODQA models are often prone to bias due to the structure of public datasets; they are focused on extracting answers from a short paragraph rather than reading an entire page of content. The dataset [Google's Natural Questions](https://ai.google.com/research/NaturalQuestions/dataset) addresses this problem. It also contains its own unique private test set for the competition evaluation.

For each question, we have to provide several types of answer: *short* / *long* / *yes* / *no* / *unknown*. *Yes/no* are pretty straightforward in cases when it can be applied; also, we can choose the *unknown* option.

*Short/long* are indicated by the boundaries of the Wikipedia article, which we believe to contain the answer. To better understand what the competition aims to achieve, you can take a look at the [visualization of examples](https://ai.google.com/research/NaturalQuestions/visualization). It provides examples of short and long answers.

## Model description

To tackle the competition, we used a pretty straightforward setup similar to one proposed in [A BERT Baseline for the Natural Questions](https://arxiv.org/abs/1901.08634) by Google Research.

We jointly predict short and long answers using a single model with the [BERT](https://arxiv.org/abs/1810.04805) backbone pretrained on the [SQuAD dataset](https://rajpurkar.github.io/SQuAD-explorer/).

More specifically, the input in the training stage is passed as a tuple: `(context, start, end, target)`, where

* `context` consists of 512-byte pair encoding;
* `start` and `end` are indices pointing to the start and the end of the target answer span; and
* `target` represents one of the five *short / long / yes / no / unknown* options for an answer type.

The loss function definition is a sum over softmax values over all the elements in the tuple.

## Types of parallelism

Now let’s take a closer look at how you can use the power of several servers to speed up the computation.

### Model Parallelism

For this type of parallelism, we divide the model into logical parts. These parts can be network layers or model components, such as decoder and encoder. The decomposition method is not essential for understanding this parallelism approach.

Each component is located on a different device and the calculations are performed sequentially.

With this approach, it is difficult to get any significant boost in training time, since all computations occur sequentially. We also have to take into account the overhead due to the massive transfer of data between devices.

It makes sense to use Model Parallelism in the case of training huge models that do not fit on one device even with a small batch size.

![Model Parallelism](../../assets/mp.png)

## Data Parallelism

Unlike Model Parallelism, in this approach, small pieces of data are distributed between several devices, i.e., the batch is broken down into small pieces and processed independently by multiple copies of the same model.

The learning process organization is as follows. One of the devices is assigned to serve as a master device, the main task of which is to collect gradients for gradient descent from other devices and update the weights across all the copies of the model.

![Data Parallelism](../../assets/dp.png)

Data Parallelism is a universal method and is provided by most popular DL libraries for training (DistributedDataParallel in PyTorch), freeing users from the need to synchronize data between devices themselves.

## When we really want distributed training

When developing any ML solution, the critical factor is the time taken to test various hypotheses. The techniques that are providing fundamental acceleration in this regard are using Distributed Training and model training with Mixed Precision.

For training the Question Answering system, we decided to use Bert, trained using an iterative gradient descent algorithm. A schematic representation of the training process is shown in the figure below.

![Training process](../../assets/gds.png)

To achieve the metrics presented in the original paper, we recommend using a large batch size. To train a model with these parameters, one can use gradient accumulation. However, to complete one step of gradient descent, several iterations of the training cycle are required. So, this approach makes sense if the time to obtain a trained model is not crucial.

To speed up the learning process, you can instead of accumulating gradients on a single machine, start a training cycle on several instances at once and then combine the gradients from them. This approach is called Data Parallel Distributed Training.

## How Neu.ro is used for distributed training

[Neu.ro](https://neu.ro/) is an ML development platform. It puts data, models, training, and tuning at your fingertips. The platform allows you to focus on model development tasks at hand by managing critical aspects of underlying infrastructure and system integration, including resource allocation, storage and environment management, sharing, secure web and terminal access to running jobs.

First of all, to start doing distributed training, it is necessary to own multiple GPUs, which we imagine some ML teams do, but almost none of the individual practitioners and researchers have that luxury. Secondly, for serious large scale training, one machine isn’t enough.

But even when you have a respectable amount of computational resources, whether it is cloud or on-premise hardware, setting up the distributed training pipeline is generally a non-trivial task.

Neu.ro provides you with an infrastructure for distributed training setup alongside with a project template which you can conveniently adapt for your purposes.

## Benchmarks

For all the following experiments we used agpu-largeinstance setup available on the neuro-ai-public cluster:

| \#CPU | Memory | GPU                   |
| ----- | ------ | --------------------- |
| 7     | 45G    | 1 x nvidia-tesla-v100 |

Since IO often becomes a bottleneck for a training pipeline, we decided to run two benchmarks: with and without the overhead of reading the data.

To eliminate IO operations, we defined the `DummyDataset` maintaining the original data format, although the data itself is gibberish generated on the fly, without involving the disk. When processing `DummyDataset`, almost no resources are spent on data preprocessing; this gives us a clear view of how much boost we can achieve when involving several instances for training.

When using 2 instances for training, the average time required for one epoch does not decrease, but in fact goes up. The reason is additional delays in transmitting data over the network. As you can see in the table below, network delays become less significant as GPU instances increase.

| \# of instances | Average time per epoch (sec) |
| --------------- | ---------------------------- |
| 1               | 164.73                       |
| 2               | 171.93                       |
| 4               | 138.80                       |

Now let's evaluate Distributed Training when data preprocessing is required. In our case, the data is [Google's Natural Questions](https://ai.google.com/research/NaturalQuestions/dataset) with several augmentations performed on the fly.

As you can see in the table, the acceleration is more significant, because in this case we are allocating more CPU resources for preprocessing.

| \# of instances | Average time per epoch (sec) |
| --------------- | ---------------------------- |
| 1               | 6202.63                      |
| 2               | 5378.93                      |
| 4               | 4280.93                      |

The natural question to ask here is, “why does the acceleration not have a linear dependence based on the number of cards?” The answer is simple: linear dependence is currently impossible to achieve even if the GPU cards are on the same machine. In our case, another reason is non-optimal data transmission over the network.

## Try it for yourself

The goal of this article is not only to demonstrate achieving linear acceleration, which one can achieve with PyTorch using the distributed training API, but also to show how easy and convenient it is to use the Neu.ro platform for this.

To solve the problem, we used the Data Parallelism approach. Examples of the training scripts using PyTorch can be found in our [repository](https://github.com/neuromation/ml-recipe-distributed-pytorch).

To download [Google's Natural Questions](https://ai.google.com/research/NaturalQuestions/dataset) dataset and run our competition solution, you must accept the user agreement on Kaggle. In case you want to reuse our recipe as a template for doing distributed training on Neu.ro, we are also providing the `DummyDataset`, which does not require downloading any data.

To run the recipe on the `DummyDataset`, follow these simple steps:

1. [Sign up](https://neu.ro/) and [install CLI client](https://docs.neu.ro/getting-started#installing-cli)
2. Clone the [repository](https://github.com/neuromation/ml-recipe-distributed-pytorch)
3. Run `make setup`
4. Run `scripts/run_distributed_on_platform.sh`

Good luck in your research with our platform, and don't hesitate to give us [feedback](mailto:team@neu.ro)!