import React from "react";

function CardProfileInfo(props) {
  return (
    <div className="card_profile-info">
      <div className="card_profile-info-contact">
        <h2>Contact Details</h2>
        <p>Email: {props.data.email ? props.data.email : "TBA"}</p>
        <br />
        <p>Tel: {props.data.telephone ? props.data.telephone : "TBA"}</p>
      </div>
      <div className="card_profile-info-about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati, dolorum vel neque unde quod fugiat.</p>
      </div>
    </div>
  );
}

export default CardProfileInfo;
