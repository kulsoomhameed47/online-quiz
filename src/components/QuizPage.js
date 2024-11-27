import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically
import generalKnowledgeData from '../data/general-knowledge.json';
import scienceData from '../data/science.json';

const QuizPage = ({ category }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (category === 'general-knowledge') {
      setQuestions(generalKnowledgeData);
    } else if (category === 'science') {
      setQuestions(scienceData);
    }
  }, [category]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate("/results", { state: { score, totalQuestions: questions.length } });
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
      <h3>{currentQuestion.question}</h3>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option.isCorrect)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
