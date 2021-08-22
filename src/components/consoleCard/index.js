import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxHeight: 400,
    width: 300,
    backgroundColor: "rgb(220,220,255)"
  },
  chip: {
    margin: 3,
  },
  media: {
    backgroundSize: 'contain'
  },
  logo: {
    height: 80,
    backgroundSize: 'contain',
    marginTop: 5
  },
  button: {
    margin: 5,
  }
});

// A card displaying the basic details fo a single game
export default function ConsoleCard({ gameConsole }) {
  const classes = useStyles();
  const consoleGenerations = [
    {
      "url": ""
    },
    {
      "url": "First_generation_of_video_game_consoles"
    },
    {
      "url": "Second_generation_of_video_game_consoles"
    },
    {
      "url": "Third_generation_of_video_game_consoles"
    },
    {
      "url": "Fourth_generation_of_video_game_consoles"
    },
    {
      "url": "Fifth_generation_of_video_game_consoles"
    },
    {
      "url": "Sixth_generation_of_video_game_consoles"
    },
    {
      "url": "Seventh_generation_of_video_game_consoles"
    },
    {
      "url": "Eighth_generation_of_video_game_consoles"
    },
    {
      "url": "Home_video_game_console_generations#Ninth_generation_(2020-current)"
    },
  ]

  //Build a url for th external links to Wikipedia
  const urlEnder = gameConsole.generation ? consoleGenerations[gameConsole.generation].url : "Home_video_game_console_generations";
  const url = "https://en.wikipedia.org/wiki/" + urlEnder;

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={7}>
          <CardHeader
            title={
              <Typography variant="h5">
                {gameConsole.name}<br></br>
              </Typography>
            }
          />
        </Grid>
        <Grid item xs={5}>
          <CardMedia
            className={classes.logo}
            image={`https://images.igdb.com/igdb/image/upload/t_thumb/${gameConsole.platform_logo.image_id}.jpg`
            }
          />
        </Grid>
      </Grid>
      <CardContent>
        {<Typography>
          <Chip color="primary" className={classes.chip} label={`Abbreviation: ${gameConsole.abbreviation}`} />
          <a href={url} >
          <Chip color="primary" className={classes.chip} label={`Generation: ${gameConsole.generation}`} />
          </a>
          <Chip color="primary" className={classes.chip} label={`Platform Family:
            ${gameConsole.platform_family ? gameConsole.platform_family.name : "N/A"}`} /> 
          <Chip color="primary" className={classes.chip} label={`Initially Released:
            ${gameConsole.versions[0].platform_version_release_dates ? 
          gameConsole.versions[0].platform_version_release_dates[0].y : "N/A"}`} />
        </Typography>}
      </CardContent>
        <Link to={`/consoles/${gameConsole.id}`}>
          <Button className={classes.button} variant="outlined" size="medium" color="primary">
            More Details...
          </Button>
        </Link>
    </Card>
  );
}