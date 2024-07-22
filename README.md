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
- **`routes/`**: Contains route definitions.
  - **`fileRoutes.js`**: Routes for file upload and download.
  - **`userRoutes.js`**: Routes for user registration and login.
- **`controllers/`**: Contains controller logic for handling requests.
  - **`fileController.js`**: Handles file upload and download logic.
  - **`userController.js`**: Handles user registration and login logic.
- **`middleware/`**: Contains middleware functions.
  - **`authMiddleware.js`**: Authenticates requests using JWT.
- **`models/`**: Mongoose schemas for MongoDB.
  - **`User.js`**: User schema.
  - **`Token.js`**: Token schema.
- **`uploads/`**: Directory where uploaded files are stored.

### Frontend

- **`src/App.js`**: Main application component with routing.
- **`src/components/`**: Contains React components.
  - **`Login.js`**: Login form component.
  - **`Register.js`**: Registration form component.
  - **`Upload.js`**: File upload form component.
  - **`Download.js`**: File download component.
- **`src/index.js`**: Entry point of the React application.

### Prerequisites

- Node.js
- MongoDB
- npm or yarn
