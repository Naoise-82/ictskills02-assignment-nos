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
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  const genreId = Number(genreFilter);

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

  const addToCollection = (gameId) => {
    const updatedGames = games.map((m) =>
      m.id === gameId ? { ...m, collection: true } : m
    );
    setGames(updatedGames);
  };

  //API call
  useEffect(() => {
    axios({
      url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
      },
      data: "fields id,cover.image_id,first_release_date,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;where cover!=null & platforms != {6,82} & platforms.platform_logo != null;limit 30;"
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
        <FilterCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}

        />
      </Grid>
      <Grid item container spacing={3}>
        <GameList games={displayedGames} selectCollection={addToCollection}></GameList>
      </Grid>
    </Grid>
  );
};
export default GameListPage;