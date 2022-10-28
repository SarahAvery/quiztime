import styled from "styled-components";

interface Props {
  width: number;
}

const ClipboardStyled = styled.div<Props>`
  margin-top: 10px;
  display: flex;
  align-items: center;

  .copy-btn {
    border: 1px solid grey;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
  }

  .copied {
    background-color: var(--light-blue);
    transition: all 0.2s ease-in-out;

    svg {
      fill: #fff;
    }
  }

  svg {
    width: 20px;
  }

  input {
    text-align: left;
    padding: 8px;
    border: none;
    border-radius: 6px;
    margin-right: 10px;
    width: ${(props) => props.width}px;
    border: 1px solid lightgrey;

    &:focus-visible,
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

export default ClipboardStyled;
