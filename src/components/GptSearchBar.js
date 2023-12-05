import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //make an api call to GPT api and get movie results
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the example result give ahead. Example Results: Gadar, Animal , Golmaal , Jawan , Dhamaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
      //TODO: write Error handling}
    }
    console.log(gptResults.choices?.[0]?.message?.content, "result");
    //Converting to array using split -[]
    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
    //for each movie have to perform api search from TMDB
    const promiseArr = gptMovieList.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArr);
    dispatch(addGptMovieResult({movieNames: gptMovieList,movieResults:tmdbResults}));
    // console.log(tmdbResults);
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          className="p-4 m-2 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
