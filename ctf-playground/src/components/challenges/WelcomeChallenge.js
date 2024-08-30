import React, { useState } from 'react';

const WelcomeChallenge = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated correct answer
        const expectedAnswer = 'cybersecurity101';

        if (input.trim().toLowerCase() === expectedAnswer.toLowerCase()) {
            setMessage('Congratulations! You solved the challenge.');
        } else {
            setMessage('Incorrect. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Welcome: General Skills Challenge</h1>
            <p className="mb-4">
                In this challenge, you need to find the answer contained in a text file. 
                Download the file from the link below, find the answer, and submit it below.
            </p>
            <a href="/welcome.txt" download className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4 inline-block">
                Download File
            </a>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Your Answer: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your answer here" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default WelcomeChallenge;