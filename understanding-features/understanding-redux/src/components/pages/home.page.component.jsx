import { useEffect } from "react";
import JokeCategoryDropdownComponent from "../utilities/joke-category-dropdown.component"
import JokesTableComponent from "../utilities/jokes-table.component"
import { useDispatch } from "react-redux"
import { action_fetchJokeCategory } from "../../redux/actions/joke-category.action";
function HomePageComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action_fetchJokeCategory());
  }, []);
  return (
    <div>
      <JokeCategoryDropdownComponent></JokeCategoryDropdownComponent>
      <JokesTableComponent></JokesTableComponent>
    </div>
  )
}

export default HomePageComponent