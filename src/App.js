import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contact";
import Packages from "./components/pages/Packages";
import Hotels from "./components/pages/Hotels";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contacts} />
          <Route path="/packages" exact component={Packages} />
          <Route path="/hotels" exact component={Hotels} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;