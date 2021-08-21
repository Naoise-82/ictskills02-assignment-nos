import React from "react";
import GameCard from "../components/gameCard";
import SampleGame from "./sampleData";
import { MemoryRouter } from "react-router";
import GamesContextProvider from "../contexts/gamesContext";
import AddToCollectionIcon from "../components/cardIcons/addToCollection";

export default {
  title: "Games/GameCard",
  component: GameCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <GamesContextProvider>{Story()}</GamesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <GameCard
      game={SampleGame[0]}
      action={(game) => <AddToCollectionIcon game={game} />}
      tagging={(game) => null}
    />
  );
};
Basic.storyName = "Default";

