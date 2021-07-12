import React from "react";
import FilterGamesCard from "../components/filterGamesCard";

export default {
  title: "Home Page/FilterGamesCard",
  component: FilterGamesCard,
};

export const Basic = () => {
  return <FilterGamesCard />;
};
Basic.storyName = "Default";