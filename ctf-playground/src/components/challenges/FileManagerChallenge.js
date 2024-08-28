import React, { useState } from 'react';

const FileManagerChallenge = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a logic check for the expected answer
        const expectedAnswer = '3xploit_$uccess'; // Replace with the actual result of the exploit

        if (input === expectedAnswer) {
            setMessage('Congratulations! You successfully exploited the binary.');
        } else {
            setMessage('Incorrect result. Please analyze the binary and try again.');
        }
    };

    const downloadBinary = () => {
        const element = document.createElement("a");
        element.href = "/file_manager.exe"; // Path to the binary file in the public directory
        element.download = "file_manager.exe";
        document.body.appendChild(element);
        element.click();
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">File Manager: Binary Exploitation Challenge</h1>
            <p className="mb-4">
                In this challenge, you need to find vulnerabilities in the provided binary application. Analyze the binary file to understand its behavior and find an exploit to gain control.
            </p>
            <button onClick={downloadBinary} className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4">
                Download Binary
            </button>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Exploit Result: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter result of your exploit" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default FileManagerChallenge;
