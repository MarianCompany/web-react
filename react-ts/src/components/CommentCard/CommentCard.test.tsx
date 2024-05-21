import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { CommentCard } from "./index";

describe("root", () => {
  it("renders without crashing", () => {
    render(
      <CommentCard
        comment={{
          name: 's1',
          body: 's2',
          email: 's3',
          id: 1,
          postId: 2,
        }}
      />
    );
    const name = screen.getByText("s1");
    expect(name).toBeInTheDocument();

    const body = screen.getByText("s2");
    expect(body).toBeInTheDocument();

    const email = screen.getByText("s3");
    expect(email).toBeInTheDocument();
  });

  // Add more test cases as needed
});