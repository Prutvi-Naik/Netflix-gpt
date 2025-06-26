import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";


const TrailerContainer = () => {
  const movie = useSelector((store) => store?.movie?.nowPlayingMovies);
  if (movie === null) return;
  const mainMovie = movie[15];
  console.log(mainMovie.original_title)
  const { original_title, overview,id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id}/>
    </div>
  );
};

export default TrailerContainer;
