import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  card: {
    margin: theme.spacing(0.5)
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
  logo: {
    height: 200,
    backgroundSize: 'contain'
  }
}));

const ConsoleDetails = (props) => {
  const classes = useStyles();
  const gameConsole = props.gameConsole;
  //console.log(gameConsole[0]);

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

  const urlEnder = gameConsole[0].generation ? consoleGenerations[gameConsole[0].generation].url : "Home_video_game_console_generations";
  const url = "https://en.wikipedia.org/wiki/" + urlEnder;

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.logo}
          image={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${gameConsole[0].platform_logo.image_id}.jpg`}
        />
        <Typography className={classes.summary} variant="h4">
          <b>Summary</b>
        </Typography>
        <Typography className={classes.summary} variant="h6" component="p">
          {gameConsole[0].summary ? gameConsole[0].summary : "No summary available for this console."}
        </Typography>
      </Card>

      <div component="ul" className={classes.root}>
        <a href={url} >
        <Chip color="primary" className={classes.chip} label={`Generation: ${gameConsole[0].generation}`} />
        </a>
        <Chip color="primary" className={classes.chip} label={`Initially Released: ${gameConsole[0].versions[0].platform_version_release_dates ?
          gameConsole[0].versions[0].platform_version_release_dates[0].y : "N/A" }`} />
      </div>
      <div component="ul" className={classes.root}>
        <li>
          <Chip label="Versions" className={classes.chip} color="primary" />
        </li>
        {gameConsole[0].versions.map((g) => (
          <li key={g.id}>
            <Chip label={g.name} className={classes.chip} />
          </li>
        ))}
      </div>
    </>
  );
};
export default ConsoleDetails;