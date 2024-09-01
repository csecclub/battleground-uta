import { useState, useEffect } from 'react';
import { db, auth } from '../firebaseconfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const useCTFQuestion = (questionId) => {
  const [question, setQuestion] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          throw new Error('User not authenticated');
        }

        // Fetch question data
        const questionRef = doc(db, 'ctf_questions', questionId);
        const questionSnap = await getDoc(questionRef);

        if (questionSnap.exists()) {
          setQuestion(questionSnap.data());
        } else {
          throw new Error('Question not found');
        }

        // Check if user has completed this question
        const progressRef = doc(db, 'user_progress', user.uid);
        const progressSnap = await getDoc(progressRef);

        if (progressSnap.exists()) {
          const userData = progressSnap.data();
          setCompleted(userData.completedQuestions?.includes(questionId) || false);
        }

      } catch (err) {
        console.error('Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestion();
  }, [questionId]);

  const markAsCompleted = async () => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error('User not authenticated');

      const progressRef = doc(db, 'users', user.uid);
      const progressSnap = await getDoc(progressRef);

      if (progressSnap.exists()) {
        const userData = progressSnap.data();
        const completedQuestions = userData.completedQuestions || [];
        if (!completedQuestions.includes(questionId)) {
          await setDoc(progressRef, {
            ...userData,
            completedQuestions: [...completedQuestions, questionId],
            score: (userData.score || 0) + (question.points || 0)
          }, { merge: true });
        }
      } else {
        await setDoc(progressRef, {
          completedQuestions: [questionId],
          score: question.points || 0
        });
      }

      setCompleted(true);

      // Update user_scores collection
      const userScoreRef = doc(db, 'users', user.uid);
      await setDoc(userScoreRef, {
        username: user.displayName || user.email,
        score: (question.points || 0)
      }, { merge: true });

    } catch (err) {
      console.error('Error marking question as completed:', err);
      throw err;
    }
  };

  return { question, loading, error, completed, markAsCompleted };
};

export default useCTFQuestion;