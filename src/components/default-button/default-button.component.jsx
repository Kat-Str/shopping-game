import "./default-button.styles.css";

const DefaultButton = (props) => {
  const { buttonText } = props;
  return (
    <button className="button-82-pushable" role="button">
      <span className="button-82-shadow"></span>
      <span className="button-82-edge"></span>
      <span className="button-82-front text">{buttonText}</span>
    </button>
  );
};

export default DefaultButton;
