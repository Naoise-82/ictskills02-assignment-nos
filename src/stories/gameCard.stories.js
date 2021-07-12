import React from "react";
import GameCard from "../components/gameCard";
import SampleGame from "./sampleData";

export default {
  title: "Home Page/GameCard",
  component: GameCard,
};

export const Basic = () => {
  return (
    <GameCard
      game={SampleGame}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleGame, poster_path: undefined };
  return (
    <GameCard
      game={sampleNoPoster}
    />
  );
};
Exceptional.storyName = "exception";