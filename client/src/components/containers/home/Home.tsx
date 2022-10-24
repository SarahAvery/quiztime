import HomeStyled from "./styles";
import { Link } from "react-router-dom";
import { testConfig } from "../testContainer/config";
import Nav from "../../ui/nav/Nav";

const Home = () => {
  return (
    <HomeStyled>
      <Nav />
      <div className="banner">
        <div className="banner-container">
          <div className="banner-img"></div>
        </div>
      </div>
      <main className="wrapper">
        <div className="container">
          <div className="paragraph">
            <h2>Get Started:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem
              aliquam consectetur explicabo sed odio eaque amet recusandae rem
              tenetur earum, laudantium, 🔥 deserunt cupiditate dicta ea
              aspernatur deleniti dolores excepturi.
            </p>
          </div>
          <div className="test-button-container">
            <p>Click a quiz to get started!</p>
            <ul>
              {testConfig.map((test) => (
                <li key={test.id} id={test.id}>
                  <Link to={`/test/${test.id}`} className="test-button">
                    {test.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="paragraph">
            <h2>Results:</h2>
            <p>
              Nemo corrupti sint nam ad perspiciatis voluptatem aliquid magni
              omnis ut architecto, blanditiis quos. Mollitia repellendus quo
              natus placeat ipsum blanditiis saepe itaque inventore, quod,
              voluptas quidem accusantium vitae facilis!
            </p>
          </div>
        </div>
      </main>
    </HomeStyled>
  );
};

export default Home;
