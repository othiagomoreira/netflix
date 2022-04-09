import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from './routes';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesComponent />
    </BrowserRouter>
  );
};
