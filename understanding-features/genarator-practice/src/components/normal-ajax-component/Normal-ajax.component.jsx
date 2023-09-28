import { useState, useEffect } from "react"
// we need useState because the data from API call will take some time to be fetched and we need to display the data on the screen immediately

// we need useEffect to call the API as soon as the component load
function NormalAjaxComponent() {
    const [joke, setJoke] = useState('');
    useEffect(() => {
        // this hook gets called when the component loads for the first time
        // As we should not make useEffect asynchronus so we have to create a noname asynchronus function to call the API
        (async ()=>{
            try {
                const stream = await fetch('https://api.chucknorris.io/jokes/random');
                const data = await stream.json();
                console.log('data',data);
                setJoke(data.value);
            } catch(e) {
                console.error(e);
            }
        })();
    }, []);
    return (
        <div>
            <h3>This is a random joke,  you will have a new joke every time page refreshes</h3>
            <p>
                {joke}
            </p>
        </div>
    )
}
export default NormalAjaxComponent