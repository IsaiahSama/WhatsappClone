import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/rooms/:roomId" element={[<Chat />]} />
            <Route path="/" element={[]} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
