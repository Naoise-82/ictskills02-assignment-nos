import React, { useState } from "react";
import Header from "../gameListHeader";
import FilterCard from "../filterGamesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import GameList from "../gameList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function GameListPageTemplate({ games, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  console.log("GameList Template Page:");
  console.log(games);

  let displayedGames = games
    .filter((g) => {
      return g.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((g) => {
      return genreId > 0 ? g.genres.find( ({ id }) => id === genreId) : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid key="find" item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FilterCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}

        />
      </Grid>
      <Grid item container spacing={3}>
        <GameList action={action} games={displayedGames}></GameList>
      </Grid>
    </Grid>
  );
};
export default GameListPageTemplate;