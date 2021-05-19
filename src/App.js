import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <h1>My way</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/details/abc">Details</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/details/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
