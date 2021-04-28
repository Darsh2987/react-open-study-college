import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function CardCourse(props) {
  // Truncate function to show only a specified amout of letter
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="card_course">
      <FontAwesomeIcon icon={faGraduationCap} />
      <div className="card_course-current-course">
        <h2>Current Course:</h2>
        <p>{truncate(props.data.course_title, 20) || "No course currently assigned"}</p>
      </div>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

export default CardCourse;
