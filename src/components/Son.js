import React from "react";

const Son = ({ counter, plus, minus }) => (
  <div>
    <p>Cuenta: {counter}</p>
    <button className="button is-success" onClick={plus}>
      mais morro
    </button>
    <button className="button is-danger" onClick={minus}>
      minus morro
    </button>
  </div>
);

export default Son;
