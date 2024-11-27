import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleRestart = () => {
    navigate("/");  // Navigate back to the landing page
  };

  if (!state) {
    return <div>No results to display</div>;
  }

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Your score: {state.score} out of {state.totalQuestions}</p>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default ResultsPage;
