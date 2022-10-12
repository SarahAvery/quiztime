import styled from "styled-components";
import { flexCenter } from "../../mixins";

const ResultsStyled = styled.div`
  min-height: calc(100vh - 80px);

  main.wrapper {
    min-height: 0;
    margin-bottom: 30px;
  }

  .container {
    color: #000000;
  }

  .results {
    display: flex;
    margin: 0 10px;
    justify-content: space-evenly;
    box-shadow: var(--box-shadow-blurry) #f8fcff4c;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
  }

  .review-container {
    background: transparent;
    box-shadow: none;
  }

  .title {
    width: 100%;
    margin: 30px 0;
  }

  h2 {
    text-align: center;
    margin: 20px 0;
    letter-spacing: 0.7px;
    font-size: 30px;
    color: #ffffff;
  }

  .score {
    width: 100%;
    font-size: 40px;
    text-align: center;
    ${flexCenter};
    margin: 30px;

    p {
      padding: 30px;
      border: 1px solid #d3d3d3;
      border-radius: 6px;
      box-shadow: var(--box-shadow-blurry) #d3d3d3;
    }
  }

  .row {
    display: flex;
    padding: 20px 10px;
    p {
      font-size: 18px;
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
