import "./App.css";
import LinksComponent from "./components/LinksComponent";
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
        <LinksComponent />
        <div className="socialIcons">Github</div>
      </div>
    </>
  );
}

export default App;
