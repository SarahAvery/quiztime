import styled from "styled-components";

const ResultsItemRowStyled = styled.li`
  list-style: none;
  border: 1px solid grey;
  margin: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px 0px var(--blue);
  display: block;
  width: calc(50% - 20px);

  .status {
    width: 100%;
    text-align: center;
    padding: 15px;
    font-weight: bold;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .mark {
    position: absolute;
    right: 0;
    padding-right: 20px;
  }

  svg {
    width: 10px;
  }

  .xmark {
    fill: #b81919;
  }

  .checkmark {
    fill: green;
  }

  .question,
  .answers {
    padding: 10px 20px;
  }

  .answers {
    align-self: center;
  }

  .question {
    text-align: center;

    span {
      font-weight: bold;
    }
  }

  .input-container {
    border: 1px solid lightgrey;
    border-radius: 4px;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 0px #000000;

    &:last-child {
      margin-bottom: 0px;
    }

    span.circle {
      border-radius: 50%;
      margin: 5px;
      width: 16px;
      height: 16px;
      border: 1px solid grey;
      background: white;
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
        border: 1px solid grey;
        background: white;
      }
      &:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background: white;
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
        border: 1px solid white;
        background: var(--greenBlue);
      }

      span.circle:after {
        opacity: 1;
      }
    }

    &.incorrect {
      /* background-color: #ff000040; */
      /* border: 1px solid red; */

      span.circle:before {
        border: 1px solid white;
        background: red;
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
`;

export default ResultsItemRowStyled;
