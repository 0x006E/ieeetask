import "./App.css";
import LogoComponent from "./components/LogoComponent";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <>
      <div className="nav">
        <LogoComponent />
      </div>
      <MessageForm />
      <div className="footer">
        <div className="links">
          <LogoComponent />
          Design amazing digital experiences that create more happy in the
          world.
        </div>
        <div className="socialIcons">Github</div>
      </div>
    </>
  );
}

export default App;
