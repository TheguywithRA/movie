import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  popularity: number;
  size?: string;
}

const Moviecard = (props: Props) => {
  const { title, poster_path, release_date, overview, popularity, size } =
    props;
  const [showOverview, setShowOverview] = useState(false);

  const toggleOverview = () => {
    setShowOverview(!showOverview);
  };

  const formatPopularity = (popularity: number) => {
    if (popularity >= 1000000) {
      return (popularity / 1000000).toFixed(1) + "M";
    } else if (popularity >= 1000) {
      return (popularity / 1000).toFixed(1) + "K";
    }
    return popularity.toString();
  };

  return (
    <div
      className={`flex flex-col rounded-2xl shadow-lg bg-gray-800 text-white ${size}`}
    >
      <img
        className="rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:opacity-90"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        loading="lazy"
        onClick={toggleOverview}
        alt={`${title} Poster`}
      />
      <label className="text-center font-semibold">{title}</label>
      {/* <p className="text-center">{release_date}</p> */}

      <div className="flex items-center justify-center mt-2">
        <FontAwesomeIcon icon={faUsers} className="mr-1" />
        <span>{formatPopularity(popularity)}</span>
      </div>

      {showOverview && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-4 max-w-md overflow-y-auto">
            <h2 className="text-lg font-semibold mb-2">Detail: {title}</h2>
            <p className="font-semibold">Release date: {release_date}</p>
            <p>{overview}</p>
            <button
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700"
              onClick={toggleOverview}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Moviecard;
