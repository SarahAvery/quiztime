import styled from "styled-components";

const QuestionStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;

  .instructions {
    text-transform: uppercase;
  }

  .question-title {
    font-weight: bold;
  }

  .question-title,
  .instructions {
    margin-bottom: 20px;
  }

  .question,
  .answer-container {
    padding: 30px;
  }

  .answer-container {
    flex-grow: 1;
  }

  .question {
    width: 50%;

    .question-content {
      display: flex;

      &::before {
        content: "";
        border-left: 4px solid #d3d3d3;
        margin-right: 10px;
      }
    }
  }
`;

export default QuestionStyled;
