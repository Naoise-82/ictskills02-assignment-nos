import React from "react";
import Game from "../gameCard/";
import Grid from "@material-ui/core/Grid";

// Renders a list of game cards
const GameList = ({ games, action }) => {
  let gameCards = games.map((g) => (
    <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Game key={g.id} game={g} action={action}/>
    </Grid>
  ));
  return gameCards;
};

export default GameList;