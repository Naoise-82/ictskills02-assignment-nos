import React, { useContext } from "react";
import { GamesContext } from '../../contexts/gamesContext';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Grid from "@material-ui/core/Grid";
import platform_placeholder from "../../images/platform-placeholder.png";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    listStyle: "none",
    display: "flex",
    marginTop: 5,
    padding: theme.spacing(0.25)
  },
  card: {
    maxHeight: 670,
    backgroundColor: "rgb(220,220,255)"
  },
  media: {
    height: 400,
    backgroundSize: 'contain'
  },
  logo: {
    height: 70,
    backgroundSize: 'contain',
    margin: 5
  },
  avatar: {
    backgroundColor: "rgb(0, 255, 0)",
  },
  chip: {
    marginLeft: 5,
    marginRight: 5
  },
}));

export default function GameCard({ game, action }) {
  const classes = useStyles();
  const { collection } = useContext(GamesContext);

  if (collection.find((id) => id === game.id)) {
    game.collection = true;
  } else {
    game.collection = false
  }

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={9}>
          <CardHeader
            className={classes.header}
            avatar={
              game.collection ? (
                <Avatar className={classes.avatar}>
                  <LibraryAddCheckIcon />
                </Avatar>
              ) : null
            }
            title={
              <Typography variant="h6" component="p">
                {game.name}
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={3}>
          <CardMedia
            className={classes.logo}
            image={game.platforms ? `https://images.igdb.com/igdb/image/upload/t_thumb/${game.platforms[0].platform_logo.image_id}.jpg`
              : platform_placeholder}
          />
        </Grid>
      </Grid>
      <CardMedia
        className={classes.media}
        image={game.cover ? `//images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg` : platform_placeholder}
      />
      <CardContent>
        <Chip className={classes.chip}
          color="primary" label={`Released: ${game.release_dates ? game.release_dates[0].y : "N/A"}`} />
        <Link to={`/consoles/${game.platforms[0].id}`} >
          <Chip className={classes.chip}
            color="primary" label={`Platform: ${game.platforms ? game.platforms[0].abbreviation : "N/A"}`} />
        </Link>
        <div component="ul" className={classes.root}>
          <li>
            <Chip label="Game Modes" className={classes.chip} color="primary" />
          </li>
          {game.game_modes.map((g) => (
            <li key={g.id} >
              <Chip variant="outlined" label={g.name} className={classes.chip} />
            </li>
          ))}
        </div>
      </CardContent>
      <CardActions>
        {action(game)}
        <Link to={`/games/${game.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Details...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}