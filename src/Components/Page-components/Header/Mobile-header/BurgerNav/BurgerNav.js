import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import "./BurgerNav.css";
import NavigationList from "./NavigationList";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

const BurgerNav = () => (
  <div >
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <NavigationList close={close} />}
    </Popup>
  </div>
);

export default BurgerNav