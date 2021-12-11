import { useState } from "react";
import "./css/NavbarComponent.css";
import HamburgerMenuComponent from "./HamburgerMenuComponent";
import LogoComponent from "./LogoComponent";
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState("closed");
  return (
    <div className="nav">
      <LogoComponent />
      <HamburgerMenuComponent onClick={setIsOpen} />

      <div className={`nav-items ${isOpen}`}>
        <div className="nav-item">
          <a href="/">Home</a>
        </div>
        <div className="nav-item">
          <a href="/">Products</a>
        </div>
        <div className="nav-item">Resources</div>
        <div className="nav-item">
          <a href="/">Pricing</a>
        </div>
      </div>
    </div>
  );
};
export default NavbarComponent;
