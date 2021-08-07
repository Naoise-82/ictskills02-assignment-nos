import React from "react";
import GameHeader from "../components/gameHeader/";
import GameDetails from "../components/gameDetails";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// import useGame from "../hooks/useGame";
import { Typography } from "@material-ui/core";
import { getGame } from '../api/igdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: 'hidden',
    justifyContent: "space-around",
    padding: 10
  },
  imageList: {
    paddingLeft: 15,
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  heading: {
    justifyContent: "center",
  }
}));

const GamePage = (props) => {
  const classes = useStyles();
  const { id } = props.match.params;
  // const [game] = useGame(id);

  const { data: game, error, isLoading, isError } = useQuery(
    ["game", { id: id }],
    getGame
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }


  //console.log(game[0]);

  return (
    <>
      {game ? (
        <>
          <GameHeader game={game} />

          <Grid className={classes.root} container spacing={5}>
            <Grid item xs={2}>
              <img src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game[0].cover.image_id}.jpg`} alt="" />
            </Grid>
            <Grid item xs={10}>
              <div className={classes.root}>
                <Typography className={classes.heading} variant="h4">
                  <b>Screenshots</b>
                </Typography>
                <ImageList className={classes.imageList} cols={4}>
                  {game[0].screenshots.map((i) => (
                    <ImageListItem key={i.id}>
                      <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med/${i.image_id}.jpg`}
                        alt="" />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
              <GameDetails className={classes.root} game={game} />
            </Grid>
          </Grid>
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default GamePage;