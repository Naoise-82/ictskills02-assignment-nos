import React from "react";
import GameHeader from "../components/gameHeader/";
import GameDetails from "../components/gameDetails";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//import GridList from "@material-ui/core/GridList";
//import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const GamePage = (props) => {
  const classes = useStyles();
  const game = props.game;
  //const images = props.images;

  return (
    <>
      {game ? (
        <>
          <GameHeader game={game} />
          <Grid container spacing={5} style={{ padding: "15px" }}>
            {/*<Grid item xs={3}>
              <div className={classes.root}>
                <GridList
                  cellHeight={500}
                  className={classes.gridList}
                  cols={1}
                >
                  {images.map((image) => (
                    <GridListTile
                      key={image.file_path}
                      className={classes.gridListTile}
                      cols={1}
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${image}`}
                        alt={image.poster_path}
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>
                  </Grid>*/}
            <Grid item xs={12}>
              <GameDetails game={game} />
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