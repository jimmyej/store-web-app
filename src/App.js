import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import Login from "./containers/Login";
import ForgotPassword from "./containers/Login/ForgotPassword";
import NotFound from "./containers/NotFound";
import Products from "./containers/Products";
import Register from "./containers/Register";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
