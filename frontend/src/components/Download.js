import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Download = ({ token }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/files', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        setFiles(response.data.files);
      } catch (error) {
        alert('Error fetching files: ' + error.response.data.message);
      }
    };

    fetchFiles();
  }, [token]);

  const handleDownload = async (fileName) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/files/download/${fileName}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      alert('Error downloading file: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Download Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file}>
            {file} <button onClick={() => handleDownload(file)}>Download</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Download;