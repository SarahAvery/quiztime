import HomeStyled from "./styles";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="wrapper">
      <HomeStyled>
        <div>Welcome....</div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, totam numquam modi ullam id tempora
          molestias, iusto quibusdam quas nulla, doloremque et ut. Adipisci sequi quos consectetur officia minima
          deserunt! Molestiae, voluptatum delectus, blanditiis labore, quidem veniam suscipit temporibus adipisci nihil
          quis quae. Voluptatibus architecto esse corporis enim. Officiis tenetur corrupti error, odit mollitia hic
          deserunt nulla officia laborum esse!
        </div>
        <div className="test-button-container">
          <div id="test-one">
            <Link to="/test/test-one" className="test-button">
              Test One
            </Link>
          </div>
          <div id="test-two">
            <Link to="/test/test-two" className="test-button">
              Test Two
            </Link>
          </div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, totam numquam modi ullam id tempora
          molestias, iusto quibusdam quas nulla, doloremque et ut. Adipisci sequi quos consectetur officia minima
          deserunt! Molestiae, voluptatum delectus, blanditiis labore, quidem veniam suscipit temporibus adipisci nihil
          quis quae. Voluptatibus architecto esse corporis enim. Officiis tenetur corrupti error, odit mollitia hic
          deserunt nulla officia laborum esse!
        </div>
      </HomeStyled>
    </div>
  );
};

export default Home;
