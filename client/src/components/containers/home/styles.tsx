import styled from "styled-components";
import { flexCenterWrap } from "../../mixins";

const HomeStyled = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);

  .nav {
    border-bottom: 1px solid #000;

    .wrapper {
      min-height: 0;
    }

    a {
      margin: 30px 0;
      text-decoration: none;
      font-size: 30px;
    }
  }

  main.wrapper {
    min-height: 0;
  }

  .banner {
    width: 100%;
    padding: 30px 0;
    background-color: var(--grey);
  }

  .banner-container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .banner-img {
    background-image: url("./img/mobilesvg.svg");
    background-repeat: no-repeat;
    background-position: center;
    height: 430px;
    width: 360px;
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
    padding: 24px 20px;
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
    padding: 40px 0;
    border-radius: 6px;
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

    padding: 10px 0;
    display: block;
    text-align: center;
    li {
      list-style: none;
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

  /* Large */
  @media (min-width: 860px) {
    .banner {
      padding: 30px;
    }
    .banner-container {
      width: 100%;
    }
    .banner-img {
      background-image: url("./img/webbannersvg.svg");
      height: 300px;
      width: 800px;
    }
  }

  @media (min-width: 520px) {
    .test-button-container {
      ul {
        ${flexCenterWrap};
      }
    }
  }

  /* Mobile: 360 
Mobile: 375 
Mobile: 360 
iPhone X: 375 
Pixel 2: 411 
Tablet: 768 
Laptop: 1366
High-res laptop or desktop: 1920*/
`;

export default HomeStyled;
