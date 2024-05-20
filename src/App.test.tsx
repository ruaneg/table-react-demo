import { describe, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { theme } from './styles';
import { Home } from '~/pages/Home';
import { CenteredContainer } from '~/components/Layout/CenteredContainer';

vi.mock('~/App', () => {
  return {
    default: () => <span>App</span>,
  };
});
describe('App', () => {
  test.skip('renders the Home component within ThemeProvider and RouterProvider', () => {
    const memoryRouter = createMemoryRouter(routes.routes, {
      initialEntries: ['/'],
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterProvider router={memoryRouter} />
      </ThemeProvider>
    );

    // Adjust this to match the actual content of your Home component
    expect(screen.getByText('App')).toBeInTheDocument();
  });

  test('renders the ErrorBoundary within ThemeProvider and RouterProvider on route error', () => {
    const errorRoutes = [
      {
        path: '/',
        element: <Home />,
        errorElement: <CenteredContainer>Oops!</CenteredContainer>,
      },
    ];
    const memoryRouter = createMemoryRouter(errorRoutes, {
      initialEntries: ['/non-existent-path'],
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterProvider router={memoryRouter} />
      </ThemeProvider>
    );

    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});
