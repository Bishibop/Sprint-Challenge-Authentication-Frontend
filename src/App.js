import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    // No time for separate pages! But did all register, login, and joke
    // getting functionality.
    <div className="App">
      {!loggedIn && 
        <>
          <Register setLoggedIn={setLoggedIn}/>
          <Login setLoggedIn={setLoggedIn}/>
        </>
      }
      {loggedIn && 
        <Jokes />
      }
    </div>
  );
}

export default App;
