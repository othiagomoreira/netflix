import { createContext, useContext, useEffect, useState } from 'react';
import { Tmdb } from '../services/Tmdb';

const MoviesContext = createContext({});

export const MoviesProvider = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [originalsNetflix, setOriginalsNetflix] = useState([]);

  useEffect(() => {
    const loadingMovies = async () => {
      const movies = await Tmdb.getHomeList();
      const originalsNetflix = await Tmdb.getNetflixOriginals();

      setAllMovies(movies);
      setOriginalsNetflix(originalsNetflix);
    };

    loadingMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ allMovies, originalsNetflix }}>
      {children}
    </MoviesContext.Provider>
  );
};

// Custom Hook
export const useMovies = () => {
  const context = useContext(MoviesContext);

  return context;
};
