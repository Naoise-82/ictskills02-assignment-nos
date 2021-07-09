import React from "react";
import GameCard from "../components/gameCard";
import SampleGame from "./sampleData";
import { getGame } from "../api/igdb-api";

export default {
  title: "Home Page/GameCard",
  component: GameCard,
};

export const Basic = () => {
  return (
    <GameCard
      game={getGame(1029)}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleGame, poster_path: undefined };
  return (
    <GameCard
      movie={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";