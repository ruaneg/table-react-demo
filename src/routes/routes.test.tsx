import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { Home } from '~/pages/Home';
import { CenteredContainer } from '~/components/Layout/CenteredContainer';

describe('routes', () => {
  test.skip('renders the Home component for the root path', () => {
    const memoryRouter = createMemoryRouter(routes.routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  test('renders the ErrorBoundary on route error', () => {
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

    render(<RouterProvider router={memoryRouter} />);

    expect(screen.getByText('Oops!')).toBeInTheDocument();
  });
});
