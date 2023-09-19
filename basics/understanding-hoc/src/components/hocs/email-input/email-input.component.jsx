function EmailInputComponent(props) {
    const onEmailChange = (value) => {
        props.change(value);
    }
    return props.use({ change: onEmailChange, type: "email", className: "email-input", value: "", title: "Enter email ---", placeholder: "Enter email ---" })
}

export default EmailInputComponent