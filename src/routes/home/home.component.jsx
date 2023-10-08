import Grocery from "./images/grocery.png";
import DefaultButton from "../../components/default-button/default-button.component";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Zakupy</h1>
      <img src={Grocery} alt="grocery" width={400} />
      <Link to="/start">
        <DefaultButton />
      </Link>
    </div>
  );
};

export default Home;
