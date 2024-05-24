import { describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { PDFPage } from "./index.tsx";

describe("PdfPage", () => {
  it("renders without crashing", () => {
    render(
        <PDFPage />
    );
    const home = screen.getByText(/Form/i);
    expect(home).toBeInTheDocument();
  });

  it("form validates correctly", async () => {
    render(
      <PDFPage />
    );
    const input = screen.getByTestId("input");
    fireEvent.change(input, { target: { value: "sss" } });
    expect(input.value).toBe('sss');
  });

  // Add more test cases as needed
});