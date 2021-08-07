import React from "react";
import PageTemplate from "../components/gameListPageTemplate";
import { getGames } from "../api/igdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query';

const HomePage = (props) => {
  const { data, error, isLoading, isError} = useQuery('browse', getGames);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  console.log("Homepage data: " + data)
  const games = data;

  const collection = games.filter(g => g.collection);
  localStorage.setItem('collection', JSON.stringify(collection));
  const addToCollection = (gameId) => true;

  /*const addToCollection = (gameId) => {
    const updatedGames = games.map((g) =>
      g.id === gameId ? { ...g, collection: true } : g
    );
    setGames(updatedGames);
  };*/

  return (
    <PageTemplate
      title='Browse All Games'
      games={games}
      selectCollection={addToCollection}
    />
  );
};
export default HomePage;