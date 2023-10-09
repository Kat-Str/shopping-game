import NewMessage from "./images/new-message.png";
import Envelope from "./images/envelope.png";
import "./phone-notification.styles.css";

const PhoneNotification = () => {
  return (
    <div className="phone-notification">
      <img src={NewMessage} alt="phone" className="phone-image" />
      <img src={Envelope} alt="envelope" className="envelope-image" />
    </div>
  );
};

export default PhoneNotification;
