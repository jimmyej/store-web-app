import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Products from "./containers/Products";
import Register from "./containers/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
