import React from "react";

// Components
import Spinner from "./Spinner.jsx";

function Card(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="card">
      <h1>{props.data.name}</h1>
    </div>
  );
}

export default Card;
