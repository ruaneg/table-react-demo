import { render } from '@testing-library/react';
import 'jest-styled-components';
import { describe, test, expect } from 'vitest';
import {
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
  StyledTableCell,
  IconCell,
} from './Table.styles';

describe('Styled Components', () => {
  test('StyledTable has correct styles', () => {
    const { container } = render(<StyledTable />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('width', '100%');
    expect(element).toHaveStyleRule('border-collapse', 'collapse');
  });

  test('StyledTableHeader has correct styles', () => {
    const { container } = render(<StyledTableHeader />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('padding', '8px');
    expect(element).toHaveStyleRule('border', '1px solid #f1efef');
    expect(element).toHaveStyleRule('border-left', 'none');
    expect(element).toHaveStyleRule('border-right', 'none');
    expect(element).toHaveStyleRule('font-size', '1rem');
    expect(element).toHaveStyleRule('font-weight', '500');
    expect(element).toHaveStyleRule('text-align', 'left');
  });

  test('StyledTableRow has correct styles', () => {
    const { container } = render(<StyledTableRow />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('background', 'white');
    expect(element).toHaveStyleRule('border', '1px solid #f1efef');
    expect(element).toHaveStyleRule('background', '#f1f1f1', {
      modifier: ':hover',
    });
  });

  test('StyledTableRow applies selected style', () => {
    const { container } = render(<StyledTableRow selected />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('background', '#e0f7fa');
  });

  test('StyledTableCell has correct styles', () => {
    const { container } = render(<StyledTableCell />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('padding', '8px');
    expect(element).toHaveStyleRule('padding-right', '32px');
    expect(element).toHaveStyleRule('font-size', '0.875rem');
  });

  test('IconCell has correct styles', () => {
    const { container } = render(<IconCell />);
    const element = container.firstChild;

    expect(element).toHaveStyleRule('padding', '8px');
    expect(element).toHaveStyleRule('text-align', 'end');
    expect(element).toHaveStyleRule('font-size', '0.875rem');
  });
});
