import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { action_fetchJokes } from "../../redux/actions/jokes.action";
function JokeCategoryDropdownComponent() {
  const [categories, setCategories] = useState(null);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // if category data exists in store setting up state variable to populate the data
    store.categories && store.categories.data && setCategories(store.categories.data);
  }, [store.categories]);
  const categoryChanged = (event) => {
    const data = event.target.value;
    // checking if jokes on selected category exists in store or not
    if (store.jokes.data && store.jokes.data[data]) {
      //
    } else {
      // jokes on selected category doesn't exists in store so dispatching action to fetch joke data
      dispatch(action_fetchJokes(data));
    }
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