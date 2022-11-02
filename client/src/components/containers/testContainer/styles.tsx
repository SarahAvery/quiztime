import styled from "styled-components";

const FormStyled = styled.div`
  min-height: calc(100vh);
  color: #000000;

  .wrapper {
    background: white;

    a {
      cursor: default;
    }
  }

  .centered {
    padding: 40px 10%;
    min-height: calc(100vh - 97px);
    display: block;
    background-color: var(--grey);

    .wrapper {
      background-color: var(--grey);
      max-width: 900px;
    }
  }

  form {
    width: 100%;
    background-color: #ffffff;
    border-radius: 6px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: var(--box-shadow-blurry-2) var(--medium-blue);
  }

  .back-btn {
    background: var(--blue);
    box-shadow: var(--box-shadow-thin) var(--light-blue);

    &:hover {
      background: var(--light-blue);
    }
  }

  .next-btn {
    background: var(--dark-orange);
    box-shadow: var(--box-shadow-thin) var(--orange);
    border: 1px solid var(--dark-orange);

    &:hover {
      background: var(--orange);
    }
  }

  .next-btn:disabled {
    &:hover {
      background-color: #afafaf;
    }
  }
  .wrapper {
    min-height: auto;
  }
`;

export default FormStyled;
