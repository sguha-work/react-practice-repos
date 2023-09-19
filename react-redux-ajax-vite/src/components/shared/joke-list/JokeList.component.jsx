import React, { useState, useEffect } from 'react'
import STORE_JOKES from './../../../store/Jokes/jokes.store';
export default function JokeList() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    STORE_JOKES.subscribe(() => {

      console.log('here',STORE_JOKES.getState()['jokes']);
      setJokes(STORE_JOKES.getState()['jokes']);
    });
  }, []);
  return (
    <table>
      <tbody>
        {
          jokes.map((joke) => (
            <tr>
              <td>{joke}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
