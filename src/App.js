import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Using Routes and Route for React Router v6
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import './App.css';

const App = () => {
  const [category, setCategory] = useState("");  // To store the selected category

  return (
    <Router> {/* Wrap your app with Router */}
      <div className="App">
        <Routes>
          {/* Define the routes for your application */}
          <Route 
            exact 
            path="/" 
            element={<LandingPage onStartQuiz={(cat) => setCategory(cat)} />}  // Pass category setter to LandingPage
          />
          <Route 
            path="/quiz" 
            element={<QuizPage category={category} />}  // Pass the selected category to the quiz page
          />
          <Route 
            path="/results" 
            element={<ResultsPage />}  // Results page (after quiz completion)
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
