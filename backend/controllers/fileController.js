const path = require('path');
const fs = require('fs');

exports.uploadFile = (req, res) => {
  if (!req.file) {
    console.error('No file uploaded'); // Added logging
    return res.status(400).json({ message: 'No file uploaded' });
  }
  console.log('File uploaded:', req.file); // Added logging
  res.status(200).json({ message: 'File uploaded successfully', file: req.file });
};

exports.downloadFile = (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename);

  if (fs.existsSync(filePath)) {
    console.log('File found:', filename); // Added logging
    res.download(filePath);
  } else {
    console.error('File not found:', filename); // Added logging
    res.status(404).json({ message: 'File not found' });
  }
};

exports.listFiles = (req, res) => {
  const directoryPath = path.join(__dirname, '../uploads');
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ message: 'Unable to scan files' });
    }
    res.status(200).json({ files });
  });
};
