import { useEffect, useRef } from "react";
import JokeCategoryDropdownComponent from "../utilities/joke-category-dropdown.component"
import JokesTableComponent from "../utilities/jokes-table.component"
import { useDispatch, useSelector } from "react-redux"
import { action_fetchJokeCategory } from "../../redux/actions/joke-category.action";
import { action_fetchJokes } from "./../../redux/actions/jokes.action";
import { Link } from 'react-router-dom';
import PerformanceService from "../../services/performence.service";
import { subject_joke$, subject_jokeCategory$, subject_jokeCategoryReceived$, subject_jokeReceived$ } from "../../rxjs/joke-category.behavior-subject";
import { fetchJokeCategory, fetchJokes } from "../../services/jokes.service";
function HomePageComponent() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  const subjectRef = useRef({});
  const initiateSubscription = () => {
    subjectRef.current.subject_jokeCategory$ = subject_jokeCategory$.asObservable().subscribe(() => {
      if (store.categories && store.categories.data) {
        //
      } else {
        fetchJokeCategory();
      }
    });

    subjectRef.current.subject_jokeCategoryReceived$ = subject_jokeCategoryReceived$.asObservable().subscribe((data) => {
      dispatch(action_fetchJokeCategory(data));
    });

    subjectRef.current.subject_joke$ = subject_joke$.asObservable().subscribe((data) => {
      data && fetchJokes(data);
    });

    subjectRef.current.subject_jokeReceived$ = subject_jokeReceived$.asObservable().subscribe((data) => {
      data && dispatch(action_fetchJokes(data));
    });
  }
  const destroySubscription = () => {
    Object.keys(subjectRef.current).forEach((key) => {
      subjectRef.current[key].unsubscribe();
    });
  }
  useEffect(() => {
    PerformanceService.startTime = performance.now();
  }, []);
  useEffect(() => {
    initiateSubscription();
    return () => destroySubscription();
  }, []);
  return (
    <div>
      <JokeCategoryDropdownComponent></JokeCategoryDropdownComponent>
      <JokesTableComponent></JokesTableComponent>
      <Link to={"/about"}>About page</Link>
    </div>
  )
}

export default HomePageComponent;