import { BrowserRouter } from 'react-router-dom';
import { MoviesProvider } from './hooks/useMovies';
import { RoutesComponent } from './routes';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <MoviesProvider>
        <RoutesComponent />
      </MoviesProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};
