import React from 'react';

const FireDataUS = () => {
    return (
        <div className="pageWrapper">
            <div className="containerStyle"> 
                <h1 className="headingStyle">FireData US Model</h1>
                <div className="bigSection">
                    <h2 className="subheadingStyle">The Data</h2>
                    <div className="sideBySideContainer">
                    <div className="section">
                    <p className="paragraphStyle" >
                    The FireData US model is based on data from the Department of Agriculture. The data, which can be found <a href="https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.6" target="_blank" rel="noopener noreferrer">here</a>, comes from the Research Data Archive.<br />
                    <br />
                    The data fields are extracted as:
                <p className="listStyle">
                    <li>FIRE_SIZE - The estimate of acres within the final perimeter of the fire</li>
                    <li>FIRE_SIZE_CLASS - Code for fire size based on number of acres within final fire perimeter (A to G)</li>
                    <li>FIRE_YEAR</li>
                    <li>NWCG_CAUSE_CLASSIFICATION - Broad classification of the reason the fire occurred</li>
                    <li>NWCG_GENERAL_CAUSE - Event that started a fire or set the stage for its occurrence</li>
                    <li>LATITUDE</li>
                    <li>LONGITUDE</li>
                    <li>STATE</li>
                    <li>DISCOVERY_DATE</li>
                    <li>DISCOVERY_DOY - Day of year on which the fire was discovered or confirmed to exist</li>
                    <li>CONT_DATE</li>
                    <li>CONT_DOY - Day of year on which the fire was declared contained or otherwise controlled</li>
                </p>
                </p>
                </div>
                <div className="section">
                <p className="paragraphStyle" >
                The breakdown of the FIRE_SIZE_CLASS is shown here, which becomes relevant in the Outcome section below:<br/>
                </p>
                <img src={require('../images/databreakdown.png')}></img>
                </div>
            </div>
            </div>
            <div>

            <div className="extraSpace"></div>

            <div className="section"> 
            <h2 className="subheadingStyle">The Model</h2>
                <p className="paragraphStyle" >
                    The model is an XGBoost Classifier (XGB). Other model types such as Gradient Boosting Classifier (GBC) and Random Forest Classifier (RFC) yield similar results.
                    The models primary focus is to predict the FIRE_SIZE_CLASS based on other information. A few changes have also been made to the data (listed below) that is then 
                    fed to the model:<br/>
                    <p className="listStyle">
                        <li>DISCOVERY_DATE and CONT_DATE fields are dropped as their corresponding DOY exists</li>
                        <li>FIRE_SIZE_CLASS and FIRE_SIZE is dropped from the dataset on which training since we are trying to predict those</li>
                        <li>Label encoding the string values that exist in the dataset</li>
                        <li>Dividing into training and testing sets</li>
                    </p>
                    Class weights are computed using a 'balanced' formula and then fed into the XGB Classifier.  
                </p>
            </div>
            </div>
            <div>

            <div className="extraSpace"></div>

        <div className="bigSection">
            <h2 className="subheadingStyle">The Outcome</h2>
            <div className="sideBySideContainer">
                <div className="section"> 
                <img src={require('../images/firedataconfmat.png')}></img>
                </div>
                <div className="section"> 
                <p className="paragraphStyle" >
                    This confusion matrix shows Actual vs Predicted numbers of the fire classes. There are much more data 
                    from classes A and B (small fires) than classes C, D, E, F and G (large fires). This results in the predictions for the larger 
                    fires to be much less accurate. However, for the smaller fires the model is able to predict the fire class much better.
                    The precision score for A and B is about 0.70, and it decreases to a minimum of 0.22 for the other larger fires.<br/>
                    <br/>
                    This shows that historical data is a very good predictor for the fire size, especially if there is a wealth of data. Ofcourse, 
                    we could not generate more data like one may do with images since that would be false data. If there were other historical data factors such as
                    temperature, humidity, heat etc, the predictiosn could be more accurate. 
                </p>
            
            
                <p className="paragraphStyle" >The Google Colaboratory can be found here:</p><br/>
                <a href="https://colab.research.google.com/drive/19Zy8YbZUIbGB8mq_gh5PrZCnpHY4gkwU?authuser=1#scrollTo=5s9Zey2WHN2j" target="_blank" rel="noopener noreferrer">FireData US</a>
            
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="firedataBackground" />
    </div>
    );
}

export default FireDataUS;
