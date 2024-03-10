import React from 'react'

function TextValidationHOC(Component) {
    return function WrappedComponent(props) {
        const textValueChanged = (event)=>{
            console.log(event.target.value);
        }
        return (
            <Component {...props} onChange={textValueChanged}></Component>
        )
    }
}

export default TextValidationHOC;