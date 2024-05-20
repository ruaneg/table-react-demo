import { describe, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  test("should render the App component with routing and theme", () => {
    // Render the App component within the test
    render(<App />);

    expect(screen.getByText(/None Selected/i)).toBeInTheDocument();
  });
});
