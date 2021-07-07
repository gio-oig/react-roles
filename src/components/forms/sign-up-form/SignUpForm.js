import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { SIGN_IN_PATH } from "../../../utils/routePath";
import CustomLink from "../../atoms/Button/CustomLink";
import useStyles from "./SignUpForm.style";

const SignUpForm = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <CustomLink path={SIGN_IN_PATH} variant="body2">
                {"have an account? Sign In"}
              </CustomLink>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default SignUpForm;
