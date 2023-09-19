import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postChat, receiveBotReply } from "../../redux/actions/chat.action";
function ChatInputContainerComponent() {
    const counter = useRef(0);
    const inputElement = useRef();
    const dispatch = useDispatch();
    const receiveReply = () => {
        switch(counter.current) {
            case 0:
                dispatch(receiveBotReply({
                    message: "hello",
                    type: "sender",
                    time: Date.now()
                }));
                break;
            case 1:
                dispatch(receiveBotReply({
                    message: "what is your name",
                    type: "sender",
                    time: Date.now()
                }));
                break;
            case 2:
                dispatch(receiveBotReply({
                    message: "link",
                    type: "sender",
                    time: Date.now()
                }));
                break
        }
        counter.current = counter.current + 1;
    }
    const sendMessage = () => {
        if (inputElement.current.value != '') {
            dispatch(postChat({
                type: "receiver",
                message: inputElement.current.value,
                time: Date.now()
            }));
            inputElement.current.value = '';
            window.setTimeout(()=>{
                receiveReply();
            },1000);
        }
    }
    return (
        <div key="chat-input-container" className="input-container">
            <input type="text" placeholder="Type your message..." ref={inputElement} />
            <button className="send-button" onClick={sendMessage}>Send</button>
        </div>
    )
}
export default ChatInputContainerComponent