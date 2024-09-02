import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser.js'; // Import the custom hook

const Navbar = () => {
  const user = useUser(); // Fetch user data using the hook

  return (
    <nav className="bg-blue-700 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">🛝CTF Playground</Link>
        <div className="flex items-center">
          {user ? (
            <p className="mr-4">Welcome, {user.username}</p> // Display username
          ) : (
            <Link to="/login" className="text-lg mr-6">Login</Link> // Added margin-right to 'Login'
          )}
          <Link to="/leaderboard" className="text-xl font-bold">🏆Leaderboard</Link> // Adjusted font size
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
