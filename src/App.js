import "./App.css";
import FooterBottom from "./components/FooterBottom";
import LinksComponent from "./components/LinksComponent";
import LogoComponent from "./components/LogoComponent";
import MessageForm from "./components/MessageForm";

function App() {
  return (
    <>
      <div className="nav">
        <LogoComponent />
      </div>
      <div className="middle">
        <div className="sideimg">&nbsp;</div>
        <MessageForm />
      </div>
      <div className="footer">
        <LinksComponent />
        <FooterBottom />
      </div>
    </>
  );
}

export default App;
