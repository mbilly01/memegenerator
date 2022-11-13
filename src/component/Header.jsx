import React from "react";
import logo from '../logo.svg';
const Header = () => {
  return (
    <header>
      <section className="logo-and-text">
        <img src={logo} alt="" />
        <strong>Meme Generator</strong>
      </section>
      <h3>Project 5 - Learn React.Js</h3>
    </header>
  );
}

export default Header;