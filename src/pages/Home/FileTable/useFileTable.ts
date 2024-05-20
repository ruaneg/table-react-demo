import { useEffect, useState } from 'react';
import { FileData, Status } from './fileData';

export const isFileStatusAvailable = (status: string) =>
  status === Status.available;
const getAvailableFiles = (files: FileData[]) =>
  files.filter((file) => isFileStatusAvailable(file.status));

const useFileTable = (files: FileData[]) => {
  const [selectedRows, setSelectedRows] = useState<FileData[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  useEffect(() => {
    const availableFiles = getAvailableFiles(files);
    setSelectAll(selectedRows.length === availableFiles.length);
    setIndeterminate(
      selectedRows.length > 0 && selectedRows.length < availableFiles.length
    );
  }, [selectedRows, files]);

  const handleSelectAllChange = () => {
    const availableFiles = getAvailableFiles(files);
    setSelectedRows(
      selectedRows.length === availableFiles.length ? [] : availableFiles
    );
  };

  const handleSelectChange = (file: FileData) => {
    setSelectedRows(
      selectedRows.includes(file)
        ? selectedRows.filter((f) => f !== file)
        : [...selectedRows, file]
    );
  };
  return {
    selectedRows,
    handleSelectChange,
    selectAll,
    handleSelectAllChange,
    indeterminate,
  };
};

export default useFileTable;
