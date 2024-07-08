import "./App.css";
import Home from "./Pages/Home";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
