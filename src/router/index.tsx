import { Switch, Route } from "react-router-dom";
import { Signin } from "../pages/Signin";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Signin} />
  </Switch>
);
