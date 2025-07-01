import { useEffect } from "react";
import { API_Options } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";

const useTopRatedMovies = ()=>{
const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_Options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    dispatch(addTopRatedMovies(jsonData?.results))
    console.log("FORm top rated")
    console.log(jsonData)
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
  }
};

useEffect(() => {
  getTopRatedMovies();
}, []);

}

export default useTopRatedMovies;