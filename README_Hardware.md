## Tool Requirements for Running the Three Models:
Hardware Requirements for All Three models
* Computer: A machine with CPU, GPU, and storage for deep learning model training and testing
* Internet Connection: For downloading large datasets and accessing cloud resources

/n
**FireNet Model Platforms**
* Python
	* TensorFlow / Keras: For building and training deep learning models.
	* OpenCV: For image processing.
	* Matplotlib / sklearn: For data visualization and performance evaluation.
* Google Colaboratory
	* For running models in .ipynb files using GPU

**Binary Classification Model Platform**
* Python
	* Tensorflow
	* Image Augmentation and Generation
	* Keras
	* Numpy, Scipy
	* Plotly 
	* sklearn
	* seaborn
 * Google Colaboratory
	* For running models in .ipynb files using GPU
		
		
		
**FireDataUS Model Platform**
* Python
	*Tensorflow
	* Image Augmentation and Generation
	* Keras
	* Numpy, Scipy
	* Plotly 
	* sklearn
	* seaborn
  	* sqlite3
* Google Colaboratory
	* For running models in .ipynb files using GPU
   



## For the Demo:

**On the BeagleBone:**
* A traffic light kernel module indicates fire risk, adding a visual feedback mechanism
* A .cpp userspace code file that uses OpenCV to capture an image using the camera in mpeg format
* A shell script that runs the .cpp file and uses curl to send the image to the ngrok server every 30 seconds
* Makefiles for the .cpp userspace file and the kernel module

**On the server side:**
* A Flask application that receives an image, passes it through the ML model and sends the prediction back to the BeagleBone as part of the response

#### Technical Details/Setup:
![Schematic](https://drive.google.com/uc?id=1jApP6RFEn3w7kXia2cz8iFjxyUz_CIeG)


**Server Side:**
* Run the Flask server.
* Use ngrok to tunnel the localhost to a public IP address, which the BeagleBone uses to send images.

**BeagleBone Setup:**
* Compile and load the kernel module with `make`, `mknod`, and `insmod`.
* Set the `UPLOAD_URL` environment variable to the ngrok server's URL.
* Run the shell script to send images at 30-second intervals and interface with the kernel module to control the traffic light.
