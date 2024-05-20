import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { theme } from './styles';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}
