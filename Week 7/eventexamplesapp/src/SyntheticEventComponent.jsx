import React from 'react';

function SyntheticEventComponent() {
  const handleClick = (e) => {
    // Synthetic event in action
    alert("I was clicked!");
    console.log("Synthetic event:", e);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEventComponent;
