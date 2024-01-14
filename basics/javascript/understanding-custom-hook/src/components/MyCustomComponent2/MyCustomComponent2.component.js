import {useEffect} from 'react';
import useInput from '../../hooks/useInput';
function MyCustomComponent2() {
    let input1 = null, input2 = null;
    const inputChanged = (number, value) => {
        switch(number) {
            case 1:
                input1 = value;
                break;
            case 2:
                input2 = value;
                break;
            default:
                break;
        }
    }
    const [word1, setWord1, resetWord1] = useInput('');
    const [word2, setWord2, resetWord2] = useInput('');
    useEffect(()=>{
        console.log("MyCustomComponent2 modified");
    });
    const showAlert = ()=>{
        alert(`Word 1:--> ${word1}, Word 2:--> ${word2}`);
    }
    return (
        <>
        <h3>'MyCustomComponent2' Here using two input box, each of them is a separate component and holding fifferent state</h3>
        <form>
            <input {...setWord1} type="text"></input>
            <br></br>
            <input {...setWord2} type="text"></input>
            <br></br>
            <button onClick={showAlert}>Click me to show alert</button>
        </form>
        </>
    );
}
export default MyCustomComponent2;