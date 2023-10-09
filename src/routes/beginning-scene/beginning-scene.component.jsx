import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dishes from "./images/dishes.png";
import PhoneOff from "./images/phone-off.png";
import PhoneOn from "./images/phone-on.png";
import "./beginning-scene.styles.css";
import MessageNotification from "../../assets/audio/message-notification.mp3";

const BeginningScene = () => {
  const [showNewImage, setShowNewImage] = useState(false);
  const audio = new Audio(MessageNotification);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewImage(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showNewImage) {
      audio.play();
    }
  }, [showNewImage, audio]);

  return (
    <div className="beginning-scene">
      <img src={Dishes} alt="dishes" className="dishes-image" width={500} />
      {showNewImage ? (
        <Link to="/notification">
          <img src={PhoneOn} alt="phone" className="phone-image" width={150} />
        </Link>
      ) : (
        <img src={PhoneOff} alt="phone" className="phone-image" width={150} />
      )}
    </div>
  );
};

export default BeginningScene;
