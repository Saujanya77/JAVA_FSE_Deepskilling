import React from 'react';
import "./App.css";
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // Change this to false to test both outputs!

  return (
    <div className="App">
      <h1>🏏 Cricket App</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;
