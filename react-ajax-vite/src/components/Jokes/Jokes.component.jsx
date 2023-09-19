import { useEffect, useState } from "react";
import { Ajax } from "../../services/Ajax.service";
export function JokesComponent(props) {
    const [joke, setJoke] = useState('Loading....');
    useEffect(()=>{
        // this useEffect will be called when the component is loaded
        const ajax = new Ajax();
        (async function(){
            const data = await ajax.getData();
            console.log(data);
            setJoke(data.value);
        })();
    },[]);
    return (
        <div>
            {joke}
        </div>
    );
}