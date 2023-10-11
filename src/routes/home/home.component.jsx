import React, { useState } from "react";
import Grocery from "./images/shopping-cats.gif";
import { Link } from "react-router-dom";
import ButtonStart from "./images/start-button.png";
import ButtonStartClick from "./images/start-button-click.png";
import StartSound from "../../assets/audio/start-sound.wav";
import "./home.styles.css";

const Home = () => {
  // Hover
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //Click
  const handleClick = () => {
    const sound = new Audio(StartSound);
    sound.play();
  };

  return (
    <div>
      <h1
        title='It means "shopping" in Polish'
        style={{ fontSize: "60px", fontWeight: "normal" }}
      >
        Zakupy
      </h1>
      <img src={Grocery} alt="grocery" width={300} />
      <br />
      <div className="button-div">
        <Link to="/start">
          <img
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="start-button"
            src={isHovered ? ButtonStartClick : ButtonStart}
            alt="start"
            width={210}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
