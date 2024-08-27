import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ChallengePage = () => {
    const { category, id } = useParams();

    return (
        <div className="min-h-screen p-10 bg-blue-100">
            <h2 className="text-3xl font-bold mb-4">Challenge: {category}</h2>
            <p className="mb-8">This is challenge #{id}. Solve it below:</p>
            <input type="text" className="p-2 rounded border" placeholder="Enter your answer..." />
            <div className="mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
            <div className="mt-8">
                <Link to="/playground" className="text-blue-500">Back to Playground</Link>
            </div>
        </div>
    );
};

export default ChallengePage;
