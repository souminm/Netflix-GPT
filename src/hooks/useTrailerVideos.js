import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";

const useTrailerVideos = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        // console.log(json, "movie");
        const trailer = json.results.length
          ? json.results.filter((video) => video.type === "Trailer")
          : json.results[0];
        dispatch(addTrailerVideo(trailer))
        
      };
      useEffect(() => {
        getMovieVideos();
      }, []);

}

export default useTrailerVideos;