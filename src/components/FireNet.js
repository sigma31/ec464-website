import React from 'react';
import FireNet_architecture from '../images/FireNet_architecture.png';
import FireNet_results from '../images/FireNet_result.png';


const FireNet = () => {
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
            <h1 style={headingStyle}>FireNet Model</h1>
                <h2 style={subheadingStyle}>Overview:</h2>
                <p style={paragraphStyle}>
                    FireNet is neural network that is lightweight enough to be deployed on embedded platforms such as Rasberry Pi. It balances both high performance and compact model sizes, addressing a common trade-off. 
                </p>
                <h2 style={subheadingStyle}>Model Architechture:</h2>
                <p style={paragraphStyle}>
                    <li>Conv2D: Convolutional layers used for feature extraction from images. Each layer uses a different number of filters (16, 32, 64)</li>
                    <li>AveragePooling2D: Pooling layers that downsample the feature maps to reduce their dimensions</li>
                    <li>Dropout: Used to prevent overfitting by randomly setting a fraction of the input unites to 0 at each update during training (dropout rate of 0.5 used)</li>
                    <li>Flatten: Converts the 2D feature maps produced by convolutional and pooling layers into a 1D vector</li>
                    <li>Dense: Fully connected layers, where the final layer has 2 outputs (Fire, NoFire)</li>
                </p>
                <img src ={FireNet_architecture} alt="FireNet Architecture" width="397" height="562"></img>
                <h2 style={subheadingStyle}>Results:</h2>
                <p style={paragraphStyle}>
                    Data sets used:      
                </p>
                <ul style={listStyle}>
                    <li><a href="https://www.kaggle.com/datasets/phylake1337/fire-dataset" target="_blank">FIRE Dataset</a></li>
                    <li><a href="https://www.kaggle.com/datasets/rachadlakis/firedataset-jpg-224" target="_blank"> Fire Images Dataset</a></li>
                    <li><a href="https://www.kaggle.com/datasets/mohnishsaiprasad/forest-fire-images" target="_blank">Forest Fire Images</a></li>       
                </ul>
                <p style={paragraphStyle}>
                    Metrics:
                </p>
                <ul style={listStyle}>
                    <li>Precision: The ratio of true positive samples among all samples predicted as positive.</li>
                    <li>Recall: The ratio of true positive samples detected among all actual positive samples.</li>
                    <li>F-Measure: The harmonic mean of Precision and Recall.</li>
                    <li>Accuracy: The percentage of samples correctly predicted by the model.</li>
                </ul>
                <img src ={FireNet_results} alt="FireNet Results" width="632" height="256"></img>
                <h2 style={subheadingStyle}>Conclusion:</h2>
                <p style={paragraphStyle}>
                Across the datasets, the model shows high precision in predicting fire, except for Dataset 3, Forest Fire Images, not being able to reach the 70% threshold on recall and F-measure. Some of the ways these metrics could be improved are through threshold tuning and cost-sensitive learning, along with an in-depth analysis of Dataset 3. Future work should focus on exploring other complex architecture, data augmentation, and training strategies. Overall, adapting to diverse data characteristics and extending the model's applicability to broader scenarios can further improve this model.
                </p>
                <p style={paragraphStyle}>
                    Here is link to the paper on the FireNet model that this page discusses: <a href="https://arxiv.org/pdf/1905.11922.pdf" target="_blank">FireNet Paper</a>
                </p>


        </div>



    );
}

export default FireNet;
