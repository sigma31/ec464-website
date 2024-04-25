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

![BinaryClassification Workflow](https://github.com/sigma31/ec464-website/blob/resources/images/BinaryClassification.png)

### FireData US Model

This is the third model created by the team. It uses historical data obtained from the Department of Agriculture [here](https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.6). It is available in the form of a SQL database and thus appropriate data processing must be done.

#### Brief Overview

For this model, the XGBoost model from sklearn was used. 
Here's a brief overview of the XGBoost model:

* Gradient Boosting: XGBoost is based on the principle of gradient boosting, which is an ensemble learning technique that combines multiple weak learners (typically decision trees) to create a strong predictive model. It builds successive trees to correct the errors of the previous ones, with each tree learning from the residuals (the differences between the predicted and actual values).
* Regularization: XGBoost incorporates regularization techniques to prevent overfitting, such as L1 regularization (Lasso regularization) and L2 regularization (Ridge regularization), which penalize complex models and help improve generalization performance.
* Objective Function: XGBoost uses a customizable objective function that quantifies the difference between the predicted and actual values, allowing users to specify different loss functions based on the problem at hand (e.g., regression, classification, ranking).
* Tree Pruning: XGBoost employs a technique called tree pruning to control the complexity of individual decision trees, preventing them from growing too deep and overfitting the training data.
* Parallel and Distributed Computing: XGBoost is designed for efficiency and scalability, with support for parallel and distributed computing. It can leverage multiple CPU cores and distributed computing frameworks (e.g., Spark) to train models on large datasets efficiently.
* Feature Importance: XGBoost provides built-in feature importance scores, which indicate the relative importance of each feature in predicting the target variable. This information is valuable for feature selection and understanding the underlying patterns in the data.

A block diagram of the workflow of the model is given below:

![FireDataUS Workflow](https://github.com/sigma31/ec464-website/blob/resources/images/FireDataUS.png)

### Website

The website was created in order to provide an in depth explanation of our contributions during this project. The website is hosted using GitHub pages and can be found [here](https://sigma31.github.io/ec464-website/#/).

#### Brief Overview

The website was created using the Javascript programming language and the React framework. A description of the major code files can be found below:
* Home.js - This represents the homepage of a website. It renders a container with sections containing headings, paragraphs, and a list of team members. Styles are applied using inline JavaScript objects. The content includes a welcome message, project summary, problem statement, links to learn more about different models, and a list of team members. The component exports the Home component as the default export, making it available for use in other parts of the application.
* FireNet.js - This represents a page dedicated to detailing the FireNet model. The component renders a container with sections containing headings, paragraphs, an image depicting the model architecture, and a list of datasets used for training. The content is styled using inline JavaScript objects, ensuring consistency and readability.
* BinaryClassifier.js - This represents a page dedicated to explaining the binary classifier model designed for fire detection in image data. The component renders a container with sections containing headings, paragraphs, lists, and an image depicting image augmentation techniques. The content is styled using inline JavaScript objects for consistent formatting and readability.
* FireDataUS.js - This represents a page dedicated to explaining the FireData US model. The component renders a container with sections containing headings, paragraphs, lists, and images depicting data breakdown and model outcomes. Inline JavaScript objects are used for styling to ensure consistent formatting and readability.
* DataSourceOverview.js - This represents a page providing an overview of various data sources used in the project. The component renders a table with columns for different attributes of the data sources, such as name, type, format, coverage, accessibility, notes, and URL. Inline CSS is used to style the table for consistent formatting and readability.
* AppRouter.js - The AppRouter component defines routes for different pages of the application using the Routes and Route components. Each route specifies a path and the corresponding component to render when that path is matched.

The application consists of the following pages:

* Home page (Home component)
* About page (DataSourcesOverview component)
* FireNet page (FireNet component)
* BinaryClassifier page (BinaryClassifier component)
* FireDataUS page (FireDataUS component)

Navigation between these pages is facilitated using Link components wrapped in a nav element within the Header component. Each Link corresponds to a specific route defined in the AppRouter.

The routing is handled using a HashRouter to enable routing within a single-page application without the need for server-side configuration.

## Configuration

### Machine Learning Models
Using the models requires you to utilize [Google Colaboratory](https://colab.research.google.com/).

The ipynb files for each model are provided in the GitHub repository. These can be downloaded and then uploaded to Google Colaboratory using the upload feature. 

![Upload notebook to Google Colaboratory](https://github.com/sigma31/ec464-website/blob/resources/images/colab.png)

Once the notebook has been uploaded the datasets must be put into the appropriate Google Drive locations as specified below.

1. Binary Classification Model:  
	- Place data in /content/drive/MyDrive/FireImageData.zip - https://www.kaggle.com/datasets/phylake1337/fire-dataset 
	- Place data in /content/drive/MyDrive/TrainingDataset.zip - https://drive.google.com/file/d/165fUt_SiS50syL8QtdON50D_uyudcsrW/view?usp=drive_link 
    
2. FireNet Model: 
	- Place data in /content/drive/My Drive/fire_dataset_kaggle - [https://www.kaggle.com/datasets/phylake1337/fire-dataset](https://www.kaggle.com/datasets/phylake1337/fire-dataset)
	- Place data in /content/drive/My Drive/fire_images_dataset/test - [https://www.kaggle.com/datasets/rachadlakis/firedataset-jpg-224](https://www.kaggle.com/datasets/rachadlakis/firedataset-jpg-224)
	- Place data in /content/drive/My Drive/forest_fire_images/Test_Data - [https://www.kaggle.com/datasets/mohnishsaiprasad/forest-fire-images](https://www.kaggle.com/datasets/mohnishsaiprasad/forest-fire-images)

3. FireData US Model: 
	- Place data in /drive/MyDrive/Assignments/FPA_FOD_20221014.sqlite - [https://www.fs.usda.gov/rds/archive/products/RDS-2013-0009.6/RDS-2013-0009.6_Data_Format4_SQLITE.zip](https://www.fs.usda.gov/rds/archive/products/RDS-2013-0009.6/RDS-2013-0009.6_Data_Format4_SQLITE.zip)

### Website

The source code for the website is located in the `master` branch. 

The steps to set up the project are detailed below (This assumes you have npm installed. If you do not then find the npm installation guide [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

1. Clone the GitHub repository.
2. Navigate to the local instance of the repository.
3. Use the command `git checkout master` to switch into the master repository.
4. Run `npm install` in order to download all the dependencies.
5. To begin the project in development mode run `npm start`

In order to deploy the website using GitHub pages you can simply run the `npm run deploy` command and that will automatically run a script to deploy the website.










