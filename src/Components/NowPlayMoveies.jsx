import React from 'react';
import { useSelector } from 'react-redux';
import { POSTER_URL } from '../Utils/constants';

const NowPlayMovies = ({ title }) => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);

  if (!movies) return (
    <div className="p-4 text-center text-gray-500">
      Loading movies...
    </div>
  );

  if (movies.length === 0) return (
    <div className="p-4 text-center text-red-500">
      No movies available
    </div>
  );

  return (
    <div className=' bg-black'>
    <div className="px-6 pb-8 ">
      <h1 className="text-2xl font-bold text-white pb-4 z-50">{title}</h1>
      
      {/* Scroll container with hidden scrollbar */}
      <div className="relative ">
        <div className="flex overflow-x-auto overflow-y-hidden gap-4 h-[300px] 
                       no-scrollbar"> {/* Magic class here */}
          {movies.map((movie) => (
            movie.poster_path && (
              <div 
                key={movie.id} 
                className="flex-none w-48 h-full rounded-lg overflow-x-hidden no-scrollbar shadow-lg 
                          hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={POSTER_URL+movie.poster_path} 
                  alt={movie.title || "Movie poster"} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x450?text=Poster+Not+Available';
                  }}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default NowPlayMovies;