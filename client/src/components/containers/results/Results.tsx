import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../ui/nav/Nav";
import ResultsTable from "../../ui/resultsTable/ResultsTable";
import ResultsStyled from "./styles";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState<Record<string, any>>({});

  useEffect(() => {
    fetch(`http://localhost:3001/test/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, [id]);

  return (
    <ResultsStyled>
      <Nav />
      <main className="wrapper">
        <div className="title">
          <h2>Results</h2>
        </div>
        <div className="container results-container">
          <div className="results">
            <div className="score">
              <p>Score: {results?.percent}%</p>
            </div>
            <div className="row-container">
              <div className="row">
                <p>Test:</p>
                <p>{results?.testName}</p>
              </div>
              <div className="row">
                <p>Score:</p>
                <p>{results?.percent}%</p>
              </div>
              <div className="row">
                <p>Passing Percent:</p>
                <p>70%</p>
              </div>
              <div className="row">
                <p>Status:</p>
                <p>{results?.percent > 70 ? "Passed" : "Failed"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Review</h2>
        </div>
        <div className="container review-container">
          <div className="review">
            {results.qaMap && (
              <ResultsTable
                resultsData={results.qaMap}
                testId={results.testId}
              />
            )}
          </div>
        </div>
      </main>
    </ResultsStyled>
  );
};

export default Results;
