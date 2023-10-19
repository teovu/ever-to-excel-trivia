import React from 'react';

const CloseQuestionButton = () => {
  const handleClose = () => {
    // Tries to close the current browser tab
    window.close();
  };

  return (
    <button
      onClick={handleClose}
      className="
        text-5xl
        fixed top-4 right-4
        w-16 h-16  // Increased width and height for better symmetry
       bg-[#f0f0f0]
        rounded-full
        flex items-center justify-center
        hover:bg-[#b0140e]
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50
        transition ease-in duration-200
        shadow-lg
      "
      style={{ lineHeight: '0' }} // Helps to center the 'X' more accurately
      aria-label="Close page"
    />
  );
};

export default CloseQuestionButton;
