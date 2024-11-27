import React from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically

const LandingPage = ({ onStartQuiz }) => {
  const navigate = useNavigate();

  const handleStartQuiz = (category) => {
    onStartQuiz(category);  // Set the selected category in App.js
    navigate("/quiz");  // Navigate to the quiz page
  };

  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button onClick={() => handleStartQuiz('general-knowledge')}>Start General Knowledge Quiz</button>
      <button onClick={() => handleStartQuiz('science')}>Start Science Quiz</button>
    </div>
  );
};

export default LandingPage;
