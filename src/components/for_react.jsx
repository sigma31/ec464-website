import React from 'react';

const DataSourceOverview = () => {

  const dataSources = [
    {
        name: "FireNet Datasets",
        type: "Image",
        format: "jpg",
        coverage: "",
        accessibility: "Open Access",
        notes: "Used in FireNet model",
        url: "https://drive.google.com/drive/folders/1HznoBFEd6yjaLFlSmkUGARwCUzzG4whq"
      },
      {
        name: "FIRE Dataset",
        type: "Image",
        format: "png",
        coverage: "",
        accessibility: "Open Access",
        notes: "",
        url: "https://www.kaggle.com/datasets/phylake1337/fire-dataset"
      },
      {
        name: "Smoke Detection Dataset",
        type: "IoT Sensor Data (Temperature, Humidity, TVOC, eCO2, H2, Ethanol, Pressure, PM1.0)",
        format: "csv",
        coverage: "Diverse environments (indoor, outdoor, various fire sources) Timestamp UTC seconds 1654712187 ~ 1655130051",
        accessibility: "Open Access",
        notes: "",
        url: "https://www.kaggle.com/datasets/deepcontractor/smoke-detection-dataset?resource=download"
      },
      {
        name: "Past Fire Data",
        type: "Spatial wildfire occurrence data for the United States",
        format: "sqlite",
        coverage: "United States, 1992-2020",
        accessibility: "Open Access",
        notes: "",
        url: "https://www.fs.usda.gov/rds/archive/catalog/RDS-2013-0009.6"
      },
      {
        name: "Forest Fires",
        type: "Meteorological Data, Environmental Data",
        format: "csv",
        coverage: "Montesinho park in Portugal",
        accessibility: "Open Access",
        notes: "",
        url: "https://archive.ics.uci.edu/dataset/162/forest+fires"
      },
      {
        name: "Fire Detection From Images",
        type: "Image, Video",
        format: "PNGs, Videos",
        coverage: "",
        accessibility: "MIT License",
        notes: "Repository containing multiple datasets",
        url: "https://github.com/robmarkcole/fire-detection-from-images"
      },
      {
        name: "The Wildfire Dataset",
        type: "Image",
        format: "jpg",
        coverage: "Diverse outdoor environment, fire and smoke",
        accessibility: "Open Access",
        notes: "From study: https://www.mdpi.com/1999-4907/14/9/1697",
        url: "https://www.kaggle.com/code/philopateergeorgei/85-accuracy/input"
      }
  ];

  return (
    <div>
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
          {dataSources.map((source) => (
            <tr key={source.name}>
              <td>{source.name}</td>
              <td>{source.type}</td>
              <td>{source.format}</td>
              <td>{source.coverage}</td>
              <td>{source.accessibility}</td>
              <td>{source.notes}</td>
              <td><a href={source.url}>Visit</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataSourceOverview;
