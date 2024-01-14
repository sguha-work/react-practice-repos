function PasswordInputComponent(props) {
    const onPasswordChange = (value) => {
        props.change(value);
    }
    return props.use({ change: onPasswordChange,type: "password", className: "password-input", value: "", title: "Enter password ---", placeholder: "Enter password ---" })
}

export default PasswordInputComponent