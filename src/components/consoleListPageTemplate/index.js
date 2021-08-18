import React, { useState } from "react";
import Header from "../gameListHeader";
import FilterCard from "../filterConsolesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ConsoleList from "../consoleList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

function ConsoleListPageTemplate({ gameConsoles, title, action }) {
  const classes = useStyles();
  const [nameFilter, setNameFilter] = useState("");
  const [platformFamilyFilter, setPlatformFamilyFilter] = useState("0");
  const [generationFilter, setGenerationFilter] = useState("0");
  const platformFamilyId = Number(platformFamilyFilter);
  const generationId = Number(generationFilter);

  console.log("GameList Template Page:");
  console.log(gameConsoles);

  let displayedGameConsoles = gameConsoles
    .filter((c) => {
      return c.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((c) => {
      return platformFamilyId > 0 ? c.platformFamilies.find( ({ id }) => id === platformFamilyId) : true;
    })
    .filter((c) => {
      return generationId > 0 ? c.generation === generationId : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setPlatformFamilyFilter(value)
    else setGenerationFilter(value);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid key="find" item xs={12} sm={12} md={12} lg={12} xl={12}>
        <FilterCard
          onUserInput={handleChange}
          nameFilter={nameFilter}
          platformFamilyFilter={platformFamilyFilter}

        />
      </Grid>
      <Grid item container spacing={3}>
        <ConsoleList action={action} gameConsoles={displayedGameConsoles}></ConsoleList>
      </Grid>
    </Grid>
  );
};
export default ConsoleListPageTemplate;