import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component { 
  render() {
    return (
      <nav className="navbar fixed-top navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Memory Game</span>
        <span className="navbar-brand mb-0 h1">{this.props.status}</span>
        <span className="navbar-brand mb-0 h1">{this.props.score}</span>
      </nav>
    )
  }
}

export default Navbar;
