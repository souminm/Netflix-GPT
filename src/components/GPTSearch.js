import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG_IMG } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-full"src={NETFLIX_BG_IMG} alt="logo"></img>
      </div>
      <div className=''>
       <GptSearchBar/>
       <GptMovieSuggestions/>
       </div>
    </div>
  )
}

export default GPTSearch;