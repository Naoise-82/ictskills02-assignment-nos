import React from "react";
import GameHeader from "../components/gameHeader";
import SampleGame from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Game Details Page/GameHeader",
  component: GameHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <GameHeader game={SampleGame} />;

Basic.storyName = "Default";
