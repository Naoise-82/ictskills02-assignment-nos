import React, { useState, useEffect} from "react";
import axios from "axios";
import Chip from "@material-ui/core/Chip";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  summary: {
    	marginLeft: 10,
      paddingLeft: 15
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const GameDetails = (props) => {
  const classes = useStyles();
  const { id } = props.match.params;
  const [game, setGame ] = useState(null)
  // const game = props.game;

  useEffect(() => {
    axios({
      url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
      },
      data: `fields id,cover.image_id,first_release_date,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;where cover!=null & platforms != {6,82} & platforms.platform_logo != null; where id=${id}`
    })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .then((game) => {
        setGame(game);
      })
      .catch(err => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <Typography className={classes.summary} variant="h5" component="h3">
        Summary
      </Typography>
      <Typography className={classes.summary} variant="h6" component="p">
        {game.summary}
      </Typography>
      <div component="ul" className={classes.root}>
        <li>
          <Chip variant="outlined" label="Platforms" className={classes.chip} color="primary" />
        </li>
        {game.platforms.map((g) => (
          <li key={g.id}>
            <Chip label={g.abbreviation} className={classes.chip} />
          </li>
        ))}
      </div>
      <div component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {game.genres.map((g) => (
          <li key={g.id}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </div>
      <div component="ul" className={classes.root}>
        <Chip
          label={`Rating: ${Math.round(game.rating*100)/100} (${game.rating_count} votes)`} className={classes.chip}
        />
        <Chip label={`Originally Released: ${game.release_dates[0].y} (${game.platforms[0].abbreviation})` }  className={classes.chip}/>
        </div>

      <Fab
        color="secondary"
        variant="extended"
        className={classes.fab}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      </>
  );
};
export default  GameDetails ;