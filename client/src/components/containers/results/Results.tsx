import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Results = () => {
  const { id } = useParams();
  const [results, setResults] = useState<Record<string, any>>();

  useEffect(() => {
    fetch(`http://localhost:3001/test/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, [id]);

  return <div>{results?.percent}</div>;
};

export default Results;
