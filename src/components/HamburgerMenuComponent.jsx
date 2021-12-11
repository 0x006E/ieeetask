import { useState } from "react";
import "./css/HamburgerMenuComponent.css";
const HamburgerMenuComponent = (props) => {
  const [state, setState] = useState("closed");
  return (
    <div
      id="hamburgermenu"
      className={state}
      onClick={() => {
        let currState = state === "open" ? "closed" : "open";
        setState(currState);
        props.onClick && props.onClick(currState);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
export default HamburgerMenuComponent;
