import { useState, useEffect } from "react";
function GeneratorAjaxComponent() {
    const [jokes, setJokes] = useState([]);
    function* callAPI(numberOfJokes) {
        for (let index = 0; index < numberOfJokes; index++) {
            let call = (async () => {
                try {
                    //await new Promise(resolve => setTimeout(resolve, 1000));
                    const stream = await fetch('https://api.chucknorris.io/jokes/random');
                    const data = await stream.json();
                    return Promise.resolve(data);
                } catch (error) {
                    return Promise.reject(error);
                }
            })
            yield call();
        }
    }
    useEffect(() => {
        let jokeList = [];
        const iterator = callAPI(5);
        (async () => {
            while (1) {
                
                const data = iterator.next();
                if (data.value && data.value) {
                    const response = await data.value;
                    jokeList.push(response.value);
                    console.log('response',Date.now(),jokeList);
                    setJokes([...jokeList]);    
                } else {
                    break;
                }
            }
        })();

    }, []);
    return (
        <div>
            <h3>This is 5 random jokes,  you will have 5 new jokes every time page refreshes</h3>
            <ul>
                {jokes.map((joke, index) => (
                    <li key={index}>
                        <p>{joke}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default GeneratorAjaxComponent