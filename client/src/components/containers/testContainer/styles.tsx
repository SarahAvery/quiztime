import styled from "styled-components";

const FormStyled = styled.div`
  min-height: calc(100vh);
  background: #f4f4f4;

  .test-title {
    background-color: white;

    p {
      width: 100%;
      padding: 20px 10%;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 24px;
    }
  }

  form {
    margin: 40px 10%;
    min-height: 50vh;
    width: auto;
    border: 1px solid grey;
    background-color: white;
    position: relative;
  }

  .button-container {
    width: 100%;
    border: 1px solid blue;
    position: absolute;
    bottom: 0;
    text-align: right;
    padding-right: 30px;
  }

  button {
    padding: 5px;
  }

  .wrapper {
    min-height: auto;
  }
`;

export default FormStyled;
