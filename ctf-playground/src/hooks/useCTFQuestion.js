// src/hooks/useCTFQuestion.js
import { useState, useEffect } from 'react';
import { db } from '../firebaseconfig';
import { collection, getDocs, query, where } from 'firebase/firestore/lite';

const useCTFQuestion = (questionId) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const q = query(collection(db, 'ctf_questions'), where('id', '==', questionId));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setQuestion(querySnapshot.docs[0].data());
        } else {
          setError('Question not found');
        }
      } catch (err) {
        setError('Error fetching question');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]);

  return { question, loading, error };
};

export default useCTFQuestion;