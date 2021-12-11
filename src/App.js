import "./App.css";
import FooterBottom from "./components/FooterBottom";
import LinksComponent from "./components/LinksComponent";
import MessageForm from "./components/MessageForm";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
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
