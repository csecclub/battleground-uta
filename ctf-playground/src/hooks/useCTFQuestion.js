import { useState, useEffect } from 'react';
import { db } from '../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

const useCTFQuestion = (questionId) => {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        console.log('Fetching question with ID:', questionId);
        const docRef = doc(db, 'ctf_questions', questionId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log('Question data:', data);
          setQuestion(data);
        } else {
          console.log('Question not found');
          setError('Question not found');
        }
      } catch (err) {
        console.error('Error fetching question:', err);
        setError('Error fetching question: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]);

  return { question, loading, error };
};

export default useCTFQuestion;