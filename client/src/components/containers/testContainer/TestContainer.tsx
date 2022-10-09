import { useNavigate, useParams } from "react-router-dom";
import React, { useMemo, useState } from "react";
import Question from "../../ui/question/Question";
import { TestType } from "./types";
import { testConfig } from "./config";
import FormStyled from "./styles";

const TestContainer = () => {
  const { testId } = useParams();
  /** We cast this to TestType since we return a 404 on `/test/non-exisitent-test-id` */
  const currentTestConfig = useMemo(() => testConfig.find(({ id }) => id === testId), [testId]) as TestType;

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = useMemo(
    () => currentTestConfig.questions[currentQuestionIndex],
    [currentQuestionIndex, currentTestConfig.questions]
  );

  const navigate = useNavigate();

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ testId, formData }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const id = data.id;
        navigate("/results/" + id);
      });
  };

  const onNext: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onBack: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const onChange = (e: React.FormEvent<HTMLFieldSetElement>) => {
    const answerId = (e.target as HTMLInputElement).id;
    const { id: qId } = currentQuestion;
    setFormData({ ...formData, [qId]: answerId });
  };

  return (
    <FormStyled>
      <div className="test-title">
        <p>{currentTestConfig.id}</p>
      </div>
      <form>
        <Question
          key={currentQuestion.id}
          {...currentQuestion}
          testId={currentTestConfig.id}
          onChange={onChange as any}
          defaultSelected={formData[currentQuestion.id]}
        />

        <div className="button-container">
          {currentQuestionIndex >= 1 && <button onClick={onBack}>Back</button>}
          {currentQuestionIndex < currentTestConfig?.questions.length - 1 && <button onClick={onNext}>Next</button>}
          {currentQuestionIndex === currentTestConfig?.questions.length - 1 && (
            <button onClick={onSubmit}>Submit</button>
          )}
        </div>
      </form>
    </FormStyled>
  );
};

export default TestContainer;
