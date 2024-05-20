import { describe, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { routes } from './routes';
import { theme } from './styles';

vi.mock('~/App', () => {
  return {
    default: () => <span>App</span>,
  };
});

describe('index.tsx', () => {
  test.skip('renders the App component', () => {
    const memoryRouter = createMemoryRouter(routes.routes, {
      initialEntries: ['/'],
    });

    render(
      <ThemeProvider theme={theme}>
        <RouterProvider router={memoryRouter} />
      </ThemeProvider>,
      {
        container: document.createElement('div'),
      }
    );

    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
