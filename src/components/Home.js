import React from 'react';
import '../styles/HomeStyle.css';

const Home = () => {
    return (
        <div className="pageWrapper"> 
            <div className="containerStyle"> 
                <h1 className="headingStyle">Welcome to Team 1: Dryad Networks Early Wildfire Detection</h1>
                <div className="sideBySideContainer"> 
                    <div className="section"> 
                        <h2 className="subheadingStyle">Summary:</h2>
                        <p className="paragraphStyle">
                            Dryad Networks aims to improve their AI and IoT-based forest fire prevention and detection system.
                            With wildfires contributing to global CO2 emissions and escalating climate threats,
                            the need for more accurate and swift detection is paramount. The project aims to refine the machine learning model,
                            deploy it at the edge and in the cloud, and collaborate with data scientists to enhance evaluation mechanisms.
                            The focus is on early wildfire detection, aligning with engineering requirements for
                            performance, reliability, scalability, integration, and security. Dryad Networks' system prioritizes early detection
                            using innovative technology to aid global wildfire prevention.
                        </p>
                    </div>
                    <div className="section"> 
                        <h2 className="subheadingStyle">Problem Statement:</h2>
                        <p className="paragraphStyle">
                            The escalating threat of wildfires is undeniable, contributing up to 20% of global CO2 emissions and fueling a
                            predicted 1.5°C rise in global temperatures. Swift and precise fire detection methods are necessary to mitigate
                            the devastating environmental and societal impacts of wildfires. In response to this critical need, our team has undertaken three different machine learning models
                            for wildfire detection. Leveraging publicly available models and datasets, we have enhanced existing
                            methodologies to confront the escalating threat of wildfires. Our efforts are focused on refining the FireNet and
                            BinaryClassification models, alongside the development of our proprietary model, FireDataUS.
                            Drawing from both image datasets and data from the Department of Agriculture, our aim is to revolutionize wildfire detection by harnessing the power of machine learning for more accurate and timely predictions.
                        </p>
                    </div>
                </div>
                <div className="sideBySideContainer">
                <div className="section">
                    <h2 className="subheadingStyle">Learn More:</h2>
                    <p className="paragraphStyle">
                        Discover the forefront of wildfire detection technology with our <a href="/ec464-website/#/firenet">FireNet</a>,
                        <space> </space><a href="/ec464-website/#/BinaryClassifier">Binary Classifier</a>, and <a href="/ec464-website/#/forestdata">FireDataUS</a> models.
                        Explore how our innovative approach is reshaping early detection methods. Take the initiative in advancing wildfire
                        management strategies by immersing yourself in our research today.
                    </p>
                </div>
                <div className="section">
                    <h2 className="subheadingStyle">Team Members:</h2>
                    <p className="paragraphStyle">
                        Rishav De       |  rishavde@bu.edu <br></br>
                        Pranet Sharma   |   pranetsh@bu.edu <br></br>
                        Young-Chan Cho  |   yccho@bu.edu <br></br>
                        Victoria Kang   |   vkang@bu.edu <br></br>
                        Thomas Bowler   |   tsbowler@bu.edu <br></br>
                    </p>
                </div>
                </div>
            </div>
            <div className="imageBackground" />
        </div>
    );
}

export default Home;


