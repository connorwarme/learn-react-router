import React from "react";
import Profile from "./Profile";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const user = {
    name: 'Connor',
    email: 'a@b.com'
}
test('renders div.person w/ content', () => {
    render(<Profile user={user} />)

    expect(screen.getByRole('heading')).toHaveTextContent('Connor');
    expect(screen.getByTestId('span-id')).toHaveTextContent('a@b.com');
})