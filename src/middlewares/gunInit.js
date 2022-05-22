import Gun from "gun";
import "gun/sea";
import "gun/axe";

function gunInit() {
  const gun = Gun({peers: [`http://localhost:8080/gun`]});
  return gun;
}

export default gunInit;
