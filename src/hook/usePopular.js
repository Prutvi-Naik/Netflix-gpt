import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";

const usePopular = ()=>{
const dispatch = useDispatch()
  const getPopularMoveis = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_Options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    dispatch(addPopularMovies(jsonData?.results))
    console.log("FORm use popular")
    console.log(jsonData)
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
  }
};

useEffect(() => {
  getPopularMoveis();
}, []);

}

export default usePopular;