import React, { useEffect, useState } from "react";
import { getResultsAPI } from "../api/results";

export const ResultTable = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const getResults = async () => {
      const data = await getResultsAPI();
      const sortedResults = [...data].sort((a, b) => a.time - b.time);
      const pickedResults = sortedResults.slice(0, 3);
      setResults(pickedResults);
    };
    getResults();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>user</th>
            <th>time</th>
            <th>block moves</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.user}</td>
              <td>{result.time}</td>
              <td>{result.block_moves}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
