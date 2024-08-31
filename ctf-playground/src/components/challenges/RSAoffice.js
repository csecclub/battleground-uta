import React, { useState } from 'react';
import useCTFQuestion from '../../hooks/useCTFQuestion';

const RSAoffice = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const { question } = useCTFQuestion('RSAoffice');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question && input.trim().toLowerCase() === question.answer.toLowerCase()) {
            setMessage('Congratulations! You solved the challenge.');
        } else {
            setMessage('Incorrect. Please try again.');
        }
    };

    const codeSnippet = `
    N = 8234068070466650285275956023163898821840419590350117824320667309729190464092242341807745970929113782383461744360702863331476962297609212587826653479287113 

    c = 3791670529475564751465692977267876453116401932531846628052093969359538942289217010221957580419519457520565410193816776418378434473737650887810715878080537 
    
    d = 2870496867509217069254005634393176318455041676926455924626612234697694651554958377003773595844782731884474885614410732303562014514799446918929407264133741 


`;

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-4">RSA Office Keys </h1>
            <p className="mb-4">
                These three numbers from my office are suspicious.
                <br></br>
                I found N and c scribbled on sticky notes at Bob's desk, and d at Alice's desk. 
                <br></br>
                Are my coworkers hiding something from me?
                <br></br> 
                (only submit what's in the brackets)
            </p>
            <pre className="bg-gray-100 p-3 rounded mb-4">
                {codeSnippet}
            </pre>
            <form onSubmit={handleSubmit}>
                <label className="block mb-2">
                    Hidden Logic Result: <input type="text" className="border rounded p-2 w-full" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter decoded result" />
                </label>
                <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600">
                    Submit
                </button>
            </form>
            <p className="mt-4 text-red-500">{message}</p>
        </div>
    );
};

export default RSAoffice;
