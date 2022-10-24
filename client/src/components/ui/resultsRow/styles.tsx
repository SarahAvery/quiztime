import styled from "styled-components";
import { flexCenter } from "../../mixins";

const ResultsItemRowStyled = styled.li`
  list-style: none;
  margin: 10px;
  border-radius: 6px;
  border: 1px solid grey;
  display: block;
  width: calc(100% - 20px);
  background: white;
  box-shadow: var(--box-shadow-thin) #808080;

  .status {
    width: 100%;
    text-align: center;
    /* padding: 15px; */
    font-weight: bold;
    position: relative;
    ${flexCenter};
    height: 50px;
  }

  .mark {
    position: absolute;
    right: 0;
    padding-right: 20px;
  }

  svg.xmark {
    width: 10px;
  }

  svg.checkmark {
    width: 14px;
  }

  .xmark {
    fill: #b81919;
  }

  .checkmark {
    fill: #008000;
  }

  .result-box {
  }

  .question,
  .answers {
    padding: 10px 20px;
  }

  .answers {
    align-self: auto;
  }

  .question {
    text-align: center;

    span {
      font-weight: bold;
    }
  }

  .input-container {
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    margin-bottom: 10px;
    box-shadow: var(--box-shadow-thin) #808080;

    &:last-child {
      margin-bottom: 0px;
    }

    span.circle {
      border-radius: 50%;
      margin: 5px;
      width: 16px;
      height: 16px;
      border: 1px solid #808080;
      background: #ffffff;
      position: relative;
      flex-shrink: 0;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: -2px;
        left: -2px;
        border-radius: 50%;
        margin-right: 5px;
        width: 16px;
        height: 16px;
        border: 1px solid #808080;
        background: #ffffff;
      }
      &:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: #ffffff;
        position: absolute;
        border-radius: 50%;
        top: 3px;
        left: 3px;
        opacity: 0;
        transition: all 0.2s ease-in-out;
      }
    }

    &.correct {
      background-color: #00800040;
      border: 1px solid green;

      span.circle:before {
        border: 1px solid #ffffff;
        background: var(--greenBlue);
      }

      span.circle:after {
        opacity: 1;
      }
    }

    &.incorrect {
      span.circle:before {
        border: 1px solid #ffffff;
        background: #ff0000;
      }

      span.circle:after {
        opacity: 1;
      }
    }
  }

  .radio {
    cursor: auto;
    text-align: left;
    display: flex;
    align-items: center;
    min-height: 30px;
  }
  span.value {
    padding: 5px;
  }

  @media (min-width: 680px) {
    width: calc(50% - 20px);
    max-width: 420px;
  }

  @media (min-width: 1200px) {
    max-width: 100%;

    .result-box {
      display: flex;
      padding: 20px 0;
    }

    .question,
    .answers {
      width: 50%;
    }
  }
`;

export default ResultsItemRowStyled;
