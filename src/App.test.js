import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";
import App from "./App";

// describe("App Component", () => {
//     it("renders mag monkeys", () => {
//         const { container } = render(<App />);
//         expect(container).toMatchSnapshot();
//     })
//     it("renders rad rhinos after click", () => {
//         render(<App />);
//         const button = screen.getByRole("button");

//         userEvent.click(button);

//         expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
//     })
// })

test('render unordered list', () => {
    render(<App />);
    const listElement = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(listElement).toBeInTheDocument();
    expect(listElement).toHaveClass('animals');
    expect(listItems.length).toEqual(5)
})