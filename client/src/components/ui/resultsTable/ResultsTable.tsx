import ResultItemRow from "../resultsRow/ResultsItemRow";
import ResultsTableStyled from "./styles";

const ResultsTable = ({
  resultsData,
  testId,
}: {
  resultsData: Record<string, any>;
  testId: string;
}) => (
  <ResultsTableStyled>
    {Object.entries(resultsData).map(([key, value]) => (
      <ResultItemRow key={key} id={key} data={value} testId={testId} />
    ))}
  </ResultsTableStyled>
);

export default ResultsTable;
