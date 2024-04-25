# Software Report

## Software Modules Overview

Our project can be divided into three machine learning models that were written in the Python programming language and a website that is written in Javascript using the React framework and deployed using GitHub pages. Given below is a brief description of each model along with a flowchart depicting the model architecture where applicable.

### FireNet Model

The first model created by the team is the FireNet model based off of the paper [here](https://arxiv.org/pdf/1905.11922.pdf).

#### Brief Overview
FireNet is neural network that is lightweight enough to be deployed on embedded platforms such as Rasberry Pi. It balances both high performance and compact model sizes, addressing a common trade-off. This model has been our attempt at creating a computationally intensive but highly accurate model. The model architecture is described below:

* Conv2D: Convolutional layers used for feature extraction from images. Each layer uses a different number of filters (16, 32, 64)
* AveragePooling2D: Pooling layers that downsample the feature maps to reduce their dimensions
* Dropout: Used to prevent overfitting by randomly setting a fraction of the input unites to 0 at each update during training (dropout rate of 0.5 used)
* Flatten: Converts the 2D feature maps produced by convolutional and pooling layers into a 1D vector
* Dense: Fully connected layers, where the final layer has 2 outputs (Fire, NoFire)

![FireNet Architecture](https://github.com/sigma31/ec464-website/blob/resources/images/FireNet.png)

### Binary Classification Model
This is the second model created by the team. It is loosely based off of the model given [here](https://www.kaggle.com/code/holdmykaggle/fire-detection-in-images/notebook).

#### Brief Overview
The binary classification model was created to be an extremely lightweight model which favored lower training times over accuracy. This model is ideal for application in an early warning system that is deployed on the edge.

The network architecture consists of a sequential stack of layers designed for image classification tasks. It begins with five Conv2D layers, each employing increasing filter sizes and ReLU activation functions to introduce non-linearity. Following each convolutional layer, AveragePooling2D layers are added, effectively reducing spatial dimensions and providing translation invariance. Dropout layers are strategically placed to promote regularization by randomly dropping connections, preventing overfitting. A Flatten layer is then employed to transform the 2D feature maps into a 1D vector, preparing the data for the fully connected layers. Two Dense layers with ReLU activation functions further introduce non-linearity to the network. To mitigate overfitting, a Dropout layer is incorporated before the final Dense layer. The last Dense layer comprises a single neuron with a sigmoid activation function, making it suitable for binary classification problems.

A block diagram of the workflow of the model is given below:

![BinaryClassification Workflow]()









