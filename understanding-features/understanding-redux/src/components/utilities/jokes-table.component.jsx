import { useSelector } from "react-redux"

function JokesTableComponent() {
  const jokes = useSelector((state)=>state);
  return (
    <div>
      <h3>Here is the joke of selected category</h3>
      {jokes.jokes.pending && (<h3>Loading....</h3>)}
      <p><b>{jokes.jokes.data}</b></p>
    </div>
  )
}

export default JokesTableComponent