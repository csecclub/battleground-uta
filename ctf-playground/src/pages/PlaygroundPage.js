import React from 'react';
import ChallengeCard from '../components/ChallengeCard';

const PlaygroundPage = () => {
    const categories = [
        { title: 'Cryptography', description: 'Test your cryptography skills', path: '/challenge/crypto/1' },
        { title: 'SQL Injection', description: 'Learn about SQL vulnerabilities', path: '/challenge/sql/1' },
        // Add more categories as needed
    ];

    return (
        <div className="bg-blue-100 min-h-screen p-10">
            <h2 className="text-3xl font-bold mb-8">Choose a Challenge</h2>
            <div className="grid grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <ChallengeCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default PlaygroundPage;
