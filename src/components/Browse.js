import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {

  //Fetch data from TMDB movie and update store with all those results.
   useNowPlayingMovies();
   usePopularMovies();


  return (
    <div>
      <Header />
      {/**
       * Main Container
       *  video background
       *  video title
       * Secondary Container
       *  Movie-list *n
       *    cards*n
       */}
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  );
};

export default Browse;
