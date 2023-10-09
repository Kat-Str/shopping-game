import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewMessage from "./images/new-message.png";
import Envelope from "./images/envelope.png";
import EnvelopeOpen from "./images/envelope-open.png";
import "./phone-notification.styles.css";

const PhoneNotification = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="phone-notification">
      <img src={NewMessage} alt="phone" className="phone-image" />
      <div
        className="envelope-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/messages">
          <img
            src={isHovered ? EnvelopeOpen : Envelope}
            alt={isHovered ? "envelope-open" : "envelope"}
            className="envelope"
          />
        </Link>
      </div>
    </div>
  );
};

export default PhoneNotification;
