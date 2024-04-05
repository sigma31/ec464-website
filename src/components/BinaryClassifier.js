import React from 'react';

const BinaryClassifier = () => {
    const containerStyle = {
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        color: '#333',
    };

    const subheadingStyle = {
        color: '#333',
        textAlign: 'left',
    }

    const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
        marginTop: '10px',
        textAlign: 'left',
    };

    const listStyle = {
        fontSize: '14px',
        textAlign: 'left',
    }

    return (
            <div style={containerStyle}>
                <h1 style={headingStyle}>Binary Classifier for Fire Detection in Image Data</h1>
                <h2 style={subheadingStyle}>Overview:</h2>
                <p style={paragraphStyle}>
                    The Binary Classifier model is an advanced deep learning architecture tailored specifically for detecting fire within image data. Leveraging convolutional neural networks (CNNs), this model excels at capturing intricate patterns and features crucial for accurate classification.
                </p>
                <h2 style={subheadingStyle}>Image Augmentation:</h2>
            <div>
                <p style={paragraphStyle}>
                    To enhance the robustness and generalization capability of the model, a series of image augmentation techniques are applied during the training phase. These techniques introduce variations to the training images, effectively expanding the diversity of the dataset and improving the model's ability to handle real-world scenarios. The following augmentation techniques are employed:
                </p>
                <ul style={{...listStyle, paddingLeft: '20px'}}>
                    <li>Rotation Range: Images are randomly rotated within a specified range (20 degrees) to simulate variations in camera angles and perspectives.</li>
                    <li>Width and Height Shift: Random shifts are applied along the width and height dimensions of the images (10% of the total width and height, respectively), mimicking changes in object positioning within the frame.</li>
                    <li>Shear Range: Shear transformations are applied to the images, altering their shapes by shifting parts of the images in a specified direction (2 degrees).</li>
                    <li>Zoom Range: Random zooming is performed on the images (up to 20%), allowing the model to learn features at different scales.</li>
                    <li>Rescaling: Image pixel values are rescaled to the range [0, 1] to facilitate convergence during training and improve numerical stability.</li>
                </ul>
                <img src={require('../images/binaryclassifier_image_augmentation.png')}></img>
            </div>
                <h2 style={subheadingStyle}>Model Architecture:</h2>
            <div>
                <p style={paragraphStyle}>
                    The Binary Classifier model consists of the following layers:
                </p>
                <ul style={listStyle}>
                    <li>Convolutional Layers: Five sets of convolutional layers are employed, each with increasing filter sizes to extract hierarchical features from the input images. The use of rectified linear unit (ReLU) activation functions ensures non-linearity, allowing the model to capture complex relationships within the data.</li>
                    <li>Pooling Layers: After each convolutional layer, average pooling operations are applied to reduce the spatial dimensions of the feature maps while preserving important features. This helps in controlling model complexity and enhancing computational efficiency.</li>
                    <li>Dropout Regularization: Dropout layers are strategically inserted after each pooling operation to mitigate overfitting by randomly deactivating a fraction of neurons during training. This prevents the model from relying too heavily on specific features, promoting better generalization to unseen data.</li>
                    <li>Flatten Layer: The output of the final pooling layer is flattened into a one-dimensional vector, preparing it for input into the subsequent fully connected layers.</li>
                    <li>Fully Connected Layers: Two dense (fully connected) layers are employed to further extract abstract features from the flattened representation. The Rectified Linear Unit (ReLU) activation function is utilized to introduce non-linearity and capture complex relationships within the data.</li>
                    <li>Output Layer: The final layer consists of a single neuron with a sigmoid activation function, producing a probability score indicating the likelihood of the input image containing fire. A threshold is applied to this score to make binary predictions.</li>
                </ul>
            </div>
                <h2 style={subheadingStyle}>Addressing Class Imbalance with Focal Loss:</h2>
                <p style={paragraphStyle}>
                    One common challenge encountered in binary classification tasks, particularly in scenarios where one class is significantly underrepresented, is class imbalance. To mitigate the impact of class imbalance and enhance the model's ability to learn from the minority class (fire images), a custom implementation of the focal loss function has been integrated into the Binary Classifier.
                </p>
                <h3 style={subheadingStyle}>Focal Loss Function:</h3>
                <p style={paragraphStyle}>
                    The focal loss function is designed to down-weight the contribution of well-classified examples, thereby focusing more on samples that are difficult to classify. This is achieved through the introduction of a modulating factor that amplifies the loss for misclassified examples, particularly those belonging to the minority class.
                </p>
                <h3 style={subheadingStyle}>Implementation:</h3>
                <pre style={paragraphStyle}>
                    {`
    def focal_loss(y_true, y_pred, gamma=6.0, alpha=0.25):
        # Binary crossentropy
        bce = tf.keras.backend.binary_crossentropy(y_true, y_pred)
    
        # Calculate the modulating factor
        p_t = tf.math.exp(-bce)
        focal_loss = alpha * (1 - p_t)**gamma * bce
    
        return focal_loss
                    `}
                </pre>
                <p style={paragraphStyle}>
                    By incorporating focal loss into the model training process, the Binary Classifier effectively prioritizes the learning of features crucial for accurate fire detection, resulting in improved performance, especially in the presence of class imbalance.
                </p>
                <h2 style={subheadingStyle}>Conclusion:</h2>
                <p style={paragraphStyle}>
                    In conclusion, the integration of focal loss within the Binary Classifier model represents a proactive approach to address class imbalance issues commonly encountered in fire detection tasks. By dynamically adjusting the loss function based on the difficulty of classification, the model demonstrates enhanced robustness and reliability in identifying fire incidents, contributing to more effective disaster management and response strategies.
                </p>
                <p style={paragraphStyle}>
                    The confusion matrix generated for the model is shown below:
                </p>
                <img src={require('../images/binaryclassifier_conf_matrix.png')}></img>
                <div>
                <p style={paragraphStyle}>The Google Colaboratory can be found here:</p><br/>
                <a href="https://colab.research.google.com/drive/11cEKAp3f5UPXpMqHWRtgmoDjsUD0zuDM?usp=sharing" target="_blank" rel="noopener noreferrer">FireData US</a>
            </div>
            </div>
            
    );
}

export default BinaryClassifier;
