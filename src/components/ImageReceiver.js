import React, { useState } from 'react';
import axios from 'axios';

const ImageReceiver = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [uploadStatus, setUploadStatus] = useState('');

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setImageUrl(response.data.imageUrl);
      setUploadStatus('Image uploaded successfully');
    } catch (error) {
      setUploadStatus('Error uploading image');
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {uploadStatus && <p>{uploadStatus}</p>}
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" />
        </div>
      )}
    </div>
    </div>
  );
};

export default ImageReceiver;
