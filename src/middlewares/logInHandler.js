import gunInit from "./gunInit";

function logInHandler(username, password, cb) {
  const gun = gunInit()
  const user = gun.user();
  
  user.auth(username, password, (userReference) => {
    console.log(userReference);
    // cb(userReference)
  });
}

export default logInHandler;
