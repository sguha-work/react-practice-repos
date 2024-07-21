import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import PerformanceService from "../../services/performence.service";
import { subject_joke$, subject_jokeCategory$ } from "../../rxjs/joke-category.behavior-subject";
function JokeCategoryDropdownComponent() {
  const [categories, setCategories] = useState(null);
  const store = useSelector((state) => state);
  useEffect(() => {
    // if category data exists in store setting up state variable to populate the data
    store.categories && store.categories.data && setCategories(store.categories.data);
    if (store.categories) {
      PerformanceService.endTime = performance.now();
      console.log("Time to populate dropdown menu", PerformanceService.endTime - PerformanceService.startTime);
    }
  }, [store.categories]);

  useEffect(() => {
    // triggering the subject to fetch categories
    if (store.categories && store.categories.data) {
      //
    } else {
      subject_jokeCategory$.next();
    }
  }, []);
  const categoryChanged = (event) => {
    const data = event.target.value;
    // checking if jokes on selected category exists in store or not
    if (store.jokes.data && store.jokes.data[data]) {
      //
    } else {
      subject_joke$.next(data);
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