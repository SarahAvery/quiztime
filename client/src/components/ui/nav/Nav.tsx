import { Link } from "react-router-dom";
import NavStyled from "./styles";

const Nav = () => {
  return (
    <NavStyled>
      <div className="wrapper">
        <Link to={"/"}>QuizTime!</Link>
      </div>
    </NavStyled>
  );
};

export default Nav;
