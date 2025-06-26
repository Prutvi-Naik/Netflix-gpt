import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const useNowPlayingMovie = ()=>{
const dispatch = useDispatch()
  const getNowPlayingMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    dispatch(addNowPlayingMovies(jsonData?.results))
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
  }
};

useEffect(() => {
  getNowPlayingMovies();
}, []);

}

export default useNowPlayingMovie;