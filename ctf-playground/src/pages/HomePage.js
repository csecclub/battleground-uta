import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen bg-blue-500 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold">Welcome to CTF Playground</h1>
            <p className="mt-4">Relax, connect, and enhance your cybersecurity skills!</p>
            <Link to="/playground" className="mt-6 px-6 py-3 bg-white text-blue-500 font-semibold rounded">
                Start Playing
            </Link>
        </div>
    );
};

export default HomePage;
