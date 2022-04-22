import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contact";
import Packages from "./components/pages/Packages"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/packages" element={<Packages/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
