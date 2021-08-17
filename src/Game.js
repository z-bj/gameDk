import React, { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    if (this.state.winner) {
      return <h1>You win {this.state.name} !!!</h1>;
    } else {
      return <h1>You lose {this.state.name} !!!</h1>;
    }
  }
}

export default Result;
