import LiterallyAStraightLine from "../components/Helpers/LiterallyAStraigtLine";
import AllChat from "../components/AllChat/AllChat";
import CurrentChat from "../components/CurrentChat/CurrentChat";
import Auth from "../components/Auth/Auth";
import gunInit from "../middlewares/gunInit";
const gun = gunInit();

gun.get("key").on((state) => {
  console.log(state);
});

function Main(props) {
  function testHandler() {
    gun.get("key").get("hello", (ack) => {
      console.log(ack.put)
    })
  }
  return (
    <>
      <button onClick={testHandler}>Click me</button>
      <Auth />
      <div className="container">
        <div className="outline">
          <section className="chat-section">
            <AllChat />
            <LiterallyAStraightLine />
            <CurrentChat />
          </section>
        </div>
      </div>
    </>
  );
}

export default Main;
