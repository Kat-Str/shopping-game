import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dishes from "./images/dishes.png";
import PhoneOff from "./images/phone-off.png";
import PhoneOn from "./images/phone-on.png";
import "./beginning-scene.styles.css";

const BeginningScene = () => {
  const [showNewImage, setShowNewImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewImage(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
