// components/EyesOnMe.js
import React from "react";

function EyesOnMe() {
  // Basic event handlers for focus and blur events
  const handleFocus = () => {
    console.log("Good!");
  };

  const handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };

  return (
    <button
      onFocus={handleFocus} // Event listener for focus
      onBlur={handleBlur} // Event listener for blur
    >
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
