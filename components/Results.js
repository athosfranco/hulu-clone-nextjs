import React, { useState, useEffect } from "react";
import Thumbnail from "../components/Thumbnail";

function Results({ results, onGetMovieInfo }) {
  //movie card display
  const [movieInfo, setMovieInfo] = useState("");
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  //show movie card function
  const showMovieCard = (movieData) => {
    setMovieInfo(movieData);
    setShowMovieInfo(true);
  };

  //reenvia os dados pra index.js sempre que os estados forem atualizados
  useEffect(() => {
    onGetMovieInfo(movieInfo, showMovieInfo);
  }, [movieInfo, showMovieInfo]);

  return (
    <>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 ">
        {results.map((result) => (
          <div
            key={result.id}
            onClick={() => {
              showMovieCard(result);
            }}
          >
            {" "}
            <Thumbnail result={result} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Results;
