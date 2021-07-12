import React from "react";
import Header from "../components/gameListHeader";
import FilterCard from "../components/filterGamesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GameList from "../components/gameList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const GameListPage = (props) => {
  const classes = useStyles();
  const games = props.games;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Browse All Games"} />
      </Grid>
      <Grid key="find" item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FilterCard />
      </Grid>
      <Grid item container spacing={3}>
        <GameList games={games}></GameList>
      </Grid>
    </Grid>
  );
};
export default GameListPage;