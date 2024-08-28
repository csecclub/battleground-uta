import React, { useState } from 'react';

const ForensicsChallenge = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Expected hidden message from the analysis of the evidence file
        const expectedAnswer = "F0und W4ldo!";

        if (input === expectedAnswer) {
            setMessage('Congratulations! You successfully found Waldo in the evidence.');
        } else {
            setMessage('Incorrect result. Analyze the evidence file carefully and try again.');
        }
    };

    const downloadEvidence = () => {
        const element = document.createElement("a");
        element.href = "/evidence.png"; // Path to the evidence file in the public directory
        element.download = "evidence.png";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Where's Waldo?: Forensics Challenge</h1>
            <p className="mb-4">
                In this challenge, you need to analyze the provided evidence file to uncover hidden information. Download the evidence file and use forensic tools to find the clues.
            </p>
            <button onClick={downloadEvidence} className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4">
                Download Evidence
            </button>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    What did you find?: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter your findings here" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default ForensicsChallenge;
