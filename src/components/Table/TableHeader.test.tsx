import { render } from '@testing-library/react';
import 'jest-styled-components';
import { describe, test, expect } from 'vitest';
import { TableHeader } from './TableHeader';

describe('TableHeader', () => {
  test('renders correctly with given headers', () => {
    const headers = ['Name', 'Age', 'Address'];
    const { container } = render(<TableHeader headers={headers} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders the correct number of headers', () => {
    const headers = ['Name', 'Age', 'Address'];
    const { getAllByRole } = render(<TableHeader headers={headers} />);
    const headerElements = getAllByRole('columnheader');
    expect(headerElements).toHaveLength(headers.length);
  });

  test('renders headers with correct text', () => {
    const headers = ['Name', 'Age', 'Address'];
    const { getAllByRole } = render(<TableHeader headers={headers} />);
    const headerElements = getAllByRole('columnheader');
    headerElements.forEach((headerElement, index) => {
      expect(headerElement).toHaveTextContent(headers[index]);
    });
  });

  test.skip('applies correct styles to headers and rows', () => {
    const headers = ['Name', 'Age', 'Address'];
    const { container } = render(<TableHeader headers={headers} />);
    const row = container.querySelector('tr');
    const header = container.querySelector('th');

    expect(row).toHaveStyleRule('display', 'table-row');
    expect(header).toHaveStyleRule('display', 'table-cell');
  });
});
