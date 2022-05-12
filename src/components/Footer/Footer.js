import React from "react";
import logo from "../../img/github_logo.png";
import "./Footer.css";

function Footer() {
    return (
      <footer>
          <img className="githublogo" src={logo} alt="github_logo"/>
      </footer>
    );
  }
  
  export default Footer;
