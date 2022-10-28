import NotFoundStyled from "./styles";

const NotFound = () => {
  return (
    <NotFoundStyled>
      <div className="content-container">
        <div className="title">
          <p>Opps!</p>
        </div>
        <div className="img-container">
          <div className="img"></div>
        </div>
        <div className="para">
          <p>Looks like the page you wanted could not be found!</p>
        </div>
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
