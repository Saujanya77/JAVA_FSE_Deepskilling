import React from 'react';

const ListofPlayers = () => {
  // 1. Array of 11 players with name and score
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 88 },
    { name: "Rahul", score: 67 },
    { name: "Gill", score: 79 },
    { name: "Hardik", score: 72 },
    { name: "Jadeja", score: 69 },
    { name: "Ashwin", score: 85 },
    { name: "Shami", score: 55 },
    { name: "Bumrah", score: 60 },
    { name: "Surya", score: 90 },
    { name: "Pant", score: 40 },
  ];

  // 2. Filter players with score below 70 (using arrow function)
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {lowScorers.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
