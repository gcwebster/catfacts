import React from "react";

function SavedFacts(props) {
  return (
    <div className="savedFacts">
      <h2>Your saved facts</h2>
      <ul>
        {props.favouriteFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default SavedFacts;
