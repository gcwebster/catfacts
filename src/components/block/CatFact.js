import React from "react";

function CatFact(props) {
  return (
    <>
      <h2>Your new fact</h2>
      <p className="fact">
        {props.newFact}
        <button onClick={props.saveFact} className="saveFact">
          <i className="fa fa-save saveIcon" />
        </button>
      </p>
    </>
  );
}

export default CatFact;
