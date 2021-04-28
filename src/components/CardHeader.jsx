import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../images/profile-picture.jpg";

function CardHeader(props) {
  return (
    <div className="card_header">
      <FontAwesomeIcon icon={faTimes} />
      <div className="card_profile">
        <div className="card_profile-picture-wrapper">
          <img src={profilePicture} className="card_profile-picture" alt="Profile" />
          <FontAwesomeIcon icon={faCheck} />
        </div>

        <h1 className="card_profile-name">{props.data.name ? props.data.name : "TBA"}</h1>
        <h3 className="card_profile-status">{props.data.status ? props.data.status : "TBA"}</h3>
        <h3 className="card_profile-id">ID: {props.data.id ? props.data.id : "TBA"}</h3>
      </div>
    </div>
  );
}

export default CardHeader;
