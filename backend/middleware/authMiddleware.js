const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification error:', err.message); // Added logging
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    console.log('Token verified, user:', decoded); // Added logging
    next();
  });
};