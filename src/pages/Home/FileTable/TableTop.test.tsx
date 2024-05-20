import { render, screen, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { describe, it, expect, vi } from "vitest";
import { TableTop } from "./TableTop";
import { FileData } from "./fileData";

describe("TableTop", () => {
  const mockFiles: FileData[] = [
    {
      name: "smss.exe",
      device: "Mario",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },
    {
      name: "netsh.exe",
      device: "Luigi",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available",
    },
  ];

  const handleSelectAllChange = vi.fn();

  test("renders correctly with initial props", () => {
    const { container } = render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={[]}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('displays "None Selected" when no files are selected', () => {
    render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={[]}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    expect(screen.getByText("None Selected")).toBeInTheDocument();
  });

  test("displays the correct number of selected files", () => {
    render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={mockFiles}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    expect(
      screen.getByText(`Selected ${mockFiles.length}`)
    ).toBeInTheDocument();
  });

  test("calls handleSelectAllChange when the checkbox is clicked", () => {
    render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={mockFiles}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    const checkbox = screen.getByLabelText("Select all available files");
    fireEvent.click(checkbox);
    expect(handleSelectAllChange).toHaveBeenCalledTimes(1);
  });

  test("disables the download button when no files are selected", () => {
    render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={[]}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    const button = screen.getByLabelText("Download Selected files");
    expect(button).toBeDisabled();
  });

  test("enables the download button when files are selected", () => {
    render(
      <TableTop
        selectAll={false}
        indeterminate={false}
        selectedRows={mockFiles}
        handleSelectAllChange={handleSelectAllChange}
      />
    );
    const button = screen.getByLabelText("Download Selected files");
    expect(button).not.toBeDisabled();
  });
});
