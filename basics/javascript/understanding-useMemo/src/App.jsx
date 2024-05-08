
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("");
  useEffect(()=>{
    (async ()=>{
      const stream = await fetch("https://raw.githubusercontent.com/stockholmux/ecommerce-sample-set/master/items.json");
      const data = await stream.json();
      setData(data);
    })()
  },[]);
  const computedTemplate = useMemo(() => {
    let template = "";
    if(data!="") {
      data.forEach();
    } else {
      return "";
    }
  }, [data]);
  return (
    <>
    {computedTemplate}
    </>
  )
}
const 
export default App
