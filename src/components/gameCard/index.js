import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  logo: { height: 60, width: 60, margin: 15 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function GameCard(props) {
  const classes = useStyles();
  const game = props.game;
  console.log(game.platforms);
  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={9}>
          <CardHeader className={classes.header} title={
            <Typography variant="h6" component="p">
              {game.name}
            </Typography>
          }
          />
        </Grid>
        {/*<Grid item xs={3}>
          <CardMedia
            className={classes.logo}
            image={`//images.igdb.com/igdb/image/upload/t_thumb/${game.platforms.platform_logo.image_id}.jpg`}
          />
        </Grid>*/}
      </Grid>
      {/*<CardMedia
        className={classes.media}
        image={`//images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`}
      />*/}
      <CardContent>
        <Grid container>
          <Grid xs={6}>
            {/*<Typography>
              Released: {game.release_dates[0].y}
            </Typography>*/}
          </Grid>
          <Grid xs={6}>
            {/*<Typography>
              Platform: {game.platforms[0].abbreviation}
            </Typography>*/}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Tooltip title="Add to my collection" >
          <IconButton aria-label="add to my collection" onClick={null}>
            <LibraryAddIcon color="primary" fontSize="large" />
          </IconButton>
        </Tooltip>
        <Button variant="outlined" size="medium" color="primary">
          More Details...
        </Button>
      </CardActions>
    </Card>
  );
}