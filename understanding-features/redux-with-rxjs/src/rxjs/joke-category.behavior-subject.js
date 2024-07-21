import { BehaviorSubject } from 'rxjs';
const subject_jokeCategory$ = new BehaviorSubject();
const subject_jokeCategoryReceived$ = new BehaviorSubject();
const subject_joke$ = new BehaviorSubject();
const subject_jokeReceived$ = new BehaviorSubject();
export {subject_jokeCategory$, subject_joke$, subject_jokeCategoryReceived$, subject_jokeReceived$};