import React from "react";
import PageTemplate from "../components/gameListPageTemplate";

const GameCollectionPage = (props) => {
    const toDo = () => true;
    const games = JSON.parse(localStorage.getItem("collection"));

    return (
      <PageTemplate
      title="My Game Collection"
      games={games}
      selectCollection={toDo}
      />
    );
};

export default GameCollectionPage