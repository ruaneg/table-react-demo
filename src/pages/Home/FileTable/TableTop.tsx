import styled from 'styled-components';
import DownloadButton from '~/components/Buttons/DownloadButton';
import { FileData } from './fileData';

export const StyledTableTop = styled.div`
  padding: 16px;
  border: 1px solid #f1efef;
  border-bottom: none;
  font-size: 1rem;
  display: flex;
`;

const SelectedText = styled.div`
  width: 8rem;
  margin: 0 1rem;
`;

export const TableTop = ({
  selectAll,
  indeterminate,
  selectedRows,
  handleSelectAllChange,
}: {
  selectAll: boolean;
  indeterminate: boolean;
  selectedRows: FileData[];
  handleSelectAllChange: () => void;
}) => {
  const handleDownloadSelected = () => {
    const selectedPaths = selectedRows
      .map((file) => `${file.device}: ${file.path}`)
      .join('\n');
    alert(`Selected files:\n${selectedPaths}`);
  };

  return (
    <StyledTableTop>
      <input
        aria-label="Select all available files"
        type="checkbox"
        checked={selectAll}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        onChange={handleSelectAllChange}
        style={{ marginLeft: '-4px' }}
      />
      <SelectedText>
        {selectedRows.length > 0
          ? `Selected ${selectedRows.length}`
          : 'None Selected'}
      </SelectedText>
      <div>
        <DownloadButton
          aria-label={'Download Selected files'}
          label={'Download Selected'}
          handleOnClick={handleDownloadSelected}
          disabled={selectedRows.length === 0}
        />
      </div>
    </StyledTableTop>
  );
};
