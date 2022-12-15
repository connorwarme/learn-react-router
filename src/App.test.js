import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
// import TestComponent from "path-to-test-component";
import App from "./App";

window.fetch = jest.fn(() => {
    const user = { name: 'Lionel Messi', email: 'lmessi@legend.com'};
  
    return Promise.resolve({
      json: () => Promise.resolve(user),
    })
  })

test('display loading text while api request in progress', async () => {
    render(<App />);
    const loading = screen.getByText('Loading...');
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText('Loading...'))
});

test('username is rendered', async () => {
    render(<App />)
    screen.debug()
    const userName = await screen.findByText('Lionel Messi');
    expect(userName).toBeInTheDocument();
})
test('shows error message', async () => {
    window.fetch.mockImplementationOnce(() => {
        return Promise.reject({message: 'API is down'})
    })
    render(<App />)
    const errorMessage = await screen.findByText('API is down');
    expect(errorMessage).toBeInTheDocument();
})
