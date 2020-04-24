---
path: /reinforcement-learning
date: 2020-03-19T15:26:33.608Z
title: 'Reinforcement Learning: Practical Guide'
description: An introduction for beginners
---
Reinforcement learning (RL) is one of the three main areas of machine learning, alongside supervised and unsupervised learning. It is also probably the most intriguing one, as it feels the closest to the AI we dream about: the one that can analyze the world and then take actions according to whatever circumstances it finds.

Let us give you one example. Do you remember how [AlphaGo beat Lee Sedol](https://en.wikipedia.org/wiki/AlphaGo_versus_Lee_Sedol)? That was just one of the RL approach’s astounding achievements.

In RL, there are one or several **agents**, which take **actions** to maximize the cumulative **reward**. Imagine playing tic-tac-toe: each particular turn may not give any immediate reward (because you get a reward only at the end of the game), but it may move you closer to the win. Another example would be a Mario game: an agent (Mario) can run, jump, and do other actions, which should give some immediate rewards and also bring Mario closer to rescuing the princess.

There are several approaches to RL. The most natural one is to explore all possible states of the agent’s environment, all actions between these states, and all rewards for these actions. This method is well known as “brute force” and rarely applied to practical tasks due to the enormous number of states and related actions. Other approaches (like the Cross-Entropy Method) use various heuristics to decrease the exploration space.

One of the papers which led to the rise of applying RL to video games is [Playing Atari with Deep Reinforcement Learning ](https://www.cs.toronto.edu/~vmnih/docs/dqn.pdf)by Mnih et al.:

> We present the first deep learning model to successfully learn control policies directly from high-dimensional sensory input using reinforcement learning. The model is a convolutional neural network, trained with a variant of Q-learning, whose input is raw pixels and whose output is a value function estimating future rewards.

The authors applied this algorithm to several Atari 2600 games. Its beauty is that it is entirely generic; it knows nothing about the game rules or how the game screen organization.

An aspiring ML enthusiast can experiment with various RL algorithms in [OpenAI Gym](https://gym.openai.com/): a specialized toolkit that allows programming agents for various RL tasks from walking to playing Pong - or even well-known Atari Games.

To simplify your exploration of RL, we created an [ML recipe](https://docs.neu.ro/cookbook/deep-q-learning-dqn) which contains a Jupyter notebook with implementation of the model mentioned above and application of this model to the OpenAI Gym environments. It starts with the [Mountain Car](https://gym.openai.com/envs/MountainCar-v0/) game, where a car is stuck between two hills and has to move back and forth to build up momentum and drive up the mountain to the right. However, you can also run the same algorithm on any other environment by updating the \`env_id\` variable.

There are two ways to run the recipe:

* [Click here](https://apps.neu.ro/mountain-car) to start a Jupyter Notebook session (or click the corresponding button on your [Dashboard](https://app.neu.ro/)). Note that as soon as you terminate the Jupyter session, your changes are lost.
* Follow the [instructions](https://docs.neu.ro/cookbook/deep-q-learning-dqn#quick-start) to clone the repository and preserve your changes on Neu.ro storage. Use `make download` to download the changes in your local copy of the repository.

Good luck in learning RL with Neu.ro, and don’t hesitate to give us your [feedback](mailto:team@neu.ro)!