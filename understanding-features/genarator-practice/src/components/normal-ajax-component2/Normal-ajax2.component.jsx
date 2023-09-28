import { useState } from "react"
// we need useState because the data from API call will take some time to be fetched and we need to display the data on the screen immediately

function NormalAjax2Component() {
    const [joke, setJoke] = useState('');
    const getJoke = async ()=>{
        try {
            const stream = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await stream.json();
            console.log('data',data);
            setJoke(data.value);
        } catch(e) {
            console.error(e);
        }
    }
    return (
        <div>
            <h3>You will have a new joke every time you click on button</h3>
            <button onClick={getJoke}>Click me</button>
            <p>
                {joke}
            </p>
        </div>
    )
}
export default NormalAjax2Component