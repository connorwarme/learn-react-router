import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";
import App from "./App";

describe("App Component", () => {
    it("renders mag monkeys", () => {
        const { container } = render(<App />);
        expect(container).toMatchSnapshot();
    })
    it("renders rad rhinos after click", () => {
        render(<App />);
        const button = screen.getByRole("button");

        userEvent.click(button);

        expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    })
})