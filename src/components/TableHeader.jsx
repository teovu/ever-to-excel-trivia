import React from 'react';

// Define your component with props
function TableHeader({ text }) {
  // Return your JSX here.
  // Note: The styling is kept inline as per your original component.
  return (
    <th className="border border-x-2 border-y-2 bg-[#00539b] text-[#f0f0f0] px-4 py-2 text-4xl hover:bg-[#003e74] cursor-default">
      {text}
    </th>
  );
}

export default TableHeader;
