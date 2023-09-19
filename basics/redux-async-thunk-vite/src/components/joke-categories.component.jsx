import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokeCategories } from "../redux/actions/fetch-joke-categories.action";
function JokeCategoriesComponent() {
  const [jokeCategoryList, setJokeCategoryList] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(()=>{
    dispatch(fetchJokeCategories());
  },[]);
  useEffect(()=>{
    if(state.joke.data != null) {
      setJokeCategoryList(state.joke.data);
    }
  },[state.joke.data]);
  if (state.joke.isLoading) {
    return <h1>...... Loading .......</h1>;
  }
  if (state.joke.data != null) {
    console.log('data received', state.joke.data);
    // setJokeCategoryList(state.joke.data);
  }
  if (state.joke.isError) {
    console.log(state.joke.error);
  }
  return (
    <>
      <h3>Please select joke categories from here</h3>
      <select>
        <option key="-1"> Please select something</option>
        {jokeCategoryList.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </>

  )
}

export default JokeCategoriesComponent