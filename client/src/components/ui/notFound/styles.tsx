import styled from "styled-components";

const NotFoundStyled = styled.div`
  background: white;
  min-height: calc(100vh - 97px);
  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    padding: 40px 0;
    max-width: 340px;
  }

  .img-container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 300px;
  }

  .img {
    background-image: url("../../img/sad300.svg");
    background-repeat: no-repeat;
    background-position: center;
    height: 300px;
    width: 300px;
  }

  .title,
  .para {
    text-align: center;
    color: var(--blue);
  }
  .title {
    font-weight: bolder;
    font-size: 52px;
  }
  .para {
    font-weight: bold;
    margin: 30px 0;
    font-size: 24px;
  }
`;

export default NotFoundStyled;
