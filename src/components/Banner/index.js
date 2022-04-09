import { useEffect, useState } from 'react';

import { Tmdb } from '../../services/Tmdb';
import { MdInfoOutline, MdPlayArrow } from 'react-icons/md';

import { formattedText } from '../../utils/formattedText';
import {
  Container,
  Content,
  ButtonPlay,
  ButtonInfo,
  FadeBottom,
} from './style';

export const Banner = () => {
  const [movie, setMovie] = useState({});

  const { backgroundImage, name, sinopse } = movie;

  useEffect(() => {
    const loadOriginalsNetflix = async () => {
      const allNetflixOriginals = await Tmdb.getNetflixOriginals();
      const originals = allNetflixOriginals.item[0];

      const randomNumber = Math.floor(Math.random() * originals.length);
      const randomMovie = originals[randomNumber];

      const formattedMovie = {
        ...randomMovie,
        sinopse: formattedText(randomMovie?.overview, 170),
        backgroundImage: `https://image.tmdb.org/t/p/original${
          randomMovie.backdrop_path || randomMovie.poster_path
        }`,
        name:
          randomMovie.title || randomMovie.name || randomMovie.original_name,
      };

      setMovie(formattedMovie);
    };

    loadOriginalsNetflix();
  }, []);

  return (
    <Container backgroundImage={backgroundImage}>
      <Content>
        <h2>{name}</h2>
        <p>{sinopse}</p>

        <div>
          <ButtonPlay type="button">
            <MdPlayArrow /> Play
          </ButtonPlay>
          <ButtonInfo type="button">
            <MdInfoOutline /> More Info
          </ButtonInfo>
        </div>
      </Content>
      <FadeBottom />
    </Container>
  );
};
