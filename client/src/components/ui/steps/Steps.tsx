import StepsStyled from "./styles";

const Steps = ({ total, currIndex }: { total: number; currIndex: number }) => {
  const arr = Array.from(Array(total).keys());

  return (
    <StepsStyled>
      <div className="line"></div>
      <div className="circles">
        {arr.map((i) => (
          <div className={currIndex === i + 1 ? "circle current" : "circle"} key={i}>
            <span className="label">{i + 1}</span>
          </div>
        ))}
      </div>
    </StepsStyled>
  );
};

export default Steps;
