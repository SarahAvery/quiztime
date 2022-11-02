import styled from "styled-components";
import { flexCenterWrap } from "../../mixins";
import webBanner from "../../../img/webbannersvg.svg";
import mobileBanner from "../../../img/mobilesvg.svg";

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
    background-image: url(${mobileBanner});
    background-repeat: no-repeat;
    background-position: center;
    height: 430px;
    width: 360px;
  }

  h2 {
    letter-spacing: 0.7px;
    font-size: 30px;
    color: var(--blue);
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
    padding: 20px 0;
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
      font-size: 24px;
      color: var(--blue);
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
        color: #fff;
        display: block;
        margin: 0 auto;
        border-radius: 8px;
        cursor: pointer;
        font-family: sans-serif;
        font-size: 18px;
        font-weight: 600;
        outline: 0 solid transparent;
        padding: 12px 18px;
        width: fit-content;
        min-width: 180px;
        text-align: center;
      }

      &:nth-child(3n + 1) {
        a {
          background-color: var(--blue);
          box-shadow: var(--blue) 0 10px 20px -10px;
          border: 1px solid var(--blue);

          &:hover {
            box-shadow: inset 0 0 20px 20px var(--light-blue);
          }
        }
      }

      &:nth-child(3n + 2) {
        a {
          background-color: var(--dark-orange);
          box-shadow: var(--dark-orange) 0 10px 20px -10px;
          border: 1px solid var(--dark-orange);

          &:hover {
            box-shadow: inset 0 0 20px 20px var(--orange);
          }
        }
      }

      &:nth-child(3n + 3) {
        a {
          color: #fff;
          background-color: var(--dark-purple);
          box-shadow: var(--dark-purple) 0 10px 20px -10px;
          border: 1px solid var(--dark-purple);

          &:hover {
            box-shadow: inset 0 0 20px 20px var(--purple);
          }
        }
      }
    }
  }

  .resultlink-container {
    margin: 20px 0;
    width: 320px;
  }

  .submit-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 10px;
  }

  label {
  }

  input {
    text-align: left;
    box-shadow: var(--box-shadow-thin) #1e304380;
    padding: 8px;
    border: 1px solid #d3d3d3;
    border-radius: 6px;
    margin-left: 10px;
    width: 200px;

    &:focus-visible,
    &:focus {
      border: 1px solid var(--blue);
      box-shadow: var(--box-shadow-thin) var(--blue);
      outline: none;
    }
  }

  .button-container {
    border: none;
    width: auto;
    height: auto;
    padding: 10px 0;
    display: block;
    text-align: center;
  }

  button {
    height: 40px;
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
      /* background-image: url("./img/webbannersvg.svg"); */
      background-image: url(${webBanner});
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
