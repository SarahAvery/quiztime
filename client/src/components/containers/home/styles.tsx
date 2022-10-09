import styled from "styled-components";

const HomeStyled = styled.div`
  width: 100%;
  height: 600px;
  background-color: lavenderblush;

  .test-button-container {
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .test-button {
    border: 1px solid black;
    margin: 10px;
    padding: 5px;
    width: 100px;
    text-align: center;
  }
`;

export default HomeStyled;
