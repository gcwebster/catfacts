import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fact: "" };
  }

  render() {
    return (
      <div className="App">
        <h1>Cat facts</h1>
        <p>
          Welcome to catfacts, click below to find out a new fact about cats
        </p>
        <button onClick={this.newFact}>New catfact</button>
        <p>{this.state.fact}</p>
      </div>
    );
  }

  newFact = () => {
    this.setState({
      fact: "cat's like mice"
    });
  };
}

export default App;
