import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FilterListIcon from "@material-ui/icons/FilterList";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getGenres, getPlatforms } from '../../api/igdb-api';


const useStyles = makeStyles((theme) => ({
  root: {
    Width: 1,
    marginBottom: theme.spacing(1.5),
    backgroundColor: "rgb(220,220,255)"
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
  white: {
    backgroundColor: "white"
  }
}));

export default function FilterGamesCard(props) {
  const classes = useStyles();
  const { data: genres, error: genresError, isLoading: genresIsLoading, isError: genresIsError } = useQuery("genres", getGenres);
  const { data: platforms, error: platformError, isLoading: platformIsLoading, isError: platformIsError } = useQuery("platforms", getPlatforms);
  console.log(genres);
  console.log(platforms);


  if (genresIsLoading || platformIsLoading) {
    return <Spinner />;
  }

  if (genresIsError || platformIsError) {
    return <h1>{platformError.message || genresError.message}</h1>;

  }

  if(genres[0].name !== "All") genres.unshift({ id: "0", name: "All" });
  if(platforms[0].name !== "All") platforms.unshift({ id: "0", name: "All" });

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };


  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  };

  const handleGenreChange = e => {
    handleChange(e, "genre", e.target.value)
  };

  const handlePlatformChange = e => {
    handleChange(e, "platform", e.target.value)
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <FilterListIcon fontSize="large" />
          Filter the Games
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Filter by Name"
          type="search"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Filter by Genre</InputLabel>
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
        <FormControl className={classes.formControl}>
          <InputLabel id="platform-label">Filter by Platform</InputLabel>
          <Select
            labelId="platform-label"
            id="platform-select"
            value={props.platformFilter}
            onChange={handlePlatformChange}
          >
            {platforms.map((platform) => {
              return (
                <MenuItem key={platform.id} value={platform.id}>
                  {platform.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}