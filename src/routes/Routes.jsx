import PrivateRoute from "../hoc/PrivateRoute";
import Home from "../pages/Home";
import { Switch, Route } from "react-router-dom";
import UnauthenticatedRoute from "../hoc/UnauthenticatedRoute";
import Auth from "../pages/auth";
import { AUTH_PATH, DASHBOARD_PATH, HOME_PATH } from "../utils/routePath";
import Dashboard from "../pages/dashboard";
import { Role } from "../utils/roles";

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute exact path={HOME_PATH} component={Home} />
      <PrivateRoute
        roles={Role.Admin}
        path={DASHBOARD_PATH}
        component={Dashboard}
      />
      <UnauthenticatedRoute path={AUTH_PATH} component={Auth} />
    </Switch>
  );
};

export default Routes;
