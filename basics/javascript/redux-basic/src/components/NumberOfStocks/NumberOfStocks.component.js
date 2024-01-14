import { useEffect, useState } from "react";
import STORE from "../../store/store";
export default function NumberOfStocks() {
    const [numberOfStocks, setNumberOfStocks]=useState(0);
    useEffect(()=>{
        setNumberOfStocks(STORE.getState()["numberOfStocks"]);
        STORE.subscribe(()=>{
            setNumberOfStocks(STORE.getState()["numberOfStocks"]);
        });
    },[]);
    return (
        <>
            <p>Total number of available stocks <b>{numberOfStocks}</b></p>
        </>
    );
}