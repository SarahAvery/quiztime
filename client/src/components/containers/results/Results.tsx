import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../ui/nav/Nav";
import NotFound from "../../ui/notFound/NotFound";
import ResultsTable from "../../ui/resultsTable/ResultsTable";
import ClipboardCopy from "../copyToClipboard/CopyToClipboard";
import { Pie } from "../pie/Pie";
import ResultsStyled from "./styles";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState<Record<string, any>>({});

  console.log(!results.testId);

  const percent = results?.percent;

  const fillColor = (percent: number) => {
    if (percent < 70) return "#db3232";
    if (percent >= 70 && percent < 85) return "#eb9f2d";
    if (percent >= 85) return "#68bc30";
    else return "grey";
  };

  useEffect(() => {
    fetch(`http://localhost:3001/test/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
      });
  }, [id]);

  return (
    <ResultsStyled>
      <Nav title="QuizTime!" link="/" />
      {!results.testId && <NotFound />}
      {results.testId && (
        <main className="wrapper">
          <div className="results-id">
            <p>Save your Results Id to access your results again later:</p>
            <ClipboardCopy copyText={id as string} />
          </div>
          <div className="title">
            <h2>Results</h2>
          </div>
          <div className="container results-container">
            <div className="results">
              <Pie percentage={percent} color={fillColor(percent)} />
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
      )}
    </ResultsStyled>
  );
};

export default Results;
