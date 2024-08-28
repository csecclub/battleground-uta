import React from 'react';
import ChallengeCard from '../components/ChallengeCard';

const PlaygroundPage = () => {
    const categories = [
        { title: 'Welcome', description: 'Challenges that test basic cybersecurity skills.', path: '/challenge/general-skills/1' },
        { title: 'Swap', description: 'Decode and understand the underlying code.', path: '/challenge/reverse-engineering/1' },
        { title: 'File Manager', description: 'Find vulnerabilities in binary applications.', path: '/challenge/binary-exploitation/1' },
        { title: 'Where\'s Waldo?', description: 'Analyze digital evidence to solve the challenge.', path: '/challenge/forensics/1' },
        { title: 'Interwebs', description: 'Identify and exploit vulnerabilities in web applications.', path: '/challenge/web-exploitation/1' },
        { title: 'You\'ve been hacked!', description: 'Exploit systems via command injection vulnerabilities.', path: '/challenge/command-injection/1' },
        { title: 'Spot the Difference!', description: 'Find hidden information within files.', path: '/challenge/steganography/1' },
        { title: 'Scrambled Eggs', description: 'Test your cryptography skills', path: '/challenge/crypto/1' },
        { title: 'Syringe', description: 'Learn about SQL vulnerabilities', path: '/challenge/sql/1' }
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
