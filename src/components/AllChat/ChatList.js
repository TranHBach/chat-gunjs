import "./ChatList.css";
import ChatItem from "./ChatItem";
function ChatList() {
  return (
    <ul className="chat-list">
      <ChatItem name={"User 1"} chat={"Hello world"} />
      <ChatItem name={"User 1"} chat={"Hello world"} />
      <ChatItem name={"User 1"} chat={"Hello world"} />
    </ul>
  );
}

export default ChatList;
