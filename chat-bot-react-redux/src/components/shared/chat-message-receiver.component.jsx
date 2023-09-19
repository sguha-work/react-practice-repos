function ChatMessageReceiverComponent(props) {
    return (
        <div data-time={props.message.time} key={props.message.time} className="chat-message receiver">
            <p>{props.message.message}</p>
        </div>
    )
}

export default ChatMessageReceiverComponent