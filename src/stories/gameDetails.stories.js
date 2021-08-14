import React from "react";
import GameDetails from "../components/gameDetails";
import SampleGame from "./sampleData";
import { MemoryRouter } from "react-router";
import GameContextProvider from "../contexts/gamesContext";

export default {
  title: "Game Details Page/GameDetails",
  component: GameDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <GameContextProvider>{Story()}</GameContextProvider>,
  ],
};

export const Basic = () => <GameDetails game={SampleGame} />;

Basic.storyName = "Default";
