import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Gun from "gun";
import "gun/sea"
import "gun/axe"
import "./SignupBox.css";
import logInHandler from "../../middlewares/logInHandler";

function SignupBox() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const gun = Gun();
  const user = gun.user();

  function signUpHandler(event) {
    event.preventDefault();
    user.create(usernameRef.current.value, passwordRef.current.value, (feedback) => {
      if (feedback.err) {
        alert(feedback.err)
      }
      logInHandler(usernameRef.current.value, passwordRef.current.value)
      navigate("/login");
    });
  }
  return (
    <form onSubmit={signUpHandler} className="signup-section">
      <h1>Sign Up for Chat</h1>
      <div className="signup-input">
        <label htmlFor="signup-email">Email</label>
        <input
          ref={emailRef}
          type={"email"}
          id="signup-email"
          placeholder="Email"
        ></input>
      </div>
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
      <div className="signup-input">
        <label htmlFor="signup-confirm">Confirm Password</label>
        <input
          type={"password"}
          id="signup-confirm"
          placeholder="Confirm Password"
        ></input>
      </div>
      <div className="btn-signup-box">
        <button>Sign Up Now</button>
      </div>
    </form>
  );
}

export default SignupBox;
