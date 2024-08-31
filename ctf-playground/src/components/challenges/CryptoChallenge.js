import React, { useState } from 'react';
import useCTFQuestion from '../../hooks/useCTFQuestion';

const CryptoChallenge = () => {
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
            <h1 className="text-2xl font-bold mb-4">Scrambled Eggs: Cryptography Challenge</h1>
            <p className="mb-4">
                In this challenge, you need to decrypt the following scrambled message. Use your cryptography skills to find the hidden meaning.
            </p>
            <p className="bg-gray-100 text-lg p-4 mb-4 rounded">
                Encrypted Message: <strong>246283004520049788012437</strong>
            </p>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Decrypted Message: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your decrypted message here" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default CryptoChallenge;
