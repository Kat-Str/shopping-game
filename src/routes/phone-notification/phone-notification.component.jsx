import NewMessage from "./images/new-message.png";
import Envelope from "./images/envelope.png";

const PhoneNotification = () => {
  return (
    <div className="phone-notification">
      <img src={NewMessage} alt="phone" />
      <img src={Envelope} alt="envelope" />
    </div>
  );
};

export default PhoneNotification;
