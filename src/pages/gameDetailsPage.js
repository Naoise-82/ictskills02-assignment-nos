import React, { useEffect, useState } from "react";
import GameHeader from "../components/gameHeader/";
import GameDetails from "../components/gameDetails";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import GridList from "@material-ui/core/GridList";
//import GridListTile from "@material-ui/core/GridListTile";
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { getGame } from "../api/igdb-api";

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
}));

const GamePage = (props) => {
  const classes = useStyles();
  const { id } = props.match.params;
  const [game, setGame] = useState(null);

  useEffect(() => {
    getGame(id).then(game => {
      setGame(game);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id]);

  console.log(game);
  //console.log(game[0].screenshots[0].image_id)

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