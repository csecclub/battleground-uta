import React, { useState } from 'react';

const SwapChallenge = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate a reverse engineering logic check
        const expectedAnswer = 'hello'; // This should be the result of some kind of decoding

        if (input === expectedAnswer) {
            setMessage('Success! You decoded the underlying logic.');
        } else {
            setMessage('Incorrect. Try decoding the logic again.');
        }
    };

    const codeSnippet = `# reverse_challenge.py

def swap_letters(input_string):
    return ''.join([chr(ord(char) + 1) for char in input_string])

encoded_message = swap_letters("gdkkn")
print(f"The encoded message is: {encoded_message}")
`;

    const downloadCode = () => {
        const element = document.createElement("a");
        const file = new Blob([codeSnippet], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "reverse_challenge.py";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Swap: Reverse Engineering Challenge</h1>
            <p className="mb-4">
                In this challenge, you'll need to decode the given code to find the correct answer. Try to understand what the code is doing and figure out the hidden message.
            </p>
            <pre className="bg-gray-100 p-3 rounded mb-4">
                {codeSnippet}
            </pre>
            <button onClick={downloadCode} className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4">
                Download Code
            </button>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Decoded Message: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter decoded message" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default SwapChallenge;
