import NowPlayMoveies from "./NowPlayMoveies"
import PopularMovies from "./PopularMovies"
import TopRatedMovies from "./TopRatedMovies"
import Upcomming from "./Upcomming"


const MovieListContainer = () => {
  return (
      // -- name
        //  container *n
        <div className="-mt-52 w-screen aspect-video">
     <NowPlayMoveies title={"Now Playing Movies"}/>
      <Upcomming title={"Upcomming"}/>
     <TopRatedMovies title={"Top Rated"}/>
     <PopularMovies title={"Popular"}/>

    </div>
  )
}

export default MovieListContainer