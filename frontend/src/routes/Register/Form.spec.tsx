import { render, screen } from "@testing-library/react";
import { Form } from "./Form";
import { MemoryRouter } from "react-router";
import axios from "axios";

// jest.mock("axios");

test("renders learn react link", () => {
  // const axiosMock = axios as jest.Mocked<typeof axios>;
  const mockResponseData = { message: "Data from mocked Google!" };
  // axiosMock.get.mockResolvedValue({ data: mockResponseData }); // Simulate a successful response
  // axiosMock.get.mockImplementation((path: string) => {
  //   return  {data: mockResponseData} }); // Simulate a successful response

  axios.get = jest.fn().mockResolvedValue({ data: mockResponseData });

  render(
    <MemoryRouter>
      <Form />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/nome/i);
  expect(linkElement).toBeInTheDocument();
});
