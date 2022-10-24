import styled from "styled-components";

const InputContainerStyled = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 6px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  &.checked {
    background: #406788cc;

    label {
      color: #ffffff;
    }
  }

  .radio {
    display: block;
    cursor: pointer;
    user-select: none;
    text-align: left;
    box-shadow: var(--box-shadow-thin) #1e304380;
    border-radius: 6px;

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
          top: 5px;
          left: 5px;
          opacity: 0;
          transition: all 0.2s ease-in-out;
        }
      }
      &:checked + span:after {
        opacity: 1;
      }
      &:checked + span:before {
        border: 1px solid #ffffff;
        background: #406788cc;
      }
    }
  }

  label {
    padding: 8px;
  }
`;

export default InputContainerStyled;
