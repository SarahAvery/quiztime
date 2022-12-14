import styled from "styled-components";

const NavStyled = styled.div`
  border-bottom: 1px solid #000;

  .wrapper {
    min-height: 0;
  }

  a {
    margin: 30px 0;
    text-decoration: none;
    color: var(--blue);
    font-size: 30px;
    font-weight: bold;
  }

  @media (max-width: 620px) {
    .wrapper {
      padding: 0 20px;
    }
  }
`;

export default NavStyled;
