import React, { useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    Width: 1,
    marginBottom: theme.spacing(1.5),
    backgroundColor: "rgb(140, 180, 255)",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterGamesCard(props) {
  const classes = useStyles();
  const [genres, setGenres ] = useState([{ id: '0', name: 'All'}]);

  /*const genres = [
    {id: 31, name: "Adventure"},
    {id: 8, name: "Platform"},
    {id: 12, name: "RPG"}
  ]*/

  useEffect(() => {
    axios({
      url: "http://localhost:4000/fetch/https://api.igdb.com/v4/genres",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
      },
      data: "fields *;limit 25;"
    })
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .then(apiGenres => {
        setGenres(genres[0], ...apiGenres);
      })
      .catch(err => {
        console.error(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  };
  const handleGenreChange = e => {
    handleChange(e, "genres", e.target.value)
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Games.
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search Field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}