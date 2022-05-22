import "./AllChatText.css";
import IsTyping from "./IsTyping";
import ChatText from "./ChatText";

function AllChatText(props) {
  
  return (
    <div className="all-text">
      <ChatText from="you" text="awdawd" />
      <ChatText from="other" text="awdawd" />
      <ChatText from="you" text="awdawd" />
      <ChatText from="other" text="awdawd" />
      <ChatText from="you" text="awdawd" />
      <IsTyping />
    </div>
  );
}

export default AllChatText;
