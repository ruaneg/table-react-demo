import { render } from '@testing-library/react';
import 'jest-styled-components';
import { describe, test, expect } from 'vitest';
import { IconContainer } from './Icons.styles';

describe('IconContainer', () => {
  test('renders correctly with default styles', () => {
    const { container } = render(<IconContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('applies correct styles', () => {
    const { container } = render(<IconContainer />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('padding', '0 8px');
    expect(element).toHaveStyleRule('font-size', '0.875rem');
  });
});
