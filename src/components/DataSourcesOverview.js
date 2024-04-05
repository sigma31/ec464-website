import React from 'react';

const DataSourcesOverview = () => {
  const tableStyle = `
    body {
        font-family: Arial, sans-serif;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    th {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #f5f5f5;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tableStyle }} />
      <h1>Data Sources Overview</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Format</th>
            <th>Coverage</th>
            <th>Accessibility</th>
            <th>Notes</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FireNet Datasets</td>
            <td>Image</td>
            <td>jpg</td>
            <td></td>
            <td>Open Access</td>
            <td>Used in FireNet model</td>
            <td><a href="https://drive.google.com/drive/folders/1HznoBF...">Visit</a></td>
          </tr>
          <tr>
            <td>FIRE Dataset</td>
            <td>Image</td>
            <td>png</td>
            <td></td>
            <td>Open Access</td>
            <td></td>
            <td><a href="https://www.kaggle.com/datasets/phylake1337/fi...">Visit</a></td>
          </tr>
          <tr>
            <td>Smoke Detection Dataset</td>
            <td>IoT Sensor Data (Temperature, Humidity, TVOC, etc.)</td>
            <td>csv</td>
            <td>Diverse environments (indoor, outdoor, various conditions)</td>
            <td>Open Access</td>
            <td></td>
            <td><a href="https://www.kaggle.com/datasets/deepcontractor...">Visit</a></td>
          </tr>
          <tr>
            <td>Past Fire Data</td>
            <td>Spatial wildfire occurrence data for the United States</td>
            <td>sqlite</td>
            <td>United States, 1992-2020</td>
            <td>Open Access</td>
            <td></td>
            <td><a href="https://www.fs.usda.gov/rds/archive/catalog/RD...">Visit</a></td>
          </tr>
          <tr>
            <td>Forest Fires</td>
            <td>Meteorological Data, Environmental Data</td>
            <td>csv</td>
            <td>Montesinho park in Portugal</td>
            <td>Open Access</td>
            <td></td>
            <td><a href="https://archive.ics.uci.edu/dataset/162/forest...">Visit</a></td>
          </tr>
          <tr>
            <td>Fire Detection From Images</td>
            <td>Image, Video</td>
            <td>PNGs, Videos</td>
            <td></td>
            <td>MIT License</td>
            <td>Repository containing multiple datasets</td>
            <td><a href="https://github.com/robmarkcole/fire-detection-from-images">Visit</a></td>
          </tr>
          <tr>
            <td>The Wildfire Dataset</td>
            <td>Image</td>
            <td>jpg</td>
            <td>Diverse outdoor environment, fire and smoke</td>
            <td>Open Access</td>
            <td>From study: https://www.mdpi.com/1999-4907/14/9/1697</td>
            <td><a href="https://www.kaggle.com/code/philopateergeorgei/85-accuracy/input">Visit</a></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DataSourcesOverview;
