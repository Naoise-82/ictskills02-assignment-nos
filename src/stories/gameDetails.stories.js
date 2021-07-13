import React from "react";
import GameDetails from "../components/gameDetails";
import SampleGame from "./sampleData";

export default {
  title: "Game Details Page/GameDetails",
  component: GameDetails,
};

export const Basic = () => <GameDetails game={SampleGame} />;
Basic.storyName = "Default";