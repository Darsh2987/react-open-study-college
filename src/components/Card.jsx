import React from "react";

// Components
import Spinner from "./Spinner.jsx";
import CardHeader from "./CardHeader.jsx";
import CardInfoBar from "./CardInfoBar.jsx";
import CardProfileInfo from "./CardProfileInfo.jsx";
import CardCourse from "./CardCourse.jsx";

function Card(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="card">
      <CardHeader data={props.data} />
      <CardInfoBar />
      <CardProfileInfo data={props.data} />
      <CardCourse data={props.data} />
    </div>
  );
}

export default Card;
