import { useState } from "react"
import Form1Component from "./form1.component"
import Form2Component from "./form2.component"

function FormContainerComponent() {
    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(false);
    const displayForm1 = () => {
        setDisplay1(true);
        setDisplay2(false);
    }
    const displayForm2 = () => {
        setDisplay1(false);
        setDisplay2(true);
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            {display1 && (<Form1Component></Form1Component>)}
                        </td>
                        <td className={display2 ? "show" : "hide"}>
                            {display2 && (<Form2Component></Form2Component>)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={displayForm1}>1</button>
                        </td>
                        <td>
                            <button onClick={displayForm2}>2</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default FormContainerComponent