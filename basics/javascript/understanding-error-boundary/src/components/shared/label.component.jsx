function LabelComponent(props) {
    if (props.text == '') {
        throw new Error('text under props is empty, inside label.component.jsx ');
    }
    return (
        <div>{props.text}</div>
    )
}

export default LabelComponent