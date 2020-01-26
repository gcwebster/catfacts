import React from "react";

function CatFact(props) {
  return (
    <>
      <p>
        {props.newFact}
        <button onClick={props.saveFact} className="saveFact">
          <i className="fa fa-save saveIcon" />
        </button>
      </p>
    </>
  );
}

export default CatFact;
