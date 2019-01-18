import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import cardList from "./cardList.json";

import "./App.css";

class App extends Component {
  isCardClicked(id) {
    for(let i = 0; i < this.state.cardsClicked.length; i++) {
      if(this.state.cardsClicked.indexOf(id) > -1) {
        return true;
      }
    }
    return false;
  }

  shuffleArray(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  cardClick (id) {
    let newScore = this.state.score;
    let newCardsClicked = [];
    let newStatus = "Good, you have not clicked that card yet.";

    if(this.isCardClicked(id) === true) {
      newScore = 0;
      newStatus = "This card is already clicked. Start over.";
    } else {
      newCardsClicked = this.state.cardsClicked.slice(0);
      newCardsClicked.push(id);
      newScore++;
    }

    this.setState({
      cardList: this.shuffleArray(this.state.cardList),
      cardsClicked: newCardsClicked,
      score: newScore,
      status: newStatus
    });
  };

  constructor(props) {
    super(props)

    this.cardClick = this.cardClick.bind(this)

    this.state = {
      cardList,
      status: "",
      score: 0,
      cardsClicked: []
    };
  }
  
  render() {
    return (
      <div>
        <Navbar
          status={this.state.status}
          score={this.state.score}
        />
        <Jumbotron
          title="Cool stuff Memory Game"
          body="Click on a picture to start. As long as you dont click on the same picture, you'll keep getting points."
        />
        <div className="container">
          <Body 
            cardList={this.state.cardList}
            cardClick={this.cardClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
