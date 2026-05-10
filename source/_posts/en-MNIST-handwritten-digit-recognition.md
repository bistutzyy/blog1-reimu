---
title: MNIST Digit Recognition — LR vs SVM vs CNN
date: 2026-05-09 12:00:00
tags: [Deep-Learning, Digit-Recognition, ML, CNN, TensorFlow, scikit-learn, MNIST]
categories: [Machine Learning]
description: Comparing three ML approaches on MNIST
---

{% alertBlockquote warning %}
📝 Summarized English version. For the complete article, switch to 中文.
{% endalertBlockquote %}

Comparing three approaches on MNIST (70,000 grayscale 28×28 digit images):

## Methods

| Model | Accuracy | Train Time |
|-------|----------|-------------|
| Logistic Regression | <span class="c-blue">92.57%</span> | 8.50s |
| SVM (RBF) | <span class="c-green">91.83%</span> | 38.50s |
| **CNN** | <span class="c-red">**98.93%**</span> | 34.61s |

## Real-World Test (Custom Images)

| Model | Custom Image Accuracy |
|-------|----------------------|
| Logistic Regression | <span class="c-red">60.00%</span> |
| SVM | <span class="c-red">60.00%</span> |
| **CNN** | <span class="c-green">**90.00%**</span> |

{% alertBlockquote tip SUCCESS %}
**CNN is the clear winner** — 98.93% on MNIST, 90% on custom images. For production digit recognition, CNNs are the standard. LR and SVM serve as excellent baselines.
{% endalertBlockquote %}
