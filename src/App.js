import React from "react";
import "./App.css";
import axios from "axios";
import Intro from "./components/block/Intro";
import CatFact from "./components/block/CatFact";
import SavedFacts from "./components/SavedFacts";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFact: "",
      favouriteFacts: [],
      error: ""
    };
  }

  render() {
    const { newFact, favouriteFacts, error } = this.state;

    return (
      <div className="App">
        <h1>Cat facts</h1>
        <Intro />

        <button onClick={this.getFactFromAPI}>New catfact</button>
        {newFact && <CatFact newFact={newFact} saveFact={this.saveFact} />}
        {favouriteFacts.length !== 0 && error === "" && (
          <SavedFacts favouriteFacts={favouriteFacts} />
        )}
        {error !== "" && <p className="error">{error}</p>}
      </div>
    );
  }

  getFactFromAPI = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then(result => {
        this.setState({
          newFact: result.data.fact
        });
      })
      .catch(error => {
        console.error(error);
        this.setState({
          error:
            "There's been a problem connecting to the catfact API. Try again. If this proplem persits the system might be down, try again later."
        });
      });
  };

  saveFact = () => {
    const { favouriteFacts, newFact } = this.state;
    if (!favouriteFacts.includes(newFact)) {
      this.setState({
        favouriteFacts: [...favouriteFacts, newFact]
      });
    }
  };
}

export default App;
