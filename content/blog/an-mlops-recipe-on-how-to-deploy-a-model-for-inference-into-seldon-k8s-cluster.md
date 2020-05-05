---
path: /seldon-on-neuro-mlops
date: 2020-05-05T12:52:04.469Z
title: An MLOps recipe on how to deploy a model for inference into Seldon K8S cluster
description: An MLOps recipe on how to deploy inference into Seldon K8S cluster
---
Here is a quick example from our engineering team on how to deploy a model into Seldon. It is one of the better tools for placing your inference into a K8S cluster. Best of all [Seldon](https://www.seldon.io/tech/products/core/) is open-sourced, and this means it is free! Neu.ro team can help you set up and maintain your K8S cluster for Seldon.

See the vanilla mnist model deployed. The example features:

1. Prepare and train a basic model on Neu.ro;
2. Wrap the model into an inference HTTP server;
3. Test inference on Neu.ro;
4. Launch production inference on existing Seldon Core.

[https://github.com/neuromation/neuro-examples/tree/master/mnist](https://github.com/neuromation/neuro-examples/tree/master/mnist)