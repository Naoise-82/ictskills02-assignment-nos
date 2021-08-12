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
import Typography from "@material-ui/core/Typography";
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Grid from "@material-ui/core/Grid";
import platform_placeholder from "../../images/platform-placeholder.png";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  card: {
    maxHeight: 650
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
    colour: "green"
  },
});

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
        <Grid container>
          <Grid xs={6}>
            {<Typography>
              Released: {game.release_dates ? game.release_dates[0].y : "N/A"}
            </Typography>}
          </Grid>
          <Grid xs={6}>
            <Typography>
              Platform: {game.platforms ? game.platforms[0].abbreviation : "N/A"}
            </Typography>
          </Grid>
        </Grid>
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