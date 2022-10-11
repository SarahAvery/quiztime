import styled from "styled-components";

const FormStyled = styled.div`
  min-height: calc(100vh);
  /* background: #f4f4f4; */
  background-color: var(--greenBlue);
  color: black;

  .test-title {
    background-color: white;
    height: 70px;

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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  form {
    /* min-height: 60vh; */
    width: 100%;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 2px 2px 6px 0px #4e4e4e;
  }

  .button-container {
    width: 100%;
    border-top: 1px solid lightgrey;
    text-align: right;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    height: 60px;
  }

  button {
    padding: 8px 16px;
    background: var(--blue);
    color: white;
    outline: none;
    box-shadow: none;
    overflow: visible;
    border-width: 0;
    border-radius: 4px;
    border: 1px solid grey;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #374c80;
    }
  }

  button:disabled {
    background-color: grey;
    opacity: 0.8;
  }

  .wrapper {
    min-height: auto;
  }
`;

export default FormStyled;
