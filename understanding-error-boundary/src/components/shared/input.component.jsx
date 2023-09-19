function InputComponent(props) {
    const checkForError = (event) => {
        switch (props.type) {
            case "text":
                if (event.target.value == '') {
                    throw new Error("Value is empty");
                }
                break;
            case "number":
                if (isNaN(parseInt(event.target.value))) {
                    throw new Error("Value is not a number");
                }
                break;
        }
    }
    return (
        <>
            <input title={props.title} onChange={checkForError} />
        </>
    )
}

export default InputComponent