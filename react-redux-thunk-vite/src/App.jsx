import { useEffect } from 'react';
import './App.css';
import STORE_JOKES from './store/Jokes/jokes.store';
import ACTION_JOKES from './store/Jokes/jokes.action';
import JokeCategorySelect from './components/shared/joke-category-select/JokeCategorySelect.component';

import './App.css'
import JokeList from './components/shared/joke-list/JokeList.component';

function App() {
  useEffect(() => {
    STORE_JOKES.dispatch(ACTION_JOKES.FETCH_JOKES_CATEGORIES);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jokes application.
        </p>
        <table>
          <thead>
            <tr>
              <td><JokeCategorySelect></JokeCategorySelect></td>
              <td><JokeList></JokeList></td>
            </tr>
          </thead>
        </table>
        
      </header>
    </div>
  )
}

export default App
