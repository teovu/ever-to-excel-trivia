// InteractiveTable.jsx
import React, { useState, useEffect } from 'react';
import TableData from './TableData.jsx';
import TableHeader from './TableHeader.jsx';

function InteractiveTable() {
  // Initialize state for all buttons. It will be an object with keys representing uniqueIDs and values representing whether the button is active.
  const [activeButtons, setActiveButtons] = useState({});

  // When the component mounts, we retrieve the saved state from local storage.
  useEffect(() => {
    // Load the active button state from local storage or set to an empty object if not found.
    const storedActiveButtons = JSON.parse(localStorage.getItem('activeButtons')) || {};
    setActiveButtons(storedActiveButtons);
  }, []); // Empty dependency array means this useEffect runs once when the component mounts.

  // This function is called when a button in a TableData component is clicked.
  const handleButtonClick = (uniqueID) => {
    // Update the state for this button, toggling its active state.
    const newActiveButtons = { ...activeButtons, [uniqueID]: !activeButtons[uniqueID] };
    window.open(`/${uniqueID}`, "_blank");
    // Save the updated state both in local storage and in the component's state.
    localStorage.setItem('activeButtons', JSON.stringify(newActiveButtons));
    setActiveButtons(newActiveButtons);
  };

  // This function will determine what text to display based on the row number
  const getTextForRow = (row) => {
    if (row === 1) {
      return '100';
    } else if (row === 2 || row === 3) {
      return '200';
    } else if (row === 4 || row === 5) {
      return '300';
    } else {
      return ''; // Default case or you can return something else here.
    }
  };

  // Render the table based on the current state.
  // The `TableData` components are rendered within the table, and each is given a prop indicating its active state.
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-4/5">
      <table className="table-fixed w-full h-full">
      <thead>
				<tr>
					<TableHeader
						text="Scottish Inventions"
					/>
					<TableHeader
						text="St Andrews Shenanigans"
					/>
					<TableHeader
						text="Chronically Online"
					/>
					<TableHeader
						text="Ready your sWORDS"
					/>
					<TableHeader
						text="Winners"
					/>
				</tr>
        </thead>
        <tbody>
          {/* Render your rows and cells. Below is a simplified version; your actual rendering logic might differ based on your data structure. */}
          {[1, 2, 3, 4, 5].map((row) => ( // Assuming you have 5 rows now, as you mentioned you want 300 for rows 4 and 5.
            <tr key={row}>
              {[1, 2, 3, 4, 5].map((col) => { // Assuming you have 5 columns.
                const uniqueID = `${row}${col}`; // Construct the uniqueID based on the row and column.

                return (
                  <TableData
                    key={uniqueID}
                    uniqueID={uniqueID}
                    isActive={!!activeButtons[uniqueID]} // The active state is determined by the current state in `activeButtons`.
                    onClick={() => handleButtonClick(uniqueID)} // Pass the click handler to the child component.
                    text={getTextForRow(row)} // Here we call our new function to get the correct text based on the row number.
                    href='' // You would populate this accordingly.
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InteractiveTable;
