import { Link } from "react-router-dom";
import NavStyled from "./styles";

const Nav = ({ title, link = "/" }: { title: string; link: string }) => {
  return (
    <NavStyled>
      <div className="wrapper">
        <Link to={link}>{title}</Link>
      </div>
    </NavStyled>
  );
};

export default Nav;
