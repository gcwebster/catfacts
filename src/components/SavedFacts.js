import React from "react";

function SavedFacts(props) {
  return (
    <div className="savedFacts">
      <h2>Your saved facts</h2>
      {props.favouriteFacts.map((fact, index) => (
        <p className="fact" key={index}>
          {fact}
        </p>
      ))}
    </div>
  );
}

export default SavedFacts;
