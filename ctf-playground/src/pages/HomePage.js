import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen bg-blue-500 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">Welcome to CTF Playground</h1>
            <p className="mt-4">Relax, connect, and enhance your cybersecurity skills!</p>
            <p className="mt-4">Login/Signup to save completed challanges!</p>
            <div className="mt-6">
                <Link to="/playground" className="block mb-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded">
                    Start Playing
                </Link>
                <Link to="/login" className="block mb-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded">
                    Login
                </Link>
                <Link to="/signup" className="block px-6 py-3 bg-white text-blue-500 font-semibold rounded">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
