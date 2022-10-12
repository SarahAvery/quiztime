import styled from "styled-components";
import { flexCenterWrap } from "../../mixins";

const HomeStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  color: #ffffff;

  .nav {
    border-bottom: 1px solid #ffffff;

    .wrapper {
      min-height: 0;
    }

    a {
      margin: 30px 0;
      text-decoration: none;
      color: #ffffff;
      font-size: 30px;
    }
  }

  main.wrapper {
    min-height: 0;
  }

  .title {
    width: 100%;
    margin: 30px 0;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
  }

  h2 {
    letter-spacing: 0.7px;
    font-size: 30px;
  }

  .container {
    background: #fff;
    padding: 24px;
    color: #000000;
    border-radius: 6px;
    margin-bottom: 30px;
    box-shadow: var(--box-shadow-blurry) #f8fcff4c;
  }

  .paragraph {
    p {
      margin: 5px 0;
    }
  }

  .test-button-container {
    background: #ffffff;
    padding: 40px;
    border-radius: 6px;
    width: 80%;
    margin: 0 auto;

    p {
      text-align: center;
      margin: 10px;
      font-weight: bold;
      text-transform: capitalize;
      font-size: 20px;
      color: #000000;
    }
  }

  ul {
    width: 100%;
    margin: 0 auto;
    ${flexCenterWrap};
    padding: 10px 0;
    li {
      list-style: none;
      width: 33%;
      padding: 15px;

      a {
        text-decoration: none;
        display: block;
        margin: 0 auto;
        background: var(--medium-blue);
        border-radius: 8px;
        box-shadow: var(--medium-blue) 0 10px 20px -10px;
        color: #ffffff;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 600;
        outline: 0 solid transparent;
        padding: 12px 18px;
        width: fit-content;
        min-width: 180px;
        text-align: center;
        border: 1px solid #696969;

        &:hover {
          box-shadow: inset 0 0 20px 20px var(--secondary-blue);
        }
      }
    }
  }
`;

export default HomeStyled;
