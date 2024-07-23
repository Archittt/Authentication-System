import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="text-center">
    <h1>Welcome to the Authentication System</h1>
    <p>
      <Link to="/login" className="btn btn-primary m-2">Login</Link>
      <Link to="/register" className="btn btn-secondary m-2">Register</Link>
    </p>
  </div>
);

export default Home;