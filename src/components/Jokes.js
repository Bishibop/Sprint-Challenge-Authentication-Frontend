import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jokes() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('http://192.168.1.220:3300/api/jokes', {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('JWT')}`
      }
    }).then(res => {
      console.log('jokes: ', res.data);
      setJokes(res.data);
    });
  }, []);

  return (
    <div className="jokes">
      <h2>JOKES</h2>
      {jokes.map(joke => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}

    </div>
  );
}

export default Jokes;
