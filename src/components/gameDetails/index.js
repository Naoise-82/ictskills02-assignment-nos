import React from "react";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import StarRate from "@material-ui/icons/StarRate";
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
  const game = props.game

  return (
    <>
      <Typography variant="h5" component="h3">
        Summary
      </Typography>

      <Typography variant="h6" component="p">
        {game.summary}
      </Typography>

      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Platforms" className={classes.chip} color="primary" />
        </li>
        {game.platforms.map((g) => (
          <li key={g.id}>
            <Chip label={g.abbreviation} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <li>
          <Chip label="Genres" className={classes.chip} color="primary" />
        </li>
        {game.genres.map((g) => (
          <li key={g.id}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" className={classes.root}>
        <Chip
          icon={<StarRate />}
          label={`${Math.round(game.rating*100)/100} (${game.rating_count}) votes`} className={classes.chip}
        />
        <Chip label={`Originally Released: ${game.release_dates[0].y} (${game.platforms[0].abbreviation})` }  className={classes.chip}/>
        </Paper>

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