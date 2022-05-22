import AllChatText from "./AllChatText";
import "./CurrentChat.css";
import SendText from "./SendText";

let currentIndex;

function CurrentChat(props) {
  return (
    <div className="current-chat">
      <h1>
        {"Name"}
      </h1>
      <AllChatText>
        {/* <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/>
          <ChatText from="other" text="awdawd"/> */}
      </AllChatText>
      <SendText
        socket={props.socket}
        currentIndex={currentIndex}
      />
    </div>
  );
}

export default CurrentChat;
