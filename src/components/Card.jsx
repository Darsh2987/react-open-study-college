import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../images/profile-picture.jpg";

// Components
import Spinner from "./Spinner.jsx";

function Card(props) {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <div className="card">
      <div className="card_header">
        <FontAwesomeIcon icon={faTimes} />
        <div className="card_profile">
          <img src={profilePicture} className="card_profile-picture" alt="Profile" />
          <FontAwesomeIcon icon={faCheck} />
          <h1 className="card_profile-name">{props.data.name}</h1>
          <h3 className="card_profile-status">{props.data.status}</h3>
          <h3 className="card_profile-id">ID: {props.data.id}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
