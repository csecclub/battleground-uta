// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-700 p-4 text-white">
        <div className="container mx-auto">
            <Link to="/" className="text-2xl font-bold">🛝CTF Playground</Link>
            <br></br>
            <Link to="/leaderboard" className="text-1xl font-bold">🏆Leaderboard</Link>
        </div>
    </nav>
);

export default Navbar;
