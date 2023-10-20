// src/components/HostedQuizComponent.jsx
import React, { useState } from 'react';
import CloseQuestionButton from './CloseQuestionButton';
import Timer from './Timer';

function QuizComponentExtreme({ uniqueID, question, correctAnswer, pointAmount }) {
  const [answerRevealed, setAnswerRevealed] = useState(false);

  const handleRevealAnswer = () => {
    setAnswerRevealed(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CloseQuestionButton/>
      <div className="
            text-6xl
            absolute top-4 left-4
            w-32 h-32
            bg-[#f0f0f0]
            hover:bg-[#407eb4]
            rounded-full
            flex items-center justify-center
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
            transition ease-in duration-200
            shadow-lg
            "
          style={{ lineHeight: '0' }}
          aria-label="Timer"
        >
        <Timer initialSeconds={30} />
      </div>
      <div id={`quiz-${uniqueID}`} className="flex flex-col items-center justify-center bg-white py-4 shadow-md w-4/5 h-4/5 rounded-2xl">
        <div className="w-full px-4">
          <h2 className="text-[#00539b] text-8xl font-semibold">{question}</h2>
          <div className="my-4">
            {answerRevealed ? (
              <div className="text-6xl font-bold text-[#00642f]">
                <p>Answer: {correctAnswer}</p>
              </div>
            ) : (
              <button
                onClick={handleRevealAnswer}
                className="
                  text-6xl
                  bg-[#407eb4] text-white hover:bg-[#ffb400] hover:text-[#00539b]
                  py-2 px-4 rounded
                  cursor-pointer text-semi-bold
                  transition-colors duration-300 focus:outline-none
                  focus:ring-4 focus:ring-[#ffb400]
                "
              >
                Reveal Answer
              </button>
            )}
          </div>
          <p className="text-[#00539b] font-bold text-4xl">
            Points: {pointAmount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuizComponentExtreme;
