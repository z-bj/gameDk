import React, { Component } from "react";

class Result extends Component {
  state = {
    name: "Mario",
    winner: true,
  };

  render() {
    return (
      <div>
        <h1>Bravo {this.state.name}</h1>
      </div>
    );
  }
}

export default Result;
