import styled from "styled-components";

const StepsStyled = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 30px;

  .bar {
    border: 1px solid black;
    height: 16px;
    width: 100%;
    border-radius: 10px;
    box-shadow: var(--box-shadow-thin) rgba(64, 104, 136, 0.6);
  }
`;

interface Percent {
  percent: number;
}

const PercentStyled = styled.div<Percent>`
  width: ${(props) => props.percent}%;
  background-color: var(--blue);
  height: 100%;
  border-radius: 10px;
  transition: all 0.5s ease-in;
`;

export { StepsStyled, PercentStyled };
