import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const score = ((total / goal)).toFixed(2); // Assuming goal is like 300, 500, etc.

  return (
    <div className="container">
      <h1 className="heading">Student Details:</h1>
      <p><span className="label blue">Name:</span> <span className="value lightblue">{name}</span></p>
      <p><span className="label red">School:</span> <span className="value pink">{school}</span></p>
      <p><span className="label darkpink">Total:</span> <span className="value">{total}Marks</span></p>
      <p><span className="label green">Score:</span> <span className="value lightgreen">{score}%</span></p>
    </div>
  );
}

export default CalculateScore;
