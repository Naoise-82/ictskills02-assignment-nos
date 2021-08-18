import React from "react";
//import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

const ConsoleDetails = (props) => {
  const classes = useStyles();
  const gameConsole = props.gameConsole;
  console.log(gameConsole);

  return (
    <>
      <Card className={classes.card}>
        <Typography className={classes.summary} variant="h4">
          <b>Summary</b>
        </Typography>
        <Typography className={classes.summary} variant="h6" component="p">
          {gameConsole[0].summary}
        </Typography>
      </Card>

      <div component="ul" className={classes.root}>
        stuff here
        </div>
    </>
  );
};
export default ConsoleDetails;