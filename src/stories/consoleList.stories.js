import React from "react";
import GameConsoleList from "../components/consoleList";
import SampleConsoles from "./sampleConsoles";
import { MemoryRouter } from "react-router";
import Grid from "@material-ui/core/Grid";

export default {
  title: "Consoles/GameConsoleList",
  component: GameConsoleList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>
  ]
};

export const Basic = () => {
  const gameConsoles = [
    { ...SampleConsoles[0], id: 1 },
    { ...SampleConsoles[1], id: 2 },
    { ...SampleConsoles[2], id: 3 },
    { ...SampleConsoles[3], id: 4 },
    { ...SampleConsoles[4], id: 5 },
  ];
  console.log(gameConsoles);
  return (
    <Grid container spacing={5}>
      <GameConsoleList
        gameConsoles={gameConsoles}
        action={(gameConsole) => gameConsole={gameConsole}}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
