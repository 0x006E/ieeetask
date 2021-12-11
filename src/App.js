import "./App.css";
import FooterBottomComponent from "./components/FooterBottomComponent";
import LinksComponent from "./components/LinksComponent";
import MessageFormComponent from "./components/MessageFormComponent";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="middle">
        <div className="sideimg">&nbsp;</div>
        <MessageFormComponent />
      </div>
      <div className="footer">
        <LinksComponent />
        <FooterBottomComponent />
      </div>
    </>
  );
}

export default App;
