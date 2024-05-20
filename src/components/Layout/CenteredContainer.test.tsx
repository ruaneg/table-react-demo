import { render } from '@testing-library/react';
import 'jest-styled-components';
import { describe, test, expect } from 'vitest';
import { CenteredContainer } from './CenteredContainer';

describe('CenteredContainer', () => {
  test('renders correctly with default styles', () => {
    const { container } = render(<CenteredContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('applies correct styles', () => {
    const { container } = render(<CenteredContainer />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('display', 'flex');
    expect(element).toHaveStyleRule('justify-content', 'center');
    expect(element).toHaveStyleRule('align-items', 'center');
    expect(element).toHaveStyleRule('height', '100vh');
  });
});
