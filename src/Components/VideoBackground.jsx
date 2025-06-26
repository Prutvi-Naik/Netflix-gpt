import {  useSelector } from "react-redux";
import useTrailerAccess from "../hook/useTrailerAccess";

const VideoBackground = ({ id }) => {
    const trailerVideo = useSelector((store)=>store.movie.trailerVideo)
    console.log(trailerVideo?.key)
    useTrailerAccess(id)
  return (
    <div>
      <iframe
        className="w-screen aspect-video overflow-hidden"
     src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&playsinline=1&showinfo=0&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&vq=hd2160`}
       
      ></iframe>
    </div>
  );
};

export default VideoBackground;
