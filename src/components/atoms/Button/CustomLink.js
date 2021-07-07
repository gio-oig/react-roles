import { Button, Link } from "@material-ui/core";
import { useHistory } from "react-router";

const CustomLink = ({ path, children, ...rest }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(path);
  };
  return (
    <>
      <Link {...rest} onClick={handleClick}>
        {children}
      </Link>
    </>
  );
};

export default CustomLink;
