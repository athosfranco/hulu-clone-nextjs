import React from "react";
import Image from "next/image";
import { PlayIcon, XCircleIcon, ThumbUpIcon } from "@heroicons/react/outline";

function MovieCard({ selectedMovie, onChangeState }) {
  //endpoint base para requisiçao das imagens
  const URL_BASE = "https://image.tmdb.org/t/p/original/";
  //fecha a janela do filme
  const stateHandler = () => onChangeState(false);
  //limita o número de caracteres da descriçao do filme dentro do movieCard
  const limitString = (text) => {
    const stringLimit = 300;
    const reducedString = text.substring(0, stringLimit);
    if (text.length > stringLimit) return `${reducedString} [...]`;
    else return text;
  };
  //retorna apenas o ano da data
  const formatDate = (date) => date.split("-")[0];
  return (
    <div
      className="z-10 flex flex-col sm:w-2/4 p-4 top-14 bg-custom-dark"
      style={{
        position: "fixed",
        margin: "auto",
        left: "0",
        right: "0",
        boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.7)",
      }}
    >
      <div>
        <Image
          priority
          layout="responsive"
          height={1080}
          width={1920}
          src={
            `${URL_BASE}${
              selectedMovie.backdrop_path || selectedMovie.poster_path
            }` || `${URL_BASE}${selectedMovie.poster_path}`
          }
          alt=""
        />
      </div>

      <h2 className="mt-4 mb-4 sm:text-5xl text-3xl text-white transition-all duration-100 ease-in-out">
        {selectedMovie.title || selectedMovie.original_name}
      </h2>
      <div className="flex justify-between">
        <h3 className="mb-2 text-2xl">
          {formatDate(
            selectedMovie.first_air_date || selectedMovie.release_date
          )}
        </h3>
        <div className="flex items-center">
          <ThumbUpIcon className="h-5 pr-1" />
          <h3>{selectedMovie.vote_average}</h3>
          <h3 className="pl-1 text-gray-500">({selectedMovie.vote_count})</h3>
        </div>
      </div>

      <p className="text-left mb-4">{limitString(selectedMovie.overview)}</p>
      <div className="flex w-full">
        <button className="flex justify-center items-center bg-custom-light hover:bg-custom-lighter text-white  py-2 px-4 rounded mt-2 transition duration-200 ease-in-out">
          <PlayIcon className="h-8 mb-1" />
          <p style={{ paddingBottom: "5px", paddingLeft: "10px" }}>Assistir</p>
        </button>
        <button
          onClick={stateHandler}
          className="ml-1 flex justify-center items-center bg-transparent border border-custom-light hover:border-transparent hover:bg-custom-light text-white  py-2 px-4 rounded mt-2 transition duration-200 ease-in-out"
        >
          <XCircleIcon className="h-8 mb-1" />
          <p style={{ paddingBottom: "5px", paddingLeft: "10px" }}>
            Escolher outro título
          </p>
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
