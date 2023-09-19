import Input1 from "../Input1/Input1.component";
import Input2 from "../Input2/Input2.component";
import {useEffect} from 'react';
function MyCustomComponent1() {
    let word1 = null, word2 = null;
    const inputChanged = (number, value) => {
        switch(number) {
            case 1:
                word1 = value;
                break;
            case 2:
                word2 = value;
                break;
            default:
                break;
        }
    }
    useEffect(()=>{
        console.log("MyCustomComponent1 modified");
    });
    const showAlert = ()=>{
        alert(`Word 1:--> ${word1}, Word 2:--> ${word2}`);
    }
    return (
        <>
        <h3>'MyCustomComponent1' Here using two input box, each of them is a separate component and holding fifferent state</h3>
        <form>
            <Input1 setValueToParent={inputChanged} placeholder="Input first word"></Input1>
            <br></br>
            <Input2 setValueToParent={inputChanged} placeholder="Input second word"></Input2>
            <br></br>
            <button onClick={showAlert}>Click me to show alert</button>
        </form>
        </>
    );
}
export default MyCustomComponent1;