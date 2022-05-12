import React from "react";
import logo from "../../img/pokemon_logo.png";
import "./Header.css";

function Header() {
    return (
      <header>
          <img className="logo" src={logo} alt="pokemon_logo"/>
      </header>
    );
  }
  
  export default Header;

