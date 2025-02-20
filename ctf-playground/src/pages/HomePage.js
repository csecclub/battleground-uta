import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [flag, setFlag] = useState(null);

    useEffect(() => {
        // Fetch the flag.js file
        const script = document.createElement('script');
        script.src = '/flag.js';
        script.async = true;
        script.onload = () => {
            if (window.flag) {
                setFlag(window.flag);
            }
        };
        document.body.appendChild(script);

        // Clean up
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex flex-col items-center justify-center overflow-hidden">
            {/* PS1 Logo */}
            <div
                className="w-48 h-48 mb-5 bg-no-repeat bg-contain animate-pulse"
                style={{ backgroundImage: 'url("cyberkitty.png")' }}
            ></div>

            {/* PS1-inspired Text */}
            <h1 className="text-4xl text-white font-bold mb-6 drop-shadow-lg animate-pulse font-ps1">CTF Playground</h1>

            {/* Subheaders */}
            <p className="mt-4 text-xl text-gray-300 font-ps1">CTF Challanges to make your brain hurt!</p>
            <p className="mt-4 text-xl text-gray-300 font-ps1">Sign up or log in to save completed challenges!</p>
            
            {/* Button */}
            <div className="mt-8 font-ps1 text-xxl">
                <Link 
                    to="/login" 
                    className="block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full text-center hover:bg-blue-700 hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                    Start Solving
                </Link>
            </div>

            {/* Hidden Flag */}
            {flag && (
                <div style={{ display: 'none' }}>
                    {/* This will be visible in the network tab but not on the page */}
                    <p>{flag}</p>
                </div>
            )}

        </div>
    )
};

export default HomePage;
