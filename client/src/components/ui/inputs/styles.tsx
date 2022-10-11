import styled from "styled-components";

const InputContainerStyled = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin-bottom: 10px;
  border-radius: 4px;

  &.checked {
    background: var(--greenBlue);

    label {
      color: white;
    }
  }

  .radio {
    display: block;
    cursor: pointer;
    user-select: none;
    text-align: left;
    box-shadow: 1px 1px 4px 0px var(--blue);
    border-radius: 4px;

    & + .radio {
      margin-top: 12px;
    }
    input {
      display: none;
      & + span {
        display: inline-block;
        position: relative;
        padding-left: 30px;
        &:before {
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
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
          top: 5px;
          left: 5px;
          opacity: 0;
          transition: all 0.2s ease-in-out;
        }
      }
      &:checked + span:after {
        opacity: 1;
        /* transform: scale(1, 1); */
      }
      &:checked + span:before {
        border: 1px solid white;
        background: var(--greenBlue);
      }
    }
  }

  label {
    padding: 8px;
  }
`;

export default InputContainerStyled;
