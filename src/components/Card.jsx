import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1>{props.data.name}</h1>
    </div>
  );
}

export default Card;
