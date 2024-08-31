import React, { useState } from 'react';
import useCTFQuestion from '../../hooks/useCTFQuestion';

const HiddenBit = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const { question } = useCTFQuestion('HiddenBit');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question && input.trim().toLowerCase() === question.answer.toLowerCase()) {
            setMessage('Congratulations! You solved the challenge.');
        } else {
            setMessage('Incorrect. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Hidden Bit</h1>
            <p className="mb-4">
                Find out what's going on with the attached file. <br></br> Hint: You can secretly hide pictures inside the 'little details' of other pictures. Look closely at those tiny details to solve the CTF challenge!
            </p>
            <a href="/sus.png" download className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4 inline-block">
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

export default HiddenBit;
