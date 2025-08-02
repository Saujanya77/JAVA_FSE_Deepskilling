import React from 'react';

function App() {
  // Office object
  const office = {
    name: "Skyline Towers",
    rent: 55000,
    address: "MG Road, Bangalore",
    image: "https://via.placeholder.com/200x120.png?text=Office+Image"
  };

  // List of office objects
  const offices = [
    {
      name: "EcoSpace Hub",
      rent: 48000,
      address: "Whitefield, Bangalore",
      image: "https://via.placeholder.com/200x120.png?text=EcoSpace"
    },
    {
      name: "TechPark Central",
      rent: 72000,
      address: "Indiranagar, Bangalore",
      image: "https://via.placeholder.com/200x120.png?text=TechPark"
    },
    {
      name: "Startup Studio",
      rent: 65000,
      address: "HSR Layout, Bangalore",
      image: "https://via.placeholder.com/200x120.png?text=Startup+Studio"
    }
  ];

  // Styling function (inline CSS based on rent)
  const getRentStyle = (rent) => {
    return {
      color: rent < 60000 ? 'red' : 'green',
      fontWeight: 'bold'
    };
  };

  return (
    <div>
      {/* 1. JSX Heading Element */}
      <h1>🏢 Office Space Rental App</h1>

      {/* 2. JSX Image */}
      <img src={office.image} alt="Office Space" />

      {/* 3. Office Details (object) */}
      <h2>{office.name}</h2>
      <p><strong>Rent:</strong> <span style={getRentStyle(office.rent)}>{office.rent}</span></p>
      <p><strong>Address:</strong> {office.address}</p>

      {/* 4. List of Offices using map() */}
      <h2>Other Available Offices</h2>
      <div>
        {offices.map((off, index) => (
          <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={off.image} alt="office" />
            <h3>{off.name}</h3>
            <p><strong>Rent:</strong> <span style={getRentStyle(off.rent)}>{off.rent}</span></p>
            <p><strong>Address:</strong> {off.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
