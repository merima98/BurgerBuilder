import React from "react";
import calsses from "./Toolbar.css";
import Logo from "../../Logo/Logo";
const toolbar = (props) => (
  <header className={calsses.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>...</nav>
  </header>
);

export default toolbar;
