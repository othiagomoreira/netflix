import React from 'react';

import LoadingGif from '../../assets/loading.gif';
import { Container } from './style';

export const Loading = () => {
  return <Container background={LoadingGif}></Container>;
};
