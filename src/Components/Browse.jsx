import Header from "./Header";
import useNowPlayingMovie from "../hook/useNowPlayingMovie";
import TrailerContainer from "./TrailerContainer";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";
import NetworkIssue from "./NetworkIssue";
import usePopular from "../hook/usePopular";
import useTopRatedMovies from "../hook/useTopRatedMovies";
import useUpcomming from "../hook/useUpcomming";

const Browse = () => {
  const movie = useSelector(store => store.movie)
  console.log(movie.nowPlayingMovie)
  useNowPlayingMovie();
  usePopular()
  useTopRatedMovies()
  useUpcomming()
  return (
    <div>
      <div className="flex justify-between">
        <Header />
        <NetworkIssue />
      </div>
      <div>
        
        <TrailerContainer />
        <MovieListContainer/>
      </div>
    </div>
  );
};

export default Browse;