import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { GamesContext } from "../../contexts/gamesContext";
import { Tooltip } from "@material-ui/core";

const RemoveFromCollectionIcon = ({ game }) => {
  const context = useContext(GamesContext);

  const handleRemoveFromCollection = (e) => {
    e.preventDefault();
    context.removeFromCollection(game);
  };
  return (
    <Tooltip title="Remove From Collection">
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromCollection}
    >
      <RemoveCircleIcon color="primary" fontSize="large" />
    </IconButton>
    </Tooltip>
  );
};

export default RemoveFromCollectionIcon;