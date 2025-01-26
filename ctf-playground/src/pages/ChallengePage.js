import React from 'react';
import { useParams } from 'react-router-dom';
import SyringeChallenge from '../components/challenges/SyringeChallenge'; // Import the new challenge
import SwapChallenge from '../components/challenges/SwapChallenge'; // Import the new challenge
import FileManagerChallenge from '../components/challenges/FileManagerChallenge'; // Import the new challenge
import StegChallenge from '../components/challenges/StegChallenge';
import HiddenBit from '../components/challenges/HiddenBit';
import CryptoChallenge from '../components/challenges/CryptoChallenge';
import WelcomeChallenge from '../components/challenges/WelcomeChallenge';
import WebExploitationChallenge from '../components/challenges/WebExploitationChallenge';
import CommandInjectionChallenge from '../components/challenges/CommandInjectionChallenge';
import ThePasswordIsPasswordChallenge from '../components/challenges/ThePasswordIsPasswordChallenge';
import WheresMyFriend from '../components/challenges/WheresMyFriend';
import AirportCriminal from '../components/challenges/AirportCriminal';
import RSAschoolKeys from '../components/challenges/RSAschoolKeys';
import RSAoffice from '../components/challenges/RSAoffice';
import HexProtect from '../components/challenges/HexProtect';
import Encrypception from '../components/challenges/Encrypception';
import RSAhackuta from '../components/challenges/RSAhackuta';
import VulnerableProgram from '../components/challenges/VulnerableProgram';
import PasswordInput from '../components/challenges/PasswordInput';
import Hackercat from '../components/challenges/Hackercat';
import ConvolutedTextHunt from '../components/challenges/ConvolutedTextHunt';
import Meowers from '../components/challenges/Meowers';
import AirplaneFriend from '../components/challenges/AirplaneFriend';
import Trynfindme from '../components/challenges/Trynfindme';


// Challenge lookup object
const challenges = {
    'sql': { '1': SyringeChallenge  },
    'reverse-engineering': { '1': SwapChallenge,  },
    'binary-exploitation': { '1': FileManagerChallenge,},
    'steganography': { '1': Encrypception, '2': StegChallenge, '3': HiddenBit },
    'crypto': { '1': RSAhackuta, '2': RSAschoolKeys, '3': RSAoffice, '4': HexProtect, '5': CryptoChallenge, },
    'general-skills': { '1': WelcomeChallenge },
    'web-exploitation': { '1': WebExploitationChallenge, },
    'pwn': {'1': VulnerableProgram, '2': PasswordInput },
    'command-injection': { '1': CommandInjectionChallenge, },
    'forensics': { '1': Hackercat, '2': ConvolutedTextHunt, '3': Meowers, '4': ThePasswordIsPasswordChallenge,  },
    'osint': { '1': AirplaneFriend, '2': Trynfindme, '3': AirportCriminal, '4': WheresMyFriend },
};
  
const ChallengePage = () => {
const { category, id } = useParams();

// Get the challenge component based on the category and id
const ChallengeComponent = challenges[category]?.[id];

return (
    <div className="h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white p-8">
    <div className="container mx-auto bg-black bg-opacity-70 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center drop-shadow-lg">
        {category ? category.replace(/-/g, ' ').toUpperCase() : 'CHALLENGE'} - {id}
        </h2>
        {ChallengeComponent ? (
        <ChallengeComponent />
        ) : (
        <p className="text-center text-xl">Challenge not found.</p>
        )}
    </div>
    </div>
);
};

export default ChallengePage;
  
