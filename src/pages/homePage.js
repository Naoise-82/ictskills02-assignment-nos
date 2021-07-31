import React, { useState, useEffect } from "react";
import PageTemplate from "../components/gameListPageTemplate";
import { getGames } from "../api/igdb-api";

const HomePage = (props) => {
  const [games, setGames] = useState([]);
  const collection = games.filter(g => g.collection)
  localStorage.setItem('collection', JSON.stringify(collection))

  const addToCollection = (gameId) => {
    const updatedGames = games.map((g) =>
      g.id === gameId ? { ...g, collection: true } : g
    );
    setGames(updatedGames);
  };

  //API call
  useEffect(() => {
    getGames().then(games => {
      setGames(games);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate
      title='Browse All Games'
      games={games}
      selectCollection={addToCollection}
    />
  );
};
export default HomePage;