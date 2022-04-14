import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Cart from "./components/Cart/Cart";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/cart" exact component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
