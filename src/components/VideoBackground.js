import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";


const VideoBackground = ({ movieId }) => {

    //fetch trailer video && updating the store with trailer video data.
   useTrailerVideos(movieId);
  //fetch trailer video
  const trailerVideo = useSelector(store =>store.movies?.trailerVideo);


  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.[0]?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default VideoBackground;
