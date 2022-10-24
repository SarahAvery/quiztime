import styled from "styled-components";

const ResultsTableStyled = styled.ul`
  display: block;
  margin-top: -10px;

  @media (min-width: 680px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export default ResultsTableStyled;
