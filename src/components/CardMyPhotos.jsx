import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Images
import PhotoOne from "../images/photo-1.jpg";
import PhotoTwo from "../images/photo-2.jpg";
import PhotoThree from "../images/photo-3.jpg";
import PhotoFour from "../images/photo-4.jpg";

function CardMyPhotos() {
  return (
    <section className="card_my-photos">
      <div className="card_my-photos-headline">
        <h2>My Photos</h2>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className="card_my-photos-gallery">
        <div className="card_my-photos-gallery-image w-2 h-2">
          <img src={PhotoOne} alt="My Photos One" />
        </div>
        <div className="card_my-photos-gallery-image w-2">
          <img src={PhotoTwo} alt="My Photos Two" />
        </div>
        <div className="card_my-photos-gallery-image">
          <img src={PhotoThree} alt="My Photos Three" />
        </div>
        <div className="card_my-photos-gallery-image">
          <img src={PhotoFour} alt="My Photos Four" />
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </section>
  );
}

export default CardMyPhotos;
