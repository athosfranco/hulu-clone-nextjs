import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

const Thumbnail = ({ result }) => {
  const URL_BASE = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group p-2 cursor-pointer transition ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${URL_BASE}${result.backdrop_path || result.poster_path}` ||
          `${URL_BASE}${result.poster_path}`
        }
        alt=""
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-8xl">{result.overview}</p>
        <p className="flex items-center opacity-0 group-hover:opaciy-100">
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
};

export default Thumbnail;
