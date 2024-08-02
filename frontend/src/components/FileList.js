import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/files', {
          headers: {
            'Authorization': token,
          },
        });
        setFiles(response.data.files);
      } catch (err) {
        setError('Error fetching files: ' + (err.response?.data?.message || err.message));
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (filename) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:5000/api/files/download/${filename}`, {
        headers: {
          'Authorization': token,
        },
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError('Error downloading file: ' + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div>
      <h1>Files</h1>
      {error && <p>{error}</p>}
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

export default FileList;
