import { MemoryRouter } from 'react-router-dom';

import { render } from '~/utils/tests';

import { Home } from '.';

describe('<Home />', () => {
  test('renders correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });
});
