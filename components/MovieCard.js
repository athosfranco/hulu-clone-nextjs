import React from "react";
import Image from "next/image";
import { PlayIcon, XCircleIcon } from "@heroicons/react/outline";

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
  return (
    <div
      className="z-50 flex flex-col sm:w-2/4 p-4 sm:p-8 top-14 bg-custom-dark"
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

      <h2 className="mt-4 mb-4 text-5xl text-white transition-all duration-100 ease-in-out">
        {selectedMovie.title || selectedMovie.original_name}
      </h2>
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
