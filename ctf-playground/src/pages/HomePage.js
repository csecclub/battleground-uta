import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen bg-blue-500 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">Welcome to CTF Playground</h1>
            <p className="mt-4">Relax, connect, and enhance your cybersecurity skills!</p>
            <p className="mt-4">Sign up or log in to save completed challenges!</p>
            <div className="mt-6">
                <Link 
                    to="/playground" 
                    className="block mb-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded text-center"
                >
                    Start Playing
                </Link>
                <Link 
                    to="/login" 
                    className="block mb-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded text-center"
                >
                    Login
                </Link>
                <Link 
                    to="/signup" 
                    className="block mb-4 px-6 py-3 bg-white text-blue-500 font-semibold rounded text-center"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
