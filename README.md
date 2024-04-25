
# Addendum

## The Project

The project is currently divided into two major categories:
- The ML models [firedata.py](https://github.com/sigma31/ec464-website/blob/resources/src/firedataus.py), [binary_classification.py](https://github.com/sigma31/ec464-website/blob/resources/src/binary_classification.py), and [firenet_test.py](https://github.com/sigma31/ec464-website/blob/resources/src/firenet_test.py) and [firenet_train.py](https://github.com/sigma31/ec464-website/blob/resources/src/firenet_train.py)
- The website hosted [here](https://sigma31.github.io/ec464-website/)
A lot of information about the models can be found on the website.

## Information

The ML models were hosted on Google Colab and used as .ipynb files. Thus, the formatting of the .py files may seen illogical. However, looking at .pdf files for the corresponding models should how how it was originally structured.

- The FireNet Model uses images from a zip file
- The Binary Classification Model uses images zip file
- The FireData US Model uses past fire data from a sqlite database

Look into the website and the code pdf's for links to the data and where to store the data in drive to make sure models run.

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