import { PercentStyled, StepsStyled } from "./styles";

const Steps = ({ total, currIndex }: { total: number; currIndex: number }) => {
  const arr = Array.from(Array(total).keys());

  const percent: number = currIndex * arr.length;
  // const test = currIndex * arr.length;

  return (
    <StepsStyled>
      <div className="bar">
        <PercentStyled percent={percent}></PercentStyled>
      </div>
    </StepsStyled>
  );
};

export default Steps;
