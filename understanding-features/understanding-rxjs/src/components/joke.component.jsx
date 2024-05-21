import { useEffect, useState } from "react"
import { getRandomJoke } from "../services/jokes.service";
function JokeComponent() {
    const [joke, setJoke] = useState("");
    useEffect(()=>{
        const joke = getRandomJoke();
        joke.subscribe({
            next: value => {console.log(value)
                setJoke(value.value)
            },
            error: err => console.log("xyz",err)
        });
    },[]);
  return (
    <div>{joke}</div>
  )
}

export default JokeComponent