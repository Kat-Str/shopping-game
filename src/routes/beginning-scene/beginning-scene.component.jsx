import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dishes from "./images/dishes-gif.gif";
import PhoneOff from "./images/phone-off.png";
import PhoneOn from "./images/phone-on.png";
import Reaction from "./images/notification-reaction.png";
import "./beginning-scene.styles.css";
import MessageNotification from "../../assets/audio/message-notification.mp3";
import DishesSound from "../../assets/audio/ambience/dishes-sound-4s.mp3";
import TapWater from "../../assets/audio/ambience/tap-water.mp3";

const BeginningScene = () => {
  const [showNewImage, setShowNewImage] = useState(false);
  const [hisReaction, setHisReaction] = useState(false);
  const audio = new Audio(MessageNotification);
  const dishesAudio = new Audio(DishesSound);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowNewImage(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setHisReaction(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (showNewImage && !hisReaction) {
      audio.play();
    }
  }, [showNewImage, hisReaction, audio]);

  useEffect(() => {
    dishesAudio.oncanplaythrough = () => {
      setAudioReady(true);
    };

    return () => {
      dishesAudio.pause();
      dishesAudio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (audioReady) {
      dishesAudio.play();
    }
  }, [audioReady]);

  return (
    <div className="beginning-scene">
      <audio autoPlay loop>
        <source src={TapWater} type="audio/mpeg" />
      </audio>
      {hisReaction ? (
        <img src={Reaction} alt="dishes" className="dishes-image" width={500} />
      ) : (
        <img src={Dishes} alt="dishes" className="dishes-image" width={500} />
      )}
      {showNewImage ? (
        <Link to="/notification">
          <img
            src={PhoneOn}
            alt="phone"
            className="phone-image  phone-with-message"
            width={150}
          />
        </Link>
      ) : (
        <img src={PhoneOff} alt="phone" className="phone-image" width={150} />
      )}
    </div>
  );
};

export default BeginningScene;
