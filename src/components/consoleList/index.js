import React from "react";
import GameConsole from "../consoleCard/";
import Grid from "@material-ui/core/Grid";

const ConsoleList = ({ gameConsoles, action }) => {
  let consoleCards = gameConsoles.map((g) => (
    <Grid key={g.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <GameConsole key={g.id} gameConsole={g} action={action}/>
    </Grid>
  ));
  return consoleCards;
};

export default ConsoleList;