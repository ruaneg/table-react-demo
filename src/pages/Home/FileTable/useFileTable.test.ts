import { renderHook, act } from '@testing-library/react';
import { describe, expect } from 'vitest';
import useFileTable, { isFileStatusAvailable } from './useFileTable';
import { FileData } from './fileData';

describe('useFileTable', () => {
  const mockFiles: FileData[] = [
    {
      name: 'smss.exe',
      device: 'Mario',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: 'scheduled',
    },
    {
      name: 'netsh.exe',
      device: 'Luigi',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
      status: 'available',
    },
    {
      name: 'uxtheme.dll',
      device: 'Peach',
      path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
      status: 'available',
    },
  ];

  test('initializes with no selected rows', () => {
    const { result } = renderHook(() => useFileTable(mockFiles));
    expect(result.current.selectedRows).toEqual([]);
    expect(result.current.selectAll).toBe(false);
    expect(result.current.indeterminate).toBe(false);
  });

  test('selects all available files when handleSelectAllChange is called', () => {
    const { result } = renderHook(() => useFileTable(mockFiles));
    act(() => {
      result.current.handleSelectAllChange();
    });
    expect(result.current.selectedRows).toEqual(
      mockFiles.filter((file) => isFileStatusAvailable(file.status))
    );
    expect(result.current.selectAll).toBe(true);
    expect(result.current.indeterminate).toBe(false);
  });

  test('deselects all files when handleSelectAllChange is called again', () => {
    const { result } = renderHook(() => useFileTable(mockFiles));
    act(() => {
      result.current.handleSelectAllChange();
    });
    act(() => {
      result.current.handleSelectAllChange();
    });
    expect(result.current.selectedRows).toEqual([]);
    expect(result.current.selectAll).toBe(false);
    expect(result.current.indeterminate).toBe(false);
  });

  test('updates selectedRows correctly when handleSelectChange is called', () => {
    const { result } = renderHook(() => useFileTable(mockFiles));
    const availableFile = mockFiles.find((file) =>
      isFileStatusAvailable(file.status)
    )!;
    act(() => {
      result.current.handleSelectChange(availableFile);
    });
    expect(result.current.selectedRows).toEqual([availableFile]);
    act(() => {
      result.current.handleSelectChange(availableFile);
    });
    expect(result.current.selectedRows).toEqual([]);
  });

  test('sets indeterminate state correctly', () => {
    const { result } = renderHook(() => useFileTable(mockFiles));
    const availableFiles = mockFiles.filter((file) =>
      isFileStatusAvailable(file.status)
    );
    act(() => {
      result.current.handleSelectChange(availableFiles[0]);
    });
    expect(result.current.selectedRows).toEqual([availableFiles[0]]);
    expect(result.current.indeterminate).toBe(true);
    expect(result.current.selectAll).toBe(false);
  });
});
