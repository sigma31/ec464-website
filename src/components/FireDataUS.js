import React from 'react';

const FireDataUS = () => {
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
            <h1 style={headingStyle}>FireData US Model</h1>
            <h2 style={subheadingStyle}>The Data:</h2>
            <div>
                <p style={paragraphStyle}>
                    The FireData US model is based on data from the Department of Agriculture. The data, which can be found <a href="https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.6" target="_blank" rel="noopener noreferrer">here</a>, come from the Research Data Archive. --CITE IN REFERENCES--.<br />
                    The following data fields extracted:
                </p>
                <ul style={listStyle}>
                    <li>FIRE_SIZE - The estimate of acres within the final perimeter of the fire.</li>
                    <li>FIRE_SIZE_CLASS - Code for fire size based on the number of acres within the final fire perimeter (A to G)</li>
                    <li>FIRE_YEAR</li>
                    <li>NWCG_CAUSE_CLASSIFICATION - Broad classification of the reason the fire occurred</li>
                    <li>NWCG_GENERAL_CAUSE - Event or circumstance that started a fire or set the stage for its occurrence</li>
                    <li>LATITUDE</li>
                    <li>LONGITUDE</li>
                    <li>STATE</li>
                    <li>DISCOVERY_DATE</li>
                    <li>DISCOVERY_DOY - Day of year on which the fire was discovered or confirmed to exist.</li>
                    <li>CONT_DATE</li>
                    <li>CONT_DOY - Day of year on which the fire was declared contained or otherwise controlled.</li>
                </ul>
            </div>
            <p style={paragraphStyle}>
                Add more content here.
            </p>
            <h2 style={subheadingStyle}>The Model:</h2>
            <div>
                <p>

                </p>
            </div>
        </div>
    );
}

export default FireDataUS;
