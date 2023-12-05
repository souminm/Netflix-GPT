import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG_IMG } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img src={NETFLIX_BG_IMG} alt="logo"></img>
      </div>
       <GptSearchBar/>
       <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch;