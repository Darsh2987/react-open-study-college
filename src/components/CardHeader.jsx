import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import profilePicture from "../images/profile-picture.jpg";

function CardHeader(props) {
  console.log(props.data.name);

  // Function to Capitalise Name
  const capitaliseName = (str) => {
    const words = str.split(" ");
    return words.map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase()).join(" ");
  };

  return (
    <div className="card_header">
      <FontAwesomeIcon icon={faTimes} />
      <div className="card_profile">
        <div className="card_profile-picture-wrapper">
          <img src={profilePicture} className="card_profile-picture" alt="Profile" />
          <FontAwesomeIcon icon={faCheck} />
        </div>

        <h1 className="card_profile-name">{capitaliseName(props.data.name) || "TBA"}</h1>
        <h3 className="card_profile-status">{props.data.status || "TBA"}</h3>
        <h3 className="card_profile-id">ID: {props.data.id || "TBA"}</h3>
      </div>
    </div>
  );
}

export default CardHeader;
