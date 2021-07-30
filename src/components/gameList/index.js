import React from "react";
import Game from "../gameCard/";
import Grid from "@material-ui/core/Grid";

const GameList = (props) => {
  let gameCards = props.games.map((g) => (
    <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Game key={g.id} game={g} selectCollection={props.selectCollection}/>
    </Grid>
  ));
  return gameCards;
};

export default GameList;