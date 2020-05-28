---
path: /mlops-covid
date: 2020-05-25T08:09:27.482Z
title: Neu.ro’s SARS-CoV-2 / COVID-19 Program
description: Neu.ro’s SARS-CoV-2 / COVID-19 Program
---
#### Call to action for ML engineers and researchers

Neu.ro believes that machine learning is a powerful tool for the development of novel solutions to issues related to SARS-CoV-2 / COVID-19 and other infectious diseases. 

Neur.o is supporting research and development of ML-driven solutions to SARS-CoV-2 / COVID-19 by providing the Neu.ro platform and GPU computing power, completely free of charge, to qualified engineers and researchers. 

Interested? Please [Join us here!](https://landing.neu.ro/offers/covid-19/index.html)

##### COVID-related research tracks and resources

This document is a collection of ML projects and resources related to COVID. It includes projects that Neu.ro and its partners, [AWS](https://aws.amazon.com/) and [Insilico Medicine](https://insilico.com/), are developing, as well as projects that we propose for others to develop or co-development with us. Also, we have included datasets and resources that we believe are useful for these tasks. 

We hope that you will join us to find solutions to this new challenge to humanity.

In-house projects  These are projects that Neu.ro, Insilico Medicine and partners are currently developing in-house, with all necessary resources in place at this time. 

Generation of novel molecules for the key viral proteins using generative chemistry pipeline 

Identification of antifibrotic agents that can help restore lung function and prevent/reverse fibrosis in the lung and other tissues

Testing our AI-biomarkers of aging to see if some of them can be predictive of susceptibility to infection, severity, and lethality 

Use of geroprotectors, and specifically rapamycin for prevention by boosting the immune systems in the elderly 

Microbiome analysis to understand what features may contribute to increased resistance and survival, and vice versa 

Release a COVID-19 version of our Pandomics.com system to be freely available for COVID-19 research

##### Projects for collaboration

These are projects that Neu.ro and Insilico Medicine and partners are currently developing, and are open to collaborate with other individuals and/or teams on development of these areas. 

There are many exciting topics a data scientist or a biologist can go after, please see below promising directions that may result in viable near-term solutions and/or high-impact, publishable work.  

##### Smarter Lockdowns 

Improved epidemiological predictions for the spread of COVID-19 and other infectious diseases based on ML-driven multi-factor modeling; goal to identify locally optimal balance between “Lockdown” quarantine policies and economic sustainability.  

##### Computer vision for commercial and public safety policies

Development of widely accessible and easily installed computer vision solutions for live monitoring of safety policies in public and commercial spaces: Mask detection Social distancing
Hand washing

##### Data Aggregation and Analysis

From the amount of research papers and perspectives being put off it appears that about 10% of all FDA-approved drugs have been nominated for COVID-19 by the various groups, including the machine learning scientists. It would be great to develop an analytical tool to track all of the repurposing proposals by drug name describing the mechanism of action. By drug, by group, by mechanism, by date, with experimental evidence/without experimental evidence, by credibility of the team.

Prediction of pharmacological properties using transcriptomic and structural data. In the past, we published notable research in drug repurposing using transcriptomic data. It would be great if this approach is replicated using the updated data sets and methods to classify and rank the drugs that were proposed for repurposing against COVID19 and the ones that have not yet been proposed. Here is a paper to improve: 

https://pubs.acs.org/doi/abs/10.1021/acs.molpharmaceut.6b00248

Predicting the severity of disease and identifying the most important features and networks of features

It is very important to understand early which patients are likely to have mild, morbid or fatal reactions to the virus, and to identify what features or combinations of features contribute the most to the prediction.

A potential approach this problem for any patient data set for COVID19 is: Featurize the data either automatically or if the dataset is structured, using the structure of the data set. Select the most important features: age, sex, smoking status, BMI, comorbidity/disease, admitted to hospital, placed into ICU, put on ventilator, died/survived, time in ICU, time in the hospital. These features may be called differently.  Build predictors of age (to test if the number of samples is sufficient). Build a predictor for admission to ICU. Build a predictor of Time in the ICU. Build a predictor of time to recovery/release. 
Analyze the most important features for prediction for every predictor (PFI/SDF/SHAP/etc)
Interpret the most important features 
When working with the biological data fit the features into pathways or group by system/theme (e.g. immunological features)
Discuss these features with a biologist and a physician, sciencedirect.com

##### Useful datasets and resources

NIH COVID19 Literature available for download: https://www.ncbi.nlm.nih.gov/research/coronavirus/#data-download

Drugbank:  https://www.drugbank.ca/

GHDDI: https://ghddi-ailab.github.io/Targeting2019-nCoV/CoV_Experiment_Data/

Kaggle Datasets and Results: https://www.kaggle.com/covid-19-contributions

CORD-19 Dataset on Kaggle: https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge

Google COVID19 Data Set: https://console.cloud.google.com/marketplace/browse?filter=solution-type:dataset&filter=category:covid19&pli=1

COVID19 Tweets https://github.com/echen102/COVID-19-TweetIDs

COVID19 research preprint papers (both medRxiv and bioRxiv): https://connect.biorxiv.org/relate/content/181

COVID19 portal at ResearchGate (I like it more than bioRxiv, which is often biased and ResearchGate lets you see the author profiles) 

It is shaping right now:  https://www.researchgate.net/community/COVID-19

COVID19 X-Ray and CT Images: https://github.com/ieee8023/covid-chestxray-dataset

AWS DataSets (not great, but may be useful) https://aws.amazon.com/data-exchange/covid-19/?cards.sort-by=item.additionalFields.order&cards.sort-order=asc