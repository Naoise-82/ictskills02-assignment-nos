import React from "react";
import ConsoleCard from "../components/consoleCard";
import SampleConsoles from "./sampleConsoles";
import { MemoryRouter } from "react-router";

export default {
  title: "Consoles/ConsoleCard",
  component: ConsoleCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => {
  return (
    <ConsoleCard
      gameConsole={SampleConsoles[0]}
      action={console}
      tagging={(console) => null}
    />
  );
};

Basic.storyName = "Default";

