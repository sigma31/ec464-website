# Software Report

## Software Modules Overview

Our project can be divided into three machine learning models that were written in the Python programming language and a website that is written in Javascript using the React framework and deployed using GitHub pages. Given below is a brief description of each model along with a flowchart depicting the model architecture where applicable.

### FireNet Model

The first model created by the team is the FireNet model based off of the paper [here](https://arxiv.org/pdf/1905.11922.pdf)

### Brief Overview
FireNet is neural network that is lightweight enough to be deployed on embedded platforms such as Rasberry Pi. It balances both high performance and compact model sizes, addressing a common trade-off. This model has been our attempt at creating a computationally intensive but highly accurate model. The model architecture is described below:

* Conv2D: Convolutional layers used for feature extraction from images. Each layer uses a different number of filters (16, 32, 64)
* AveragePooling2D: Pooling layers that downsample the feature maps to reduce their dimensions
* Dropout: Used to prevent overfitting by randomly setting a fraction of the input unites to 0 at each update during training (dropout rate of 0.5 used)
* Flatten: Converts the 2D feature maps produced by convolutional and pooling layers into a 1D vector
* Dense: Fully connected layers, where the final layer has 2 outputs (Fire, NoFire)


