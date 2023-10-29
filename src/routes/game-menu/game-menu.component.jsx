import { Link } from "react-router-dom";
import "./game-menu.styles.css";

const GameMenu = () => {
  return (
    <div>
      <h1>Gry do nauki polskiego</h1>
      <h3 className="menu-subtitle">Games for learning Polish</h3>
      <Link to="/home">Shopping Game</Link>
    </div>
  );
};

export default GameMenu;
