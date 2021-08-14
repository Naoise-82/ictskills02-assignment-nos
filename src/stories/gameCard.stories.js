import React from "react";
import GameCard from "../components/gameCard";
import SampleGame from "./sampleData";
import { MemoryRouter } from "react-router";
import GamesContextProvider from "../contexts/gamesContext";
import AddToCollectionIcon from "../components/cardIcons/addToCollection";

export default {
  title: "Home Page/GameCard",
  component: GameCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <GamesContextProvider>{Story()}</GamesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <GameCard
      game={SampleGame}
      action={(game) => <AddToCollectionIcon game={game} />}
      tagging={(game) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleGame, poster_path: undefined };
  return (
    <GameCard
      game={sampleNoPoster}
      action={(game) => <AddToCollectionIcon game={game} />}
      taging={(game) => null}
    />
  );
};
Exceptional.storyName = "exception";
