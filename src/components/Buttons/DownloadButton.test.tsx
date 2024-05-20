import { render, fireEvent } from "@testing-library/react";
import "jest-styled-components";
import { describe, test, expect, vi } from "vitest";
import DownloadButton from "./DownloadButton";

describe("DownloadButton", () => {
  test("renders correctly", () => {
    const { container } = render(
      <DownloadButton
        handleOnClick={() => {}}
        label="Download"
        disabled={false}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("calls handleOnClick when clicked", () => {
    const handleOnClick = vi.fn();
    const { getByLabelText } = render(
      <DownloadButton
        handleOnClick={handleOnClick}
        label="Download"
        disabled={false}
      />
    );
    const button = getByLabelText("Download Selected files");
    fireEvent.click(button);
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });

  test("applies correct styles when active", () => {
    const { getByLabelText } = render(
      <DownloadButton
        handleOnClick={() => {}}
        label="Download"
        disabled={false}
      />
    );
    const button = getByLabelText("Download Selected files");

    // Simulate active state
    fireEvent.mouseDown(button);

    expect(button).toHaveStyleRule("color", "dodgerblue", {
      modifier: ":active",
    });
  });

  test("applies correct styles when disabled", () => {
    const { getByLabelText } = render(
      <DownloadButton handleOnClick={() => {}} label="Download" disabled />
    );
    const button = getByLabelText("Download Selected files");

    expect(button).toHaveStyleRule("pointer-events", "none", {
      modifier: ":disabled",
    });
    expect(button).toHaveStyleRule("opacity", "0.6", {
      modifier: ":disabled",
    });

    // Ensure click is not triggered
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
