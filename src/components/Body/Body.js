import React, { Component } from "react";
import "./Body.css";
import Card from "../Card";

class Body extends Component {

  render() {
    return (
      <div className="card-columns">
      {
        this.props.cardList.map((element, i) => {          
          return (
            <Card
              id={element.id}
              image={element.image}
              cardClick={() => this.props.cardClick(element.id)}
              key={i}
            />
          )
        })
      }
      </div>
    )
  }
}

export default Body;
