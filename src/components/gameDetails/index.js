import React from "react";
import Chip from "@material-ui/core/Chip";
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
    display: "flex",
    flexWrap: "wrap",
    marginLeft: 10,
    paddingLeft: 15,
    marginBottom: 10,
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
  const game = props.game;

  return (
    <>
      <Typography className={classes.summary} variant="h4">
        <b>Summary</b>
      </Typography>
      <Typography className={classes.summary} variant="h6" component="p">
        {game[0].summary}
      </Typography>

      {/* STICK THE GAME VIDEO IN HERE */}

      <div component="ul" className={classes.root}>
        <li>
          <Chip variant="outlined" label="Platforms" className={classes.chip} color="primary" />
        </li>
        {game[0].platforms.map((g) => (
          <li key={g.id}>
            <Chip label={g.abbreviation} className={classes.chip} />
          </li>
        ))}
      </div>
      <div component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {game[0].genres.map((g) => (
          <li key={g.id}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </div>
      <div component="ul" className={classes.root}>
        <Chip
          label={`Rating: ${Math.round(game[0].rating * 100) / 100} (${game.rating_count} votes)`} className={classes.chip}
        />
        <Chip label={`Originally Released: ${game[0].release_dates[0].y} (${game[0].platforms[0].abbreviation})`} className={classes.chip} />
      </div>
    </>
  );
};
export default GameDetails;