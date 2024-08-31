// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-blue-700 p-4 text-white">
        <div className="container mx-auto">
            <Link to="/playground" className='text-2xl font-bold'> 🏠 </Link>
            <Link to="/" className="text-2xl font-bold">CTF Playground</Link>
        </div>
    </nav>
);

export default Navbar;
