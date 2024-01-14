import React, { useEffect, useState } from 'react';
import STORE_JOKES from './../../../store/Jokes/jokes.store';
import ACTION_JOKES from './../../../store/Jokes/jokes.action';
export default function JokeCategorySelect() {
  const [jokesCategories, setJokesCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    STORE_JOKES.subscribe(() => {
      setJokesCategories(STORE_JOKES.getState()['jokeCategories']);
    });
  }, []);
  const onJokeCategorySelectionChange = ((event) => {
    setSelectedCategory(event.target.value);
  });
  const getJokesByCategory = () => {
    ACTION_JOKES.FETCH_JOKES.category = selectedCategory;
    STORE_JOKES.dispatch(ACTION_JOKES.FETCH_JOKES);
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <select onChange={onJokeCategorySelectionChange}>
              <option value="">Nothing to select</option>
              {
                jokesCategories.map((category) => (<option key={category}>{category}</option>))
              }
            </select>
          </td>
          <td>
            <button onClick={getJokesByCategory}>Get jokes by category</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
