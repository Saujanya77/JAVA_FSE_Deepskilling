import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
