import HomeStyled from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { testConfig } from "../testContainer/config";
import Nav from "../../ui/nav/Nav";
import { useState } from "react";

const Home = () => {
  const [testResultId, setTestResultId] = useState<string>("");

  const navigate = useNavigate();

  const onChange = (e: string) => {
    setTestResultId(e);
  };

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    navigate(`/results/${testResultId}`);
  };

  return (
    <HomeStyled>
      <Nav title="QuizTime!" link="/" />
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
              Already completed a test? Enter your unique result id here to see
              your results!
            </p>
            <div className="resultlink-container">
              <div className="submit-container">
                <label htmlFor="testId">Result Id:</label>
                <input
                  type="text"
                  name="testId"
                  onChange={(e) => onChange(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="button-container">
                <button onClick={onSubmit}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </HomeStyled>
  );
};

export default Home;
