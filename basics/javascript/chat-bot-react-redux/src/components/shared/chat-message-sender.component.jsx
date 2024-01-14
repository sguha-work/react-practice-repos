function ChatMessageSenderComponent(props) {
    return (
        <div data-time={props.message.time} key={props.message.time} className="chat-message sender">
            <div className="chat-face" />
            <p>{props.message.message}</p>
        </div>
    )
}

export default ChatMessageSenderComponent