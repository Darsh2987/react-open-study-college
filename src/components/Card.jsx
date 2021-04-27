import React from "react";

// Components
import Spinner from "./Spinner.jsx";
import CardHeader from "./CardHeader.jsx";
import CardInfoBar from "./CardInfoBar.jsx";

function Card(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="card">
      <CardHeader data={props.data} />
      <CardInfoBar />
    </div>
  );
}

export default Card;
