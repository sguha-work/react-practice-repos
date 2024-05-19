import { useState } from "react";
function JokeComponent() {
    const [joke, setJoke] = useState("");
    async function buttonClicked() {
        const stream = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await stream.json();
        setJoke(data.value);
    }
    return (
        <div>
            <b>{joke}</b>
            <button onClick={buttonClicked}>Click me</button>
        </div>
    )
}

export default JokeComponent