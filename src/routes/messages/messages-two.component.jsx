import React, { useState } from "react";
import { Link } from "react-router-dom";
import MessagesTwoImage from "./images/messages-two.png";
import ButtonArrow from "./images/button-arrow.png";
import ButtonArrowClick from "./images/button-arrow-click.png";

const MessagesTwo = () => {
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
        <img src={MessagesTwoImage} alt="messages" />
      </div>
      <div
        className="button-arrow"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/kitchen">
          <img src={isHovered ? ButtonArrowClick : ButtonArrow} alt="button" />
        </Link>
      </div>
    </div>
  );
};

export default MessagesTwo;
