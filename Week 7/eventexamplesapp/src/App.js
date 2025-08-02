import React from 'react';
import CounterComponent from './CounterComponent';
import WelcomeComponent from './WelcomeComponent';
import SyntheticEventComponent from './SyntheticEventComponent';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>⚡ React Events Lab</h1>
      <CounterComponent />
      <WelcomeComponent />
      <SyntheticEventComponent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
