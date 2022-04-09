import React from 'react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header/index';
import { MovieRow } from '../../components/MovieRow';

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <MovieRow />
    </>
  );
};
