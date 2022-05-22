import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logInHandler from "../../middlewares/logInHandler";

function LoginBox() {
  const navigate = useNavigate();
  const usernameRef = useRef();
  const passwordRef = useRef();

  function logUserIn(event) {
    event.preventDefault();
    logInHandler(usernameRef.current.value, passwordRef.current.value);
    navigate("/");
  }

  return (
    <form
      onSubmit={logUserIn}
      className="signup-section"
      style={{ height: "25rem" }}
    >
      <h1>Log In Chat</h1>
      <div className="signup-input">
        <label htmlFor="signup-username">Username</label>
        <input
          ref={usernameRef}
          type={"text"}
          id="signup-username"
          placeholder="Username"
        ></input>
      </div>
      <div className="signup-input">
        <label htmlFor="signup-password">Password</label>
        <input
          ref={passwordRef}
          type={"password"}
          id="signup-password"
          placeholder="Password"
        ></input>
      </div>
      <div className="btn-signup-box">
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginBox;
