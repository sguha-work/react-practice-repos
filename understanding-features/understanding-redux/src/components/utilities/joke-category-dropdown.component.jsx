import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { action_fetchJokes } from "../../redux/actions/jokes.action";
function JokeCategoryDropdownComponent() {
  const [categories, setCategories] = useState(null);
  const jokeCategory = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    jokeCategory.categories && jokeCategory.categories.data && setCategories(jokeCategory.categories.data);
  }, [jokeCategory.categories]);
  const categoryChanged = (event)=>{
    const data = event.target.value;
    dispatch(action_fetchJokes(data));
  }
  return (
    <div>
      <h3>Select category of the joke from the dropdown</h3>
      <select onChange={categoryChanged}>
        <option>Select category</option>
        {categories && categories.map((category, index) => (
          <option value={category} key={index}>{category}</option>
        ))}
      </select>
    </div>
  )
}

export default JokeCategoryDropdownComponent