import { useMovies } from '../../hooks/useMovies';
import { Posters } from '../Posters';

export const MovieRows = () => {
  const { allMovies, originalsNetflix } = useMovies();

  return (
    <>
      <Posters movies={originalsNetflix} isOriginal />

      {allMovies.map((movie) => (
        <Posters key={movie.slug} movies={movie} />
      ))}
    </>
  );
};
