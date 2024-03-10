import TextValidationHOC from "../../hocs/text-validation.hoc.component";
import "./text-input.component.css";
function InputComponent() {
  return (
    <input className="input" type="text"></input>
  )
}
const TextInputComponent = TextValidationHOC(InputComponent);
export default TextInputComponent;