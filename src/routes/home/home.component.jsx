import Grocery from "./images/shopping-cats.gif";
import DefaultButton from "../../components/default-button/default-button.component";
import { Link } from "react-router-dom";

const Home = () => {
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
      <Link to="/start">
        <DefaultButton buttonText="START" />
      </Link>
    </div>
  );
};

export default Home;
