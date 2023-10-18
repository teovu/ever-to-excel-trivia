// TableData.jsx
import React from 'react';

function TableData({ isActive, onClick, text }) {
  // Determine the CSS class
  const buttonClasses = isActive
    ? 'bg-[#f0f0f0] text-[#f0f0f0]'
    : 'bg-[#407eb4] text-white hover:bg-[#ffb400] hover:text-[#00539b] transition-colors duration-300';
  return (
    <td className="border text-center basis-1/5 relative h-1/6">
      {/* ... (rest of your setup) ... */}
      <div
        role="button"
        tabIndex="0"
        style={{ outline: 'none', cursor: 'pointer' }}
        className={`w-full h-full text-6xl rounded flex items-center justify-center cursor-pointer ${buttonClasses}`} // spread your other classes here
        onClick={onClick} // onClick now calls the function passed as a prop
      >
        {text}
      </div>
    </td>
  );
}

export default TableData;
