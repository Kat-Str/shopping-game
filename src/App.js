import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import BeginningScene from "./routes/beginning-scene/beginning-scene.component";
import PhoneNotification from "./routes/phone-notification/phone-notification.component";
import Messages from "./routes/messages/messages.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<BeginningScene />} />
        <Route path="/notification" element={<PhoneNotification />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
