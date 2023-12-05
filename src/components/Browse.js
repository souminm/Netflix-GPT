import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  //Fetch data from TMDB movie and update store with all those results.
  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/**
       * Main Container
       *  video background
       *  video title
       * Secondary Container
       *  Movie-list *n
       *    cards*n
       */}
    </div>
  );
};

export default Browse;
