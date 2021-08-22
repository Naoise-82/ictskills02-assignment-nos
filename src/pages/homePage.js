import React from "react";
import PageTemplate from "../components/gameListPageTemplate";
import { getGames } from "../api/igdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query';
import AddToCollectionIcon from "../components/cardIcons/addToCollection";

//Renders the HomePage/Browse All Games Page
const HomePage = (props) => {
  const { data, error, isLoading, isError} = useQuery('browse', getGames);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  // Debugging
  //console.log("Homepage data: ");
  //console.log(data);
  const games = data;

  const collection = games.filter(g => g.collection);
  localStorage.setItem('collection', JSON.stringify(collection));
  //const addToCollection = (gameId) => true;

  return (
    <PageTemplate
      title='Browse All Games'
      games={games}
      action={(game) => {
        return <AddToCollectionIcon game={game} />
      }}
    />
  );
};
export default HomePage;