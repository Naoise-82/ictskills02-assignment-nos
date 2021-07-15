import React from "react";
import GameHeader from "../components/gameHeader/";
import GameDetails from "../components/gameDetails";
//import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import GridList from "@material-ui/core/GridList";
//import GridListTile from "@material-ui/core/GridListTile";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: 'hidden',
    justifyContent: "space-around",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
}));

const GamePage = (props) => {
  const classes = useStyles();
  const game = props.game;
  const images = props.images;

  return (
    <>
      {game ? (
        <>
          <GameHeader game={game} />
          <div className={classes.root}>
            <ImageList className={classes.imageList} cols={4}>
              {images.map((i) => (
                <ImageListItem key={i.id}>
                  <img src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med${i}`}
                    alt={i.poster_path} />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
          <GameDetails game={game} />
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default GamePage;