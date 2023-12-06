import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;
  if (!movieNames) return;

  return (
    movieResults.length !==0 ? (
      <div className="m-4 p-4 bg-black bg-opacity-90 text-white rounded-lg">
        <div>
          {movieResults.map((movie, index) => (
            <MovieList
              key={movieNames[index]}
              title={movieNames[index]}
              movies={movie}
            />
          ))}
          {/* {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))} */}
        </div>
      </div>
    ) : ""
  );
};

export default GptMovieSuggestions;
