import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Jokes from './components/Jokes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
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
