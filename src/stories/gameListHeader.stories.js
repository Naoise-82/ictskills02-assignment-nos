import React from "react";
import GameListHeader from "../components/gameListHeader";

export default {
  title: "Home Page/Header",
  component: GameListHeader,
};

export const Basic = () => <GameListHeader title={'Browse All Games'} />;

Basic.storyName = "Default";