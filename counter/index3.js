import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef();  // Create a ref object

  const handleFocus = () => {
    inputRef.current.focus();  // Access the DOM element directly
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;