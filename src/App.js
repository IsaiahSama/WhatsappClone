import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <Router>
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/rooms/:roomId" element={[<Chat />]} />
              <Route path="/" element={[]} />
            </Routes>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
