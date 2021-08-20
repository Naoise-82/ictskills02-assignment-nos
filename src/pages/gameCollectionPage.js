import React, { useContext } from "react";
import PageTemplate from "../components/gameListPageTemplate";
import { GamesContext } from "../contexts/gamesContext";
import { useQueries } from 'react-query';
import { getGame } from '../api/igdb-api';
import Spinner from '../components/spinner';
import RemoveFromCollection from "../components/cardIcons/removeFromCollection";

const GameCollectionPage = () => {
  const { collection: gameIds } = useContext(GamesContext);

  const gameCollectionQueries = useQueries(
    gameIds.map((gameId) => {
      return {
        queryKey: ["game", { id: gameId }],
        queryFn: getGame,
      };
    })
  );

  const isLoading = gameCollectionQueries.find((g) => g.isLoading === true);

  if (isLoading) {
    return <Spinner />
  }

  console.log("Collection Queries: ");
  console.log(gameCollectionQueries);
  const games = gameCollectionQueries.map((q) => q.data[0]);

  console.log("Game Collection Page Games:");
  console.log(games);

  return (
    <PageTemplate
      title="My Game Collection"
      games={games}
      action={(game) => {
        return (
          <>
            <RemoveFromCollection game={game} />
          </>
        );
      }}
    />
  );
};

export default GameCollectionPage;