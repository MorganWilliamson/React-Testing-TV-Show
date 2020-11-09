import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes render without error.", () => {
    render(<Episodes episodes={[]}/>);
});

test("Rerender episode list when data populates.", () => {
    render(<Episodes episodes={[]}/>);

    const testEpisodes = [
        {
            episode_id: 1,
            episode_name: "Chapter One"
        },
        {
            episode_id: 2,
            episode_name: "Chapter Two"
        },
    ];

    const { rerender } = render(<Episodes episodes={[]}/>);
    rerender(<Episodes episodes={testEpisodes} />);
    expect(screen.queryAllByTestId("episodes")).toHaveLength(2);
});