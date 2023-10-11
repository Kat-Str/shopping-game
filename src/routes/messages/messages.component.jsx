import React, { useState } from "react";
import { Link } from "react-router-dom";
import MessagesOne from "./images/messages-one.png";
import ButtonArrow from "./images/button-arrow.png";
import ButtonArrowClick from "./images/button-arrow-click.png";
import HoverSound from "../../assets/audio/hover-button-sound.wav";
import "./messages.styles.css";

const Messages = () => {
  // Button animation
  const [isHovered, setIsHovered] = useState(false);
  const sound = new Audio(HoverSound);

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="phone-notification">
      <div className="messages">
        <img src={MessagesOne} alt="messages" />
      </div>
      <div
        className="button-arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/messages-two">
          <img src={isHovered ? ButtonArrowClick : ButtonArrow} alt="button" />
        </Link>
      </div>
    </div>
  );
};

export default Messages;
