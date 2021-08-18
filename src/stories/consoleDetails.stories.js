import React from "react";
import ConsoleDetails from "../components/consoleDetails";
import SampleConsoles from "./sampleConsoles";
import { MemoryRouter } from "react-router";
import GameContextProvider from "../contexts/gamesContext";

export default {
  title: "Console Details Page/ConsoleDetails",
  component: ConsoleDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <GameContextProvider>{Story()}</GameContextProvider>,
  ],
};

export const Basic = () => <ConsoleDetails gameConsole={SampleConsoles} />;

Basic.storyName = "Default";
