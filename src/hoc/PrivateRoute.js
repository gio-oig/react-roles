import { Redirect, Route } from "react-router-dom";
import { AUTH_PATH, HOME_PATH } from "../utils/routePath";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
          return <Redirect to={AUTH_PATH} />;
        }

        if (roles && roles.indexOf(user.roles) === -1) {
          return <Redirect to={HOME_PATH} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
