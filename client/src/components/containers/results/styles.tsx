import styled from "styled-components";
import { flexCenterWrap } from "../../mixins";

const ResultsStyled = styled.div`
  min-height: calc(100vh - 80px);
  background-color: var(--grey);

  main.wrapper {
    min-height: 0;
    margin-bottom: 30px;
  }

  .results-id {
    padding: 10px 20px;
    margin: 20px 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: var(--box-shadow-thin) var(--light-blue);
  }

  .container {
    color: #000000;
  }

  .results {
    display: flex;
    margin-bottom: 0 10px;
    justify-content: space-evenly;
    background: #fff;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
  }

  .results-container {
    box-shadow: var(--box-shadow-thin) var(--light-blue);
    border-radius: 6px;
    margin: 0 10px;
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
    color: #000;
  }

  .row-container {
    /* width: 300px; */
    border-top: 1px solid #d3d3d3;
    ${flexCenterWrap}
    justify-content: start;
  }

  .row {
    display: flex;
    padding: 10px;
    width: 100%;
    justify-content: center;

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

  @media (min-width: 620px) {
    .row-container {
      width: 100%;
      ${flexCenterWrap};
    }

    .row {
      width: auto;
      padding: 20px 10px;
    }
  }
`;

export default ResultsStyled;
