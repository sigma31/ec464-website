
# Addendum

## The Project

The project is currently divided into two major categories:
- The ML models [firedata.py](https://github.com/sigma31/ec464-website/blob/resources/src/firedataus.py), [binary_classification.py](https://github.com/sigma31/ec464-website/blob/resources/src/binary_classification.py), and [firenet_test.py](https://github.com/sigma31/ec464-website/blob/resources/src/firenet_test.py) and [firenet_train.py](https://github.com/sigma31/ec464-website/blob/resources/src/firenet_train.py)
- The website hosted [here](https://sigma31.github.io/ec464-website/)
A lot of information about the models can be found on the website.

In its current state, the models are only developed for theoretical use, and have not been tested on edge devices. The models can also be improved by improving the quality and balance of the data. The models are supposed to act as a guide to future researchers on what are the best approached to ML for forest fire prediction. The website and User manual are to supplement that goal. 

The FireNet and Binary Classification models are lightweight and meant to be deployed on edge devices, but changes may have to be made to deploy it on different systems. The FireData US model is slower and more powerful and meant for cloud purposes. However, the FireData US is not supposed to be a model that catches fires happening in real time, but a model that can predict the size of a fire at any location based on fire data from previous years.
## Information

The ML models were hosted on Google Colab and used as .ipynb files. Thus, the formatting of the .py files may seen illogical. However, looking at .pdf files for the corresponding models should how how it was originally structured.

- The FireNet Model uses images from a zip file
- The Binary Classification Model uses images zip file
- The FireData US Model uses past fire data from a sqlite database

To run as intended, convert the .py files to .ipynb files as you see fit and put into Google Colab (or just put all code in one cell it will work regardless) and run all cells. Make sure that the data is in the correct place. If all is well, then the code should run and give results. 

Look into the website and the code PDFs for links to the data and where to store the data in drive to make sure models run.

The website is the [master](https://github.com/sigma31/ec464-website/blob/master/README.md) branch, and is written using React. The website is purely informational, but for changes:
- Clone the master branch 
- Make changes
- run `npm run deploy`

This will deploy your changes to the hosted website. Look at the [README_SOFTWARE.md](https://github.com/sigma31/ec464-website/blob/resources/README_SOFTWARE.md) for more information
## Things of Note

- Hardest part will be getting datasets and putting them into the correct Google Drive directories so that the model can find them. 

1. Binary Classification Model:  
	- Place data in /content/drive/MyDrive/FireImageData.zip - https://www.kaggle.com/datasets/phylake1337/fire-dataset 
	- Place data in /content/drive/MyDrive/TrainingDataset.zip - https://drive.google.com/file/d/165fUt_SiS50syL8QtdON50D_uyudcsrW/view?usp=drive_link 
    
2. FireNet Model: 
	- Place data in /content/drive/My Drive/fire_dataset_kaggle - [https://www.kaggle.com/datasets/phylake1337/fire-dataset](https://www.kaggle.com/datasets/phylake1337/fire-dataset)
	- Place data in /content/drive/My Drive/fire_images_dataset/test - [https://www.kaggle.com/datasets/rachadlakis/firedataset-jpg-224](https://www.kaggle.com/datasets/rachadlakis/firedataset-jpg-224)
	- Place data in /content/drive/My Drive/forest_fire_images/Test_Data - [https://www.kaggle.com/datasets/mohnishsaiprasad/forest-fire-images](https://www.kaggle.com/datasets/mohnishsaiprasad/forest-fire-images)

3. FireData US Model: 
	- Place data in /drive/MyDrive/Assignments/FPA_FOD_20221014.sqlite - [https://www.fs.usda.gov/rds/archive/products/RDS-2013-0009.6/RDS-2013-0009.6_Data_Format4_SQLITE.zip](https://www.fs.usda.gov/rds/archive/products/RDS-2013-0009.6/RDS-2013-0009.6_Data_Format4_SQLITE.zip)
