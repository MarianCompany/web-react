import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { HomePage } from "./index";

describe("root", () => {
  it("renders without crashing", () => {
    render(
        <HomePage />
    );
    const home = screen.getByText(/Hello World!/gi);
    expect(home).toBeInTheDocument();
  });

  // Add more test cases as needed
});