import React from 'react';

const IndianPlayers = () => {
  // Arrays of players
  const T20players = ["Virat", "Rohit", "Surya", "Pant"];
  const RanjiPlayers = ["Player1", "Player2", "Player3", "Player4"];

  // Merge arrays using spread operator (ES6 feature)
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  // Odd and even team based on index (Destructuring magic)
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 === 1);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Players Combined</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team</h2>
      <ul>
        {evenTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Odd Team</h2>
      <ul>
        {oddTeam.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
