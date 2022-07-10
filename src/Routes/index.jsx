import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import House from "../pages/House/index.jsx";
import Login from "../pages/Login/index.jsx";
import SignUp from "../pages/SignUp/index.jsx";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/house/:id">
        <House />
      </Route>
    </Switch>
  );
}

export default Routes;
