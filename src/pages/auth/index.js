import { Redirect, Route, Switch } from "react-router-dom";
import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../utils/routePath";

const Auth = () => {
  console.log("auth");
  return (
    <div>
      form
      <div>
        <Switch>
          <Route path={SIGN_IN_PATH}>signIn</Route>
          <Route path={SIGN_UP_PATH}>signIn</Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
