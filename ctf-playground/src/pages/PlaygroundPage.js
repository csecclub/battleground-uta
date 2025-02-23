import React, { useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';

const PlaygroundPage = () => {
    const categories = [
        // General Skills
        { title: 'Welcome', category: 'General Skills', difficulty: 'Medium', description: 'Challenges that test basic cybersecurity skills.', path: '/challenge/general-skills/1' },
        // SQL injection
        { title: 'Syringe', category: 'SQL Injection', difficulty: 'Easy', description: 'Learn about SQL vulnerabilities', path: '/challenge/sql/1' },
        // Reverse engineering
        { title: 'Swap', category: 'Reverse Engineering', difficulty: 'Medium', description: 'Decode and understand the underlying code.', path: '/challenge/reverse-engineering/1' },
        // Binary exploitation
        { title: 'File Manager', category: 'Binary Exploitation', difficulty: 'Medium', description: 'Find vulnerabilities in binary applications.', path: '/challenge/binary-exploitation/1' },
        // Steganography
        { title: 'Encrypception', category: 'Steganography', difficulty: 'Medium', description: 'Theres this really really long message, and it looks weird...', path: '/challenge/steganography/1' },
        { title: 'Where\'s Waldo?', category: 'Steganography', difficulty: 'Easy', description: 'Analyze digital evidence to solve the challenge.', path: '/challenge/steganography/2' },
        { title: 'Hidden Bit',  category: 'Steganography', difficulty: 'Medium', description: 'Find out what\'s going on with the attached file.', path: '/challenge/steganography/3' },
        // Cryptography
        { title: 'Scrambled Eggs', category: 'Cryptography', difficulty: 'Easy', description: 'Test your cryptography skills', path: '/challenge/crypto/1' },
        { title: 'Hex Protect', category: 'Cryptography', difficulty: 'Easy', description: 'looks like my friend thought using multiple crypto algorithms meant he\'d be safer!', path: '/challenge/crypto/2' },
        { title: 'RSA Office keys', category: 'Cryptography', difficulty: 'Easy', description: 'These three numbers from my office are suspicious.', path: '/challenge/crypto/3' },
        { title: 'RSA School keys', category: 'Cryptography', difficulty: 'Medium', description: 'These numbers from the school library are raising eyebrows.', path: '/challenge/crypto/4' },
        { title: 'RSAhackuta', category: 'Cryptography', difficulty: 'Hard', description: 'We found these odd numbers scribbled in one of the rooms in the ERB...', path: '/challenge/crypto/5' },
        // Web Exploitation
        { title: 'Interwebs', category: 'Web Exploitation', difficulty: 'Medium', description: 'Identify and exploit vulnerabilities in web applications.', path: '/challenge/web-exploitation/1' },
        // Pwn
        { title: 'VulnerableProgram', category: 'Pwn', difficulty: 'Easy', description: 'Youve been given a vulnerable .exe program. Can you figure out how to exploit it...', path: '/challenge/pwn/1' },
        { title: 'PasswordInput', category: 'Pwn', difficulty: 'Hard', description: 'Youve been given an executable that asks for a password to reveal the hidden flag. However, the password is a closely guarded secret...', path: '/challenge/pwn/2' },
        // Command injection
        { title: 'You\'ve been hacked!', category: 'Command Injection', difficulty: 'Medium', description: 'Exploit systems via command injection vulnerabilities.', path: '/challenge/command-injection/1' },
        // Forensics
        { title: 'Hackercats', category: 'Forensics', difficulty: 'Medium', description: 'There seems to be more to this image than meets the eye...', path: '/challenge/forensics/1' },
        { title: 'ConvolutedTextHunt', category: 'Forensics', difficulty: 'Medium', description: 'A long, convoluted text file hides a valuable flag...', path: '/challenge/forensics/2' },
        { title: 'Meowers', category: 'Forensics', difficulty: 'Hard', description: '  In this challenge, youll need to extract a hidden message...', path: '/challenge/forensics/3' },
        { title: 'Spot the Difference!', category: 'Forensics', difficulty: 'Easy', description: 'Find hidden information within files.', path: '/challenge/forensics/4' },
        // OSINT
        { title: 'Trynfindme', category: 'OSINT', difficulty: 'Hard', description: 'theres a contest to find out whats the name of that highlighted building...', path: '/challenge/osint/2' },
        { title: 'Airplane Friend', category: 'OSINT', difficulty: 'Medium', description: 'My friend is testing my skills again...', path: '/challenge/osint/1' },
        { title: 'Airport-Criminal', category: 'OSINT', difficulty: 'Easy', description: 'The police found a leaked photo of the man on the run', path: '/challenge/osint/3'},
        { title: 'Where is my friend?', category: 'OSINT', difficulty: 'Easy', description: 'Can you help find my friend?', path: '/challenge/osint/4'},


    ];

  
    // State for search and filtering
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Filtered and searched challenges
    const filteredCategories = categories.filter((challenge) => {
        const matchesCategory = selectedCategory === 'All' || challenge.category === selectedCategory;
        const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    // Unique categories for filtering
    const uniqueCategories = ['All', ...new Set(categories.map((category) => category.category))];

    return (
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-black min-h-screen p-10 text-white">
            <h2 className="text-5xl font-bold mb-12 text-center drop-shadow-lg">CTF Playground!</h2>

            {/* Search and Filter Controls */}
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <input
                    type="text"
                    placeholder="Search challenges..."
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                    className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            {/* Challenge Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.map((category, index) => (
                    <ChallengeCard key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default PlaygroundPage;
