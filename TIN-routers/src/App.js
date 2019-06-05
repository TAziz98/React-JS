import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory,
  IndexRoute
} from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div>
        <label id="homepage">
          <Link to="/">Home</Link>
        </label>

        <button class="mybutton">
          <Link to="/about">About</Link>
        </button>

        <button class="mybutton">
          <Link to="/contact">Contact</Link>
        </button>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
