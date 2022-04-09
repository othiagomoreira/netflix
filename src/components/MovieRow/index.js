import React, { useEffect, useState } from 'react';
import { Tmdb } from '../../services/Tmdb';
import { Posters } from '../Posters';

export const MovieRow = () => {
  const [movieList, setMovieList] = useState([]);
  const [originalsList, setOriginalsList] = useState({});

  useEffect(() => {
    const loadAllMovies = async () => {
      const allMovies = await Tmdb.getHomeList();
      const allNetflixOriginals = await Tmdb.getNetflixOriginals();

      setMovieList(allMovies);
      setOriginalsList(allNetflixOriginals);
    };

    loadAllMovies();
  }, []);

  return (
    <>
      <Posters movies={originalsList} isOriginal />

      {movieList.map((movie) => (
        <Posters key={movie.slug} movies={movie} />
      ))}
    </>
  );
};
