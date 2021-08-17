import React, { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    let result;

    if (this.state.winner) {
      result = <h1>You win {this.state.name} !!!</h1>;
    } else {
      result = <h1>You lose {this.state.name} !!!</h1>;
    }
    return result;
  }
}

export default Result;
