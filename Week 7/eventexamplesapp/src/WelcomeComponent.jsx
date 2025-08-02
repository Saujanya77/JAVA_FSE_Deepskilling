import React from 'react';

function WelcomeComponent() {
  const sayWelcome = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
    </div>
  );
}

export default WelcomeComponent;
