import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable
  let displayPage;

  if (isLoggedIn) {
    displayPage = <UserPage />;
  } else {
    displayPage = <GuestPage />;
  }

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App">
      <h1>🛫 Ticket Booking App</h1>

      {/* Conditional button */}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {/* Render correct page */}
      {displayPage}

      {/* Prevent render logic example */}
      {false && <p>This will never render. (Prevented manually)</p>}
    </div>
  );
}

export default App;
