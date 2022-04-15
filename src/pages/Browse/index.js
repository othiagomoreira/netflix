import React from 'react';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header/index';
import { MovieRows } from '../../components/MovieRows';

export const Browse = () => {
  return (
    <>
      <Header />
      <Banner />
      <MovieRows />
    </>
  );
};
