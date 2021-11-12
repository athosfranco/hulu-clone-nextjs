import React, { useState } from "react";
import Thumbnail from "../components/Thumbnail";
import MovieCard from "./MovieCard";

function Results({ results }) {
  //movie card display
  const [movieInfo, setMovieInfo] = useState("");
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  //show movie card function
  const showMovieCard = (movieData) => {
    setMovieInfo(movieData);
    setShowMovieInfo(true);
  };
  //close card function
  const closeCardHandler = (state) => {
    setShowMovieInfo(state); //'state' vem de <MovieCard/>
  };

  return (
    <>
      {showMovieInfo && (
        <MovieCard selectedMovie={movieInfo} onChangeState={closeCardHandler} />
      )}
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
