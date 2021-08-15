import React from "react";
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
import { useQuery } from "react-query";
import Spinner from '../spinner';
import { getPlatformFamilies } from '../../api/igdb-api';


const useStyles = makeStyles((theme) => ({
  root: {
    Width: 1,
    marginBottom: theme.spacing(1.5),
    backgroundColor: "#3f51b5",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterConsolesCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("platform families", getPlatformFamilies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;

  }

  const platformFamilies = data;
  const generations = [
    {id: 0, name: "All"},
    {id: 1, name: "First (1972-1976)"},
    {id: 2, name: "Second (1976-1983)"},
    {id: 3, name: "Third (1983-1987)"},
    {id: 4, name: "Fourth (1987-1993)"},
    {id: 5, name: "Fifth (1993-1998)"},
    {id: 6, name: "Sixth (1998-2005"},
    {id: 7, name: "Seventh (2005-2012"},
    {id: 8, name: "Eighth (2012-2020"},
    {id: 9, name: "Ninth (2020-Present)"}
  ]
  platformFamilies.unshift({ id: "0", name: "All" })

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)
  };

  const handleTextChange = e => {
    handleChange(e, "name", e.target.value)
  };

  const handlePlatformFamilyChange = e => {
    handleChange(e, "plaform_family", e.target.value)
  };

  const handleGenerationChange = e => {
    handleChange(e, "generation", e.target.value)
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter Consoles
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Filter By Name"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="platform-family-label">Platform Family</InputLabel>
          <Select
            labelId="platfrom-family-label"
            id="platform-family-select"
            value={props.platformFamilyFilter}
            onChange={handlePlatformFamilyChange}
          >
            {platformFamilies.map((platformFamily) => {
              return (
                <MenuItem key={platformFamily.id} value={platformFamily.id}>
                  {platformFamily.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="generation-label">Generation</InputLabel>
          <Select
            labelId="generation-label"
            id="generation-select"
            value={props.generationFilter}
            onChange={handleGenerationChange}
          >
            {generations.map((g) => {
              return (
                <MenuItem key={g.id} value={g.id}>
                  {g.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
}