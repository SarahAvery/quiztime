import { testConfig } from "../../containers/testContainer/config";
import {
  qAMapResult,
  QuestionType,
} from "../../containers/testContainer/types";
import ResultsItemRowStyled from "./styles";

const checkmark = (
  <svg
    className="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

const xmark = (
  <svg
    className="xmark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
  </svg>
);

const ResultItemRow = ({
  id,
  data,
  testId,
}: {
  id: string;
  data: qAMapResult;
  testId: string;
}) => {
  const question: QuestionType | undefined = testConfig
    .find((test) => test.id === testId)
    ?.questions.find((q) => q.id === id);
  const userAnswer = question?.answers.find((a) => a.id === data.answerId);
  const correctAnswer = question?.answers.find(
    (a) => a.id === data.correctAnswerId
  );

  const questionNumber = question?.id.slice(1);

  return (
    <ResultsItemRowStyled>
      <div className="status">
        <p>{data.isCorrect ? "Correct" : "Incorrect"}</p>
        <p className="mark">{data.isCorrect ? checkmark : xmark}</p>
      </div>

      <div className="result-box">
        <div className="question">
          <span>#{questionNumber}: </span>
          {question?.title}
        </div>

        {data.isCorrect && (
          <div className="answers">
            <div className="correct input-container">
              <div className="radio">
                <span className="circle"></span>
                <span className="value">{correctAnswer?.value}</span>
              </div>
            </div>
          </div>
        )}

        {!data.isCorrect && (
          <div className="answers">
            <div className="incorrect input-container">
              <div className="radio">
                <span className="circle"></span>
                <span className="value">{userAnswer?.value}</span>
              </div>
            </div>
            <div className="correct input-container">
              <div className="radio">
                <span className="circle"></span>
                <span className="value">{correctAnswer?.value}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </ResultsItemRowStyled>
  );
};

export default ResultItemRow;
