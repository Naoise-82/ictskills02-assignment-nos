import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import platform_placeholder from "../../images/platform-placeholder.png";

const useStyles = makeStyles({
  card: {
    maxHeight: 3000,
    width: 300
  },
  media: {
    backgroundSize: 'contain'
  },
  logo: {
    height: 80,
    backgroundSize: 'contain',
    margin: 0
  },
  avatar: {
    backgroundColor: "rgb(0, 255, 0)",
    colour: "green"
  },
});

export default function ConsoleCard({ gameConsole }) {
  const classes = useStyles();
  console.log(gameConsole.versions[1]);

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={7}>
          <CardHeader
            title={
              <Typography variant="h5">
                {gameConsole.name}<br></br>
                ({gameConsole.abbreviation})
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
          <b>Generation: </b> {gameConsole.generation} <br/>
          <b>Platform Family:</b> {gameConsole.platform_family.name} <br></br>
          <b>Initially Released: </b> {console.versions ? 
          console.versions[0].platform_version_release_dates[0].y : "N/A"}
          
        </Typography>}
      </CardContent>
      <CardActions>
        <Link to={`/consoles/${gameConsole.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Details...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}