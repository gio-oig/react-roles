import { Redirect, Route } from "react-router";
import { HOME_PATH } from "../utils/routePath";

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const user = localStorage.getItem("user");
  return user ? (
    <Redirect to={HOME_PATH} />
  ) : (
    <Route {...rest} component={Component} />
  );
};

export default UnauthenticatedRoute;
