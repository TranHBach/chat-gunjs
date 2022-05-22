function ChatItem(props) {
  return <li className="chat-item">
      <h2>{props.name}</h2>
      <span>You: {props.chat}</span>
  </li>;
}

export default ChatItem
