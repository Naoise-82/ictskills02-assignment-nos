import React, { useState, useEffect } from "react";
import Header from "../components/gameListHeader";
import FilterCard from "../components/filterGamesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GameList from "../components/gameList";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const GameListPage = (props) => {
  const classes = useStyles();
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios({
      url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': 'a8e25v1mi6k10bn250wn6cpghlac6j',
        'Authorization': 'Bearer ut7kh439z9pb38oz5u5y8tymfddo7a',
      },
      data: "fields cover.image_id,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;limit 10;"
    })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .then((games) => {
        setGames(games);
      })
      .catch(err => {
        console.error(err);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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