import PercentCircleStyled from "./styles";

const Circle = ({
  color,
  percentage,
}: {
  color?: string;
  percentage: number;
}) => {
  const r = 80;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={"1.2rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }: { percentage: number }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      fontSize={"40px"}
    >
      {percentage}%
    </text>
  );
};

const Pie = ({ percentage, color }: { percentage: number; color: string }) => {
  return (
    <PercentCircleStyled>
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle color="lightgrey" percentage={100} />
          <Circle color={color} percentage={percentage} />
        </g>
        <Text percentage={percentage} />
      </svg>
    </PercentCircleStyled>
  );
};

export { Pie };
