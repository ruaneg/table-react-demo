import styled from "styled-components";
import { FileData, Status } from "./fileData";
import useFileTable, { isFileStatusAvailable } from "./useFileTable";
import {
  IconCell,
  StyledTable,
  StyledTableCell,
  StyledTableRow,
} from "~/components/Table/Table.styles";
import { FaCircle } from "react-icons/fa";
import { TableHeader } from "~/components/Table/TableHeader";
import { TableTop } from "./TableTop";

const StatusText = styled.span<{ status: string }>`
  color: ${(props) => (props.status === Status.available ? "green" : "red")};
  text-transform: capitalize;
`;

export const FileTable = ({ files }: { files: FileData[] }) => {
  const {
    selectedRows,
    handleSelectChange,
    selectAll,
    handleSelectAllChange,
    indeterminate,
  } = useFileTable(files);

  return (
    <div>
      <TableTop
        selectAll={selectAll}
        indeterminate={indeterminate}
        selectedRows={selectedRows}
        handleSelectAllChange={handleSelectAllChange}
      />
      <StyledTable>
        <TableHeader headers={["", "Name", "Device", "Path", "", "Status"]} />
        <tbody>
          {files.map((file) => (
            <StyledTableRow
              key={file.name}
              selected={selectedRows.includes(file)}
            >
              <StyledTableCell>
                <input
                  aria-label={`Select ${file.name}`}
                  role="checkbox"
                  type="checkbox"
                  checked={selectedRows.includes(file)}
                  onChange={() => handleSelectChange(file)}
                  disabled={!isFileStatusAvailable(file.status)}
                />
              </StyledTableCell>
              {[file.name, file.device, file.path].map((item) => (
                <StyledTableCell key={item}>{item}</StyledTableCell>
              ))}
              <IconCell>
                {isFileStatusAvailable(file.status) ? (
                  <FaCircle color="green" />
                ) : null}
              </IconCell>
              <StyledTableCell>
                <StatusText status={file.status}>{file.status}</StatusText>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};
