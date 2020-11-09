import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App"

test("App renders without errors.", () => {
    render(<App />);
});

test("Dropdown menu renders.", async () => {
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    expect(dropdown).toBeEnabled();
});

test("Dropdown menu populates info.", async () => {
    render(<App />);

    const dropdown = await screen.findByText(/select a season/i);
    fireEvent.click(dropdown);

    const seasons = await screen.queryByText(/Season 1/i);
    expect(seasons).toBeNull();
})