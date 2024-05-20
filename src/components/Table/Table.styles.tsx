import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const StyledTableHeader = styled.th`
  padding: 8px;
  border: 1px solid #f1efef;
  border-left: none;
  border-right: none;
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
`;

export const StyledTableRow = styled.tr<{ selected?: boolean }>`
  background: ${(props) => (props.selected ? '#e0f7fa' : 'white')};
  border: 1px solid #f1efef;
  &:hover {
    background: #f1f1f1;
  }
`;

export const StyledTableCell = styled.td`
  padding: 8px;
  padding-right: 32px;
  font-size: 0.875rem;
`;

export const IconCell = styled.td`
  padding: 8px;
  text-align: end;
  font-size: 0.875rem;
`;
