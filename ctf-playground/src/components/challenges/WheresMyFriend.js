import React, { useState } from 'react';

const WheresMyFriend = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulated correct answer
        const expectedAnswer = 'Struga, North Macedonia';

        if (input.trim().toLowerCase() === expectedAnswer.toLowerCase()) {
            setMessage('Congratulations! You solved the challenge.');
        } else {
            setMessage('Incorrect. Please try again.');
        }
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">Where's my friend</h1>
            <p className="mb-4">
            My friend sent me a photo of him on vacation, I've asked him where he's at but he wont tell me! <br></br><br></br> Can you help me find out where he is based on the photo? <br></br> format: City, Country

            </p>

            <img src="/whereAmI.jpeg" alt="whereami" width={280} />

            <a href="/whereAmI.jpeg" download className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4 inline-block">
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

export default WheresMyFriend;
