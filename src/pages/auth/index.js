import { Button } from "@material-ui/core";
import { Link, Redirect, Route, Switch, useLocation } from "react-router-dom";
import SignUpForm from "../../components/forms/sign-up-form/SignUpForm";
import { SIGN_IN_PATH, SIGN_UP_PATH } from "../../utils/routePath";
import SignIn from "./SignIn";

const Auth = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route path={SIGN_IN_PATH}>
            <SignIn />
          </Route>
          <Route path={SIGN_UP_PATH}>
            <SignUpForm />
          </Route>
          <Redirect to={SIGN_IN_PATH} />
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
