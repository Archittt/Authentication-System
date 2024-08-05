# Authentication System

This project is a complete authentication system with user registration, login, and file upload and download capabilities. Built with Node.js, Express, MongoDB for the backend, and React for the frontend, it also employs JWT for secure token-based authentication.

## Features

- User Registration
- User Login
- JWT Authentication
- File Upload
- File Download
- Protected Routes

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Bcrypt
- **Frontend**: React, Axios, Bootstrap
- **File Handling**: Multer

## Project Structure

### Backend

- **`server.js`**: Entry point of the backend server.
- **`config/`**: Contains configuration files.
  - **`db.js`**: MongoDB connection configuration.
- **`routes/`**: Contains route definitions.
  - **`authRoutes.js`**: Routes for user registration and login.
  - **`fileRoutes.js`**: Routes for file upload and download.
- **`controllers/`**: Contains controller logic for handling requests.
  - **`authController.js`**: Handles user registration and login logic.
  - **`fileController.js`**: Handles file upload and download logic.
- **`middleware/`**: Contains middleware functions.
  - **`authMiddleware.js`**: Authenticates requests using JWT.
- **`models/`**: Mongoose schemas for MongoDB.
  - **`User.js`**: User schema.
  - **`Token.js`**: Token schema.
- **`uploads/`**: Directory where uploaded files are stored.

### Frontend

- **`src/App.js`**: Main application component with routing.
- **`src/components/`**: Contains React components.
  - **`Home.js`**: Home page component with navigation links.
  - **`Login.js`**: Login form component.
  - **`Register.js`**: Registration form component.
  - **`Dashboard.js`**: User dashboard with file upload and download functionality.
  - **`Upload.js`**: File upload form component.
  - **`Download.js`**: File download component.
  - **`FileList.js`**: List down all the files in the uploads directory.
- **`src/index.js`**: Entry point of the React application.

## Usage

1. Register a new user via the registration page.
2. Log in using the registered credentials.
3. Access the dashboard to upload and download files.

## Contributing

Feel free to fork the repository and submit pull requests. For any issues or feature requests, please open an issue on GitHub.
