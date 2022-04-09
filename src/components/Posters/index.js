import React, { useRef } from 'react';
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import {
  Container,
  PosterCarousel,
  ArrowButtonLeft,
  ArrowButtonRight,
} from './style';

export const Posters = ({ movies, isOriginal = false }) => {
  const carousel = useRef(null);
  const base_url = 'https://image.tmdb.org/t/p/original';

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <section>
        <h2>{movies.title}</h2>
        <div>
          <PosterCarousel ref={carousel} originalNetflixMovie={isOriginal}>
            {movies.item &&
              movies.item[0].map((movie) => (
                <li key={movie.id}>
                  <img
                    src={`${base_url}${movie.poster_path}`}
                    alt={movie.title || movie.name}
                  />
                </li>
              ))}
          </PosterCarousel>

          <ArrowButtonLeft type="button" onClick={handleLeftClick}>
            <MdOutlineArrowBackIosNew />
          </ArrowButtonLeft>

          <ArrowButtonRight type="button" onClick={handleRightClick}>
            <MdArrowForwardIos />
          </ArrowButtonRight>
        </div>
      </section>
    </Container>
  );
};
