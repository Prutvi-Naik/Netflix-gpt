import Header from "./Header";
import useNowPlayingMovie from "../hook/useNowPlayingMovie";
import TrailerContainer from "./TrailerContainer";
import MovieListContainer from "./MovieListContainer";

const Browse = () => {
  useNowPlayingMovie();
  return (
    <div>
      <div className="flex justify-between">
        <Header />
      </div>
      <div>
        <TrailerContainer />
        {/* <MovieListContainer/> */}
      </div>
    </div>
  );
};

export default Browse;
