import React from "react";

// Components
import Spinner from "./Spinner.jsx";
import CardHeader from "./CardHeader.jsx";

function Card(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="card">
      <CardHeader data={props.data} />
    </div>
  );
}

export default Card;
