import React from "react";
import GameList from "../components/gameList";
import SampleGame from "./sampleData";
import { MemoryRouter } from "react-router";
import AddToCollectionIcon from "../components/cardIcons/addToCollection";
import Grid from "@material-ui/core/Grid";
import GamesContextProvider from "../contexts/gamesContext";

export default {
  title: "Games/GameList",
  component: GameList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <GamesContextProvider>{Story()}</GamesContextProvider>,
  ],
};

export const Basic = () => {
  const games = [
    { ...SampleGame[0], id: 1 },
    { ...SampleGame[0], id: 2 },
    { ...SampleGame[0], id: 3 },
    { ...SampleGame[0], id: 4 },
    { ...SampleGame[0], id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <GameList
        games={games}
        action={(game) => <AddToCollectionIcon game={game} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
