import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/files/upload', formData, {
        headers: { 'Authorization': token, 'Content-Type': 'multipart/form-data' }
      });
      alert('File uploaded successfully');
    } catch (err) {
      setError('File upload failed: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleViewFiles = () => {
    navigate('/files');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <form onSubmit={handleUpload}>
        <div>
          <input type="file" onChange={handleFileChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
      <button onClick={handleViewFiles}>View Files</button>
      <button onClick={handleLogout}>Logout</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Dashboard;
