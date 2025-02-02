import React, { useState, useEffect } from 'react';
import { getRandomQuestions } from '../data/quiz';

const Quiz = ({ onClose }) => {
  const [questions] = useState(getRandomQuestions(10));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerClick = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        setShowResults(true);
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      }
    }, 1500);
  };

  const getButtonClass = (option) => {
    if (!isAnswered) return 'bg-white';
    if (option === questions[currentQuestion].correctAnswer) {
      return 'bg-green-500 text-white transform scale-105';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-white opacity-50';
  };

  if (showResults) {
    const passed = score >= 6;
    return (
      <div className="animate-fade-in">
        <div className="text-center mb-8">
          <div
            className={`text-4xl font-bold mb-4 ${passed ? 'text-green-500' : 'text-red-500'}`}
          >
            {passed ? 'Congratulations!' : 'Keep Practicing!'}
          </div>
          <div className="text-xl text-gray-600">
            You scored {score} out of {questions.length}
          </div>
          <div className="text-gray-500 mt-2">
            {passed
              ? 'You passed the practice test!'
              : 'You need 6 correct answers to pass.'}
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-full py-3 bg-[#B52048] text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-[#B52048] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>
        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg border border-gray-200 text-left transition-all duration-200 ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
