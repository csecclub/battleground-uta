import React, { useState } from 'react';
import useCTFQuestion from '../../hooks/useCTFQuestion';

const AirportCriminal = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const { question } = useCTFQuestion('AirportCriminal');

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
            <h1 className="text-2xl font-bold mb-4">Airport-Criminal</h1>
            <p className="mb-4">
                The police found a leaked photo of the man on the run, but they can't quiet narrow down which airport he is in.
                <br></br>
                Find out where he is.
                <br></br>
                (Airport CODE(only in US): e.g. DFW)

            </p>

            <img src="/airport.jpeg" alt="whereami" width={280} />

            <a href="/airport.jpeg" download className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600 mb-4 inline-block">
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

export default AirportCriminal;
