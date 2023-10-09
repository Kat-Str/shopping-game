import React, { useState } from "react";
import MessagesOne from "./images/messages-one.png";
import MessagesTwo from "./images/messages-two.png";
import ButtonArrow from "./images/button-arrow.png";
import ButtonArrowClick from "./images/button-arrow-click.png";

const Messages = () => {
  // New message appears
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  // Button animation
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="phone-notification">
      <div className="messages">
        <img src={isClicked ? MessagesTwo : MessagesOne} alt="messages" />
      </div>
      <div
        className="button-arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={isHovered ? ButtonArrowClick : ButtonArrow}
          alt="button"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Messages;
