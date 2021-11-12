import React from "react";
import Thumbnail from "../components/Thumbnail";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;
