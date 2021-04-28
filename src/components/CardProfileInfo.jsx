import React from "react";

function CardProfileInfo(props) {
  // Email Validation
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Phone Number Validate
  function validatePhone(phone) {
    const regex = /^([+|\d])+([\s|\d])+([\d])$/;
    return regex.test(phone);
  }

  console.log(props.data.email);
  console.log(props.data.telephone);

  return (
    <div className="card_profile-info">
      <div className="card_profile-info-contact">
        <h2>Contact Details</h2>
        <p>Email: {validateEmail(props.data.email) ? props.data.email : "Invalid Email"}</p>
        <br />
        <p>Tel: {validatePhone(props.data.telephone) ? props.data.telephone : "Invalid Phone No."}</p>
      </div>
      <div className="card_profile-info-about">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit obcaecati, dolorum vel neque unde quod fugiat.</p>
      </div>
    </div>
  );
}

export default CardProfileInfo;
