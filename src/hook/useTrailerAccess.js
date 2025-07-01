
import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";



const useTrailerAccess = (id) => {
  console.log(id)
    const dispatch = useDispatch()
    console.log(id)
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
        API_Options
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json(); // Fixed: need to call .json() as a function
      const trailerData = jsonData.results.filter(
        (video) => video.type == "Trailer"
      );
      
      const trailer = trailerData.length ? trailerData[0] : jsonData.results[0];
      console.log(trailer)
      dispatch(addTrailerVideo(trailer))

      return jsonData; // Optional: return the data if you need to use it elsewhere
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useTrailerAccess