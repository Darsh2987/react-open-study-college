import React from "react";

function CardProfileInfo(props) {
  return (
    <div className="profile-info">
      <div className="profile-info_contact">
        <h2>Contact Details</h2>
        <p>Email: {props.data.email}</p>
        <p>Tel: {props.data.telephone}</p>
      </div>
      <div className="profile-info_about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati, dolorum vel neque unde quod fugiat.</p>
      </div>
    </div>
  );
}

export default CardProfileInfo;
