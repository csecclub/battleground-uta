import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="h-screen bg-black flex flex-col items-center justify-center text-green-500">
            {/* Blinking header */}
            <h1 className="text-6xl font-bold animate-pulse">
                YOU HAVE BEEN HACKED!
            </h1>
            {/* Subheaders for everything else */}
            <p className="mt-4 text-2xl">
                Welcome to CTF Playground.
            </p>
            <p className="mt-4 text-xl">
                Relax, connect, and enhance your cybersecurity skills!
            </p>
            <p className="mt-4 text-xl">
                Sign up or log in to save completed challenges!
            </p>
            <div className="mt-6">
                <Link 
                    to="/login" 
                    className="block mb-4 px-6 py-3 bg-green-500 text-black font-semibold rounded text-center"
                >
                    Start Playing
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
