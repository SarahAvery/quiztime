import styled from "styled-components";
import { flexCenterWrap } from "../../mixins";

const FormStyled = styled.div`
  min-height: calc(100vh);
  color: #000000;

  .test-title {
    background-color: #ffffff;
    height: 70px;
    font-size: 30px;

    p {
      width: 100%;
      padding: 20px 10%;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 24px;
    }
  }

  .centered {
    margin: 40px 10%;
    min-height: calc(100vh - 70px - 80px);
    ${flexCenterWrap};
  }

  form {
    width: 100%;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: var(--box-shadow-blurry) var(--secondary-blue);
  }

  .button-container {
    width: 100%;
    border-top: 1px solid #d3d3d3;
    text-align: right;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 60px;
  }

  button {
    padding: 8px 25px;
    background: var(--primary-color);
    color: #ffffff;
    outline: none;
    box-shadow: none;
    overflow: visible;
    border-width: 0;
    border-radius: 6px;
    border: 1px solid #808080;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
    box-shadow: var(--box-shadow-thin) var(--secondary-blue);

    &:hover {
      background: var(--secondary-blue);
    }
  }

  button:disabled {
    background-color: #afafaf;
    opacity: 0.8;
    box-shadow: var(--box-shadow-thin) #808080;
  }

  .wrapper {
    min-height: auto;
  }
`;

export default FormStyled;
