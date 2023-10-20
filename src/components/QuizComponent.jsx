// src/components/QuizComponent.jsx
import React, { useState } from 'react';
import CloseQuestionButton from './CloseQuestionButton';
import Timer from './Timer';

function QuizComponent({ uniqueID, question, answers, pointAmount }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer.text);
    setIsCorrect(answer.isCorrect);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <CloseQuestionButton/>
      <div className="
            text-6xl
            absolute top-4 left-4  // Positioned at the bottom right
            w-32 h-32  // Consistent width and height for the circle
            bg-[#f0f0f0]  // Background color
            hover:bg-[#407eb4]  // Hover effect
            rounded-full  // Rounded border for circle shape
            flex items-center justify-center  // Flexbox for centering the 'X'
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50  // Focus styles
            transition ease-in duration-200  // Transition effect
            shadow-lg  // Shadow effect
            "
          style={{ lineHeight: '0' }} // Helps to center the 'X' more accurately
          aria-label="Timer"
        >
        <Timer initialSeconds={30} /> {/* Timer starts from 30 seconds */}
      </div>
      <div id={`quiz-${uniqueID}`} className="flex flex-col items-center justify-center bg-white py-4 shadow-md w-4/5 h-4/5 rounded-2xl">
        <div className="w-full px-4">
          <h2 className="text-[#00539b] text-8xl font-semibold">{question}</h2>
          <ul className="list-none p-0 my-4">
            {answers.map((answer, index) => (
              <li key={index}>
                <button
                  onClick={() => handleAnswerClick(answer)}
                  className={`
                    w-full text-left py-2 px-4 rounded text-6xl my-2 cursor-pointer text-semi-bold
                    transition-colors duration-300 focus:outline-none
                    ${selectedAnswer === answer.text
                      ? answer.isCorrect
                        ? 'bg-[#00642f] text-white'
                        : 'bg-[#b0140e] text-white'
                      : 'bg-[#407eb4] text-white hover:bg-[#ffb400] hover:text-[#00539b]'}
                    ${selectedAnswer === answer.text ? 'ring-4 ring-[#ffb400]' : 'focus:ring-4 focus:ring-[#ffb400]'}  // Added ring classes for focus and selected state.
                  `}
                  disabled={selectedAnswer !== null}
                >
                    <p class="p-1">{answer.text}</p>
                </button>
              </li>
            ))}
          </ul>
          <p className="text-[#00539b] font-bold text-4xl">
            Points: {pointAmount}
          </p>
          {selectedAnswer && (
            <div className="mt-4 text-2xl">
              <p className="text-[#00539b]">You selected: {selectedAnswer}</p>
              <p className={`font-bold text-4xl ${isCorrect ? 'text-[#00642f]' : 'text-[#b0140e]'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
