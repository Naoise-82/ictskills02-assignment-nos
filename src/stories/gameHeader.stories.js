import React from "react";
import GameHeader from "../components/gameHeader";
import SampleGame from "./sampleData";

export default {
  title: "Game Details Page/GameHeader",
  component: GameHeader,
};

export const Basic = () => <GameHeader game={SampleGame} />;
Basic.storyName = "Default";