import { Routes, Route, Link } from "react-router-dom";
import "./app.css";
import Red from "./Components/Red.jsx";
import Blue from "./Components/Blue.jsx";
import Home from "./Components/home.jsx";
import "./index.css";

function App() {
  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/home">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
