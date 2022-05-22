import "./SendText.css";

function SendText(props) {

  return (
    <form className="send-text">
      <input id="input-text" />
      <label htmlFor="input-text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="send-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          />
        </svg>
      </label>
    </form>
  );
}

export default SendText;
