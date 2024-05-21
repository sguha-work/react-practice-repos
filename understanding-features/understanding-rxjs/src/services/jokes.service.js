import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';
export const getRandomJoke = () => {
    const jokes = ajax({
        url: 'https://api.chucknorris.io/jokes/random',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).pipe(
        map(response => response.response),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        }));
      return jokes;
}