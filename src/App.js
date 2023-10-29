import "./App.css";
import { Routes, Route } from "react-router-dom";
import GameMenu from "./routes/game-menu/game-menu.component";
import Home from "./routes/home/home.component";
import BeginningScene from "./routes/beginning-scene/beginning-scene.component";
import PhoneNotification from "./routes/phone-notification/phone-notification.component";
import Messages from "./routes/messages/messages.component";
import MessagesTwo from "./routes/messages/messages-two.component";
import Kitchen from "./routes/kitchen/kitchen.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GameMenu />} />
        <Route path="/home" element={<Home />} />
        <Route path="/start" element={<BeginningScene />} />
        <Route path="/notification" element={<PhoneNotification />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages-two" element={<MessagesTwo />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
}

export default App;
