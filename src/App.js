import React, { useState } from "react";
import "./App.css";
import { Authenticate } from "./components/Authenticate";

function App() {
  // const [showSideMenu, setShowSideMenu] = useState(false);

  function activateHamburger() {
    const sideMenu = document.getElementById("side-menu");
    if (!sideMenu) return;

    sideMenu.classList.toggle("active");
  }

  return (
    <>
      <div id="hamburger" onClick={activateHamburger}></div>
      <Authenticate />
    </>
  );
}

export default App;
