import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img 
          src={this.props.image} 
          className="card-img-top" 
          alt="..."
          onClick={this.props.cardClick}
        />        
      </div>
    )
  };
}
export default Card;
