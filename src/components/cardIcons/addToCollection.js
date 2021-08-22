import React, { useContext } from "react";
import { GamesContext } from "../../contexts/gamesContext";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';

// Adds games to the the collection array
const AddToCollectionIcon = ({ game }) => {
  const context = useContext(GamesContext);

  const handleAddToCollection = (e) => {
    e.preventDefault();
    context.addToCollection(game);
  };
  return (
    <IconButton aria-label="add to collection" onClick={handleAddToCollection}>
      <LibraryAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToCollectionIcon;