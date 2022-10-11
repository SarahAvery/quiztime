import styled from "styled-components";

const ResultsStyled = styled.div`
  background-color: white;
  background-color: var(--green);
  margin: 40px 0;
  min-height: calc(100vh - 80px);

  .container {
    margin: 20px 40px;
    border: 1px solid lightgray;
    font-size: 18px;
    background: white;
    border-radius: 4px;
    box-shadow: 1px 1px 4px 0px var(--blue);
  }

  h2 {
    text-align: center;
    margin: 20px 0;
  }

  .score {
    font-size: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 20px 0; */

    p {
      padding: 30px;
      border: 1px solid black;
    }
  }

  .results {
    display: flex;
    padding: 20px 0;
    justify-content: space-evenly;
  }

  .row {
    display: flex;
    padding: 10px;
    p {
    }
  }
  .row p:first-child {
    font-weight: bold;
  }
  .row p:last-child {
    padding-left: 5px;
  }
`;

export default ResultsStyled;
