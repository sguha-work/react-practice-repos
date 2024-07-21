import { useEffect } from "react";
import JokeCategoryDropdownComponent from "../utilities/joke-category-dropdown.component"
import JokesTableComponent from "../utilities/jokes-table.component"
import { useDispatch, useSelector } from "react-redux"
import { action_fetchJokeCategory } from "../../redux/actions/joke-category.action";
import { Link } from 'react-router-dom';
import PerformanceService from "../../services/performence.service";
function HomePageComponent() {
  const dispatch = useDispatch();
  const jokeCategory = useSelector((state) => state);
  useEffect(() => {
    PerformanceService.startTime = performance.now();
    // checking if category data exists in store or not
    if (jokeCategory.categories && jokeCategory.categories.data) {
      // data exists do not need to dispatch action
    } else {
      // category data doesn't exists dispatching action to fetch data
      dispatch(action_fetchJokeCategory());
    }
  }, []);
  return (
    <div>
      <JokeCategoryDropdownComponent></JokeCategoryDropdownComponent>
      <JokesTableComponent></JokesTableComponent>
      <Link to={"/about"}>About page</Link>
    </div>
  )
}

export default HomePageComponent