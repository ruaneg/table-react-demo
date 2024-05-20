import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';
import { describe, test, expect } from 'vitest';
import { FileTable } from './FileTable';
import { FileData, Status } from './fileData';

describe('FileTable', () => {
  const files: FileData[] = [
    {
      name: 'smss.exe',
      device: 'Mario',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
      status: Status.scheduled,
    },
    {
      name: 'netsh.exe',
      device: 'Luigi',
      path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
      status: Status.available,
    },
    {
      name: 'uxtheme.dll',
      device: 'Peach',
      path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
      status: Status.available,
    },
  ];

  test('renders correctly with given files', () => {
    const { container } = render(<FileTable files={files} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders the correct number of rows', () => {
    render(<FileTable files={files} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(files.length + 1); // including the header row
  });

  test.skip('checkbox is disabled for unavailable files', () => {
    render(<FileTable files={files} />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeDisabled(); // smss.exe is scheduled
    expect(checkboxes[1]).not.toBeDisabled(); // netsh.exe is available
    expect(checkboxes[2]).not.toBeDisabled(); // uxtheme.dll is available
  });

  test('selects and deselects files correctly', () => {
    const { getAllByRole } = render(<FileTable files={files} />);
    const checkboxes = getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]); // Select netsh.exe
    expect(checkboxes[1]).toBeChecked();

    fireEvent.click(checkboxes[1]); // Deselect netsh.exe
    expect(checkboxes[1]).not.toBeChecked();
  });

  test.skip('applies correct styles to status text', () => {
    const { getByText } = render(<FileTable files={files} />);
    const availableStatus = getByText('Available');
    const scheduledStatus = getByText('Scheduled');

    expect(availableStatus).toHaveStyleRule('color', 'green');
    expect(scheduledStatus).toHaveStyleRule('color', 'red');
  });
});
