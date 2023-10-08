import { Link } from "react-router-dom";
import Dishes from "./images/dishes.png";
import PhoneOff from "./images/phone-off.png";

const BeginningScene = () => {
  return (
    <div className="beginning-scene" style={{ position: "relative" }}>
      <img
        src={Dishes}
        alt="dishes"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <Link to="/notification">
        <img
          src={PhoneOff}
          alt="phone"
          style={{ position: "absolute", top: 490, left: 700, zIndex: 2 }}
          width={300}
        />
      </Link>
    </div>
  );
};

export default BeginningScene;
