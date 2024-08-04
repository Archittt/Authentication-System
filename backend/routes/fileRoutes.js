const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadFile, downloadFile, listFiles} = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Routes
router.post('/upload', authMiddleware, upload.single('file'), uploadFile);
router.get('/download/:filename', authMiddleware, downloadFile);
router.get('/', authMiddleware, listFiles);

module.exports = router;
