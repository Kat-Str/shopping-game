import { Link } from "react-router-dom";
import "./game-menu.styles.css";
import Shopping from "./images/shopping-game-photo.png";
import Training from "./images/training-cat.png";

const GameMenu = () => {
  return (
    <div className="game-menu">
      <h1>Gry do nauki polskiego</h1>
      <h3 className="menu-subtitle">Games for learning Polish</h3>

      <div className="list-of-games">
        <div className="games-container">
          <div className="game-panel">
            <div>
              {" "}
              <Link to="/home">
                <img
                  src={Shopping}
                  alt="Game logo"
                  width={200}
                  height={180}
                  className="game-logo"
                />
              </Link>
              <h4>Shopping Game</h4>
            </div>

            <div className="game-description">
              <p>
                Grocery shopping might be quite challenging. Especially when you
                don't know how the products are called.
              </p>

              <p>
                <b>Requirements: </b>You should be familiar with food
                vocabulary.
              </p>
              <p>
                <b>Difficulty level: </b>Medium
              </p>
            </div>
          </div>

          <div className="game-panel">
            <div>
              {" "}
              <Link to="/home">
                <img
                  src={Training}
                  alt="Game logo"
                  width={200}
                  height={180}
                  className="game-logo"
                />
              </Link>
              <h4>Shopping Game</h4>
            </div>

            <div className="game-description">
              <p>
                Grocery shopping might be quite challenging. Especially when you
                don't know how the products are called.
              </p>

              <p>
                <b>Requirements: </b>You should be familiar with food
                vocabulary.
              </p>
              <p>
                <b>Difficulty level: </b>Medium
              </p>
            </div>
          </div>
        </div>
        <div className="games-container">
          <div className="game-panel">
            <div>
              {" "}
              <Link to="/home">
                <img
                  src={Training}
                  alt="Game logo"
                  width={200}
                  height={180}
                  className="game-logo"
                />
              </Link>
              <h4>Shopping Game</h4>
            </div>

            <div className="game-description">
              <p>
                Grocery shopping might be quite challenging. Especially when you
                don't know how the products are called.
              </p>

              <p>
                <b>Requirements: </b>You should be familiar with food
                vocabulary.
              </p>
              <p>
                <b>Difficulty level: </b>Medium
              </p>
            </div>
          </div>

          <div className="game-panel">
            <div>
              {" "}
              <Link to="/home">
                <img
                  src={Training}
                  alt="Game logo"
                  width={200}
                  height={180}
                  className="game-logo"
                />
              </Link>
              <h4>Shopping Game</h4>
            </div>

            <div className="game-description">
              <p>
                Grocery shopping might be quite challenging. Especially when you
                don't know how the products are called.
              </p>

              <p>
                <b>Requirements: </b>You should be familiar with food
                vocabulary.
              </p>
              <p>
                <b>Difficulty level: </b>Medium
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameMenu;
