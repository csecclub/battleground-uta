import { useState, useEffect } from 'react';
import { db } from '../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore/lite';

const useCTFQuestion = (questionId) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const docRef = doc(db, 'ctf_questions', questionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setQuestion(docSnap.data());
        } else {
          setError('Question not found');
        }
      } catch (err) {
        setError('Error fetching question: ' + err.message);
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
