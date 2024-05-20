import { createBrowserRouter, useRouteError } from 'react-router-dom';
import { Home } from '~/pages/Home';
import { CenteredContainer } from '~/components/Layout/CenteredContainer';

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return <CenteredContainer>Oops!</CenteredContainer>;
}

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
]);
