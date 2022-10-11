import HomeStyled from "./styles";
import { Link } from "react-router-dom";
import { testConfig } from "../testContainer/config";

const Home = () => {
  return (
    <div className="wrapper">
      <HomeStyled>
        <h1>Welcome</h1>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, totam numquam modi ullam id tempora
          molestias, iusto quibusdam quas nulla, doloremque et ut. Adipisci sequi quos consectetur officia minima
          deserunt!
        </div>
        <div className="test-button-container">
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
      </HomeStyled>
    </div>
  );
};

export default Home;
