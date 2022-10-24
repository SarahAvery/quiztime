import styled from "styled-components";

const QuestionStyled = styled.div`
  width: 100%;
  display: block;

  .instructions {
    text-transform: uppercase;
  }

  .question-title {
    font-weight: bold;
  }

  .question-title,
  .instructions,
  .question-content {
    margin-bottom: 20px;
  }

  .question,
  .answer-container {
    margin: 30px;
  }

  .question {
    .question-content {
      display: flex;

      &::before {
        content: "";
        border-left: 4px solid #d3d3d3;
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    padding: 20px 0;

    .answer-container {
      flex-grow: 1;
    }

    .question {
      width: 50%;
    }
  }
`;

export default QuestionStyled;
