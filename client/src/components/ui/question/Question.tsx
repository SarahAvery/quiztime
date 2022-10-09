import { useState } from "react";
import InputRadio from "../inputs/InputRadio";
import { QuestionType } from "../../containers/testContainer/types";
import QuestionStyled from "./styles";

const Question = ({
  id: questionId,
  content,
  title,
  answers,
  onChange,
  defaultSelected,
}: QuestionType & {
  /** The id of the current testConfig */
  testId: string;
  /** The event handler function that responds to changes dispatched from inside the fieldset */
  onChange: (e: React.FormEvent<HTMLFieldSetElement>) => void;
  /** The answer to preselect for this question based on test form data */
  defaultSelected: string;
}) => {
  const [selected, setSelected] = useState<string>(defaultSelected);

  /**
   * A method for updating the checked state of controlled input radios,
   * and calling the onChange prop for updating form state.
   */
  const updateSelected: React.FormEventHandler<HTMLFieldSetElement> = (e) => {
    const target = e.target as HTMLInputElement;
    setSelected(target.id);
    onChange(e);
  };

  return (
    <QuestionStyled>
      <div className="question">
        <div className="question-title">{title}</div>
        <div className="question-content">
          <p>{content}</p>
        </div>
      </div>
      <div className="answer-container">
        <div className="instructions">select only one</div>
        <fieldset onChange={updateSelected}>
          {answers.map(({ id, value }) => (
            <InputRadio key={id} name={questionId} id={id} value={value} checked={selected === id} />
          ))}
        </fieldset>
      </div>
    </QuestionStyled>
  );
};

export default Question;
