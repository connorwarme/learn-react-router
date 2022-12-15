import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";
import App from "./App";

test('check input value responds to user event', () => {
    render(<App />)

    const input = screen.getByLabelText('Win?');

    userEvent.type(input, 'React');

    expect(input.value).toBe('React');
})