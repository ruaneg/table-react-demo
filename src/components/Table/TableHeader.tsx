import { StyledTableHeader, StyledTableRow } from './Table.styles';

export const TableHeader = ({ headers }: { headers: string[] }) => {
  return (
    <thead>
      <StyledTableRow>
        {headers.map((header, index) => (
          <StyledTableHeader key={index}>{header}</StyledTableHeader>
        ))}
      </StyledTableRow>
    </thead>
  );
};
