// components/Keypad.js
import React from "react";

function Keypad() {
  // Basic event handler for the change event
  const handleChange = () => {
    console.log("Entering password...");
  };

  return (
    <input
      type="password"
      onChange={handleChange} // Event listener for input change
    />
  );
}

export default Keypad;
