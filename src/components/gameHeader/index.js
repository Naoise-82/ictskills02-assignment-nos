import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
    margin: 0.5,
  },
}));

const GameHeader = ({ game, history}) => {
  const classes = useStyles();

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => history.goBack()}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
      <Typography variant="h4" component="h3">
        {game[0].name}
        {game[0].franchises.map((f) => (
          <Typography variant="h5" key={f.id}><b>Franchise:</b> {f.name}</Typography>
        ))}
      </Typography>
      <IconButton aria-label="go forward" onClick={() => history.goForward()}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default withRouter(GameHeader);