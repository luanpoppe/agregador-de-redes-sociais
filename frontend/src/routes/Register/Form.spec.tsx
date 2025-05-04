import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import { MemoryRouter } from "react-router";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <Form />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/nome/i);
  expect(linkElement).toBeInTheDocument();
});
