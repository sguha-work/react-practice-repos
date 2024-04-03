import { useEffect } from "react";
import iterator from "../../../services/iterator.service";
import TableComponent from "../../utilities/table/table.component"

function JokeListComponent() {
    const numberOfData = 10;
    let itr = null;
    const prepareDataChunk = (data, startIndex=0) => {
        if(!itr) {
            itr = iterator(data);
        }
        let chunk = [];
        for(let index=0; index<numberOfData; index++) {
            const jokeObj = itr.next();
            chunk.push(jokeObj.data.value);
        }
        console.log({chunk});
    }
    const previousButtonClicked = (startIndex)=>{

    }
    const nextButtonClicked = (startIndex)=>{

    }
    useEffect(()=>{
        (async()=>{
            const dataStream = await fetch("https://api.chucknorris.io/jokes/search?query=man");
            const data = await dataStream.json();
            prepareDataChunk(data.result);
        })()
    },[])
  return (
    
        <TableComponent></TableComponent>
    
  )
}

export default JokeListComponent