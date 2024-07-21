import { useSelector } from "react-redux"

function JokesTableComponent() {
  const store = useSelector((state)=>state);
  return (
    <div>
      <h3>Here is the joke of selected category</h3>
      {store.jokes.pending && (<h3>Loading....</h3>)}
      {store.jokes.data && Object.keys(store.jokes.data).map((category, index)=>(
        <p key={index}><b>{category}</b>:--<b>{store.jokes.data[category]}</b></p>
      ))}
      
    </div>
  )
}

export default JokesTableComponent