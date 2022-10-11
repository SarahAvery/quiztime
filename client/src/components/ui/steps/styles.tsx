import styled from "styled-components";

const StepsStyled = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;

  .line {
    width: 100%;
    height: 2px;
    background-color: white;
  }

  .circles {
    width: 100%;
    z-index: 1;
    position: absolute;
    display: flex;
    justify-content: space-between;
  }

  .circle {
    width: 35px;
    height: 35px;
    border-radius: 35px;
    border: 2px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    box-shadow: 1px 1px 4px 0px var(--blue);
    color: white;
    background-color: var(--green);
  }

  .circle.current {
    border: 2px solid black;
    color: black;
    background-color: white;
  }
`;

export default StepsStyled;
