import { subject_jokeCategoryReceived$, subject_jokeReceived$ } from "../rxjs/joke-category.behavior-subject";
import { ajax } from 'rxjs/ajax';
import { map, catchError, of, take } from "rxjs";
export const fetchJokeCategory = () => {
    // try {
    //     const stream = await fetch("https://api.chucknorris.io/jokes/categories");
    //     const data = await stream.json();
    //     return Promise.resolve(data);
    // } catch (error) {
    //     return Promise.reject(error);
    // }

    // you can use classic fetch api but as you are using rxjs so try and use ajax from rxjs
    // fetch("https://api.chucknorris.io/jokes/categories").then((stream)=>{
    //     stream.json().then((data)=>{console.log("data",data);
    //         subject_jokeCategoryReceived$.next(data);
    //     }).catch(()=>{
    //         // this catch will be called when there is an error in parsing the data
    //     });
    // }).catch(()=>{
    //     // this catch will be called when there is a network/API error
    // });
    const jokeCategory$ = ajax({
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'rxjs-custom-header': 'Rxjs'
        // },
        // body: {
        //   rxjs: 'Hello World!'
        // }
    }).pipe(
        map((response) => {
            return response.response
        }),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

      /*const subscription =*/ jokeCategory$.pipe(take(1)).subscribe({
        next: (value) => {
            subject_jokeCategoryReceived$.next(value);
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {
            // console.log("ajax call completed unsubscribing");
            // subscription.unsubscribe();
            // the unsubscribe is done by .pipe(take(1))
        }
    });
}
export const fetchJokes = async (category) => {
    const jokeCategory$ = ajax({
        url: `https://api.chucknorris.io/jokes/random?category=${category}`,
        method: 'GET',
        // headers: {
        //   'Content-Type': 'application/json',
        //   'rxjs-custom-header': 'Rxjs'
        // },
        // body: {
        //   rxjs: 'Hello World!'
        // }
    }).pipe(
        map((response) => {
            return response.response
        }),
        catchError(error => {
            console.log('error: ', error);
            return of(error);
        })
    );

    const subscription = jokeCategory$.subscribe({
        next: (value) => {
            subject_jokeReceived$.next(value);
        },
        error: (err) => {
            console.log(err);
        },
        complete: () => {
            // console.log("ajax call completed unsubscribing");
            subscription.unsubscribe();
            // the unsubscribe is done by .pipe(take(1))
        }
    });
}