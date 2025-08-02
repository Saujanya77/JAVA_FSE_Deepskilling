import React, { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState(null);

  const handleSubmit = () => {
    const euro = rupees / 90;
    setEuros(euro.toFixed(2));
  };

  return (
    <div>
      <h2>💱 Currency Converter</h2>
      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>

      {euros && (
        <p>Equivalent in €: <strong>{euros}</strong></p>
      )}
    </div>
  );
}

export default CurrencyConvertor;
