import React from "react";
import PageTemplate from "../components/gameListPageTemplate";
import { getGames } from "../api/igdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query';
import AddToCollectionIcon from "../components/cardIcons/addToCollection";

const HomePage = (props) => {
  const { data, error, isLoading, isError} = useQuery('browse', getGames);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  console.log("Homepage data: " + data);
  const games = data;

  const collection = games.filter(g => g.collection);
  localStorage.setItem('collection', JSON.stringify(collection));
  //const addToCollection = (gameId) => true;

  return (
    <PageTemplate
      title='Browse All Games'
      gameConsoles={games}
      action={(game) => {
        return <AddToCollectionIcon game={game} />
      }}
    />
  );
};
export default HomePage;