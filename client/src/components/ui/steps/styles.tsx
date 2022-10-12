import styled from "styled-components";
import { flexCenter } from "../../mixins";

const StepsStyled = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;

  .line {
    width: 100%;
    height: 2px;
    background-color: #ffffff;
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
    border: 2px solid #ffffff;
    ${flexCenter};
    z-index: 1;
    box-shadow: var(--box-shadow-thin) var(--blue);
    color: #ffffff;
    background-color: var(--blue);
  }

  .circle.current {
    border: 2px solid #000000;
    color: #000000;
    background-color: #ffffff;
  }
`;

export default StepsStyled;
