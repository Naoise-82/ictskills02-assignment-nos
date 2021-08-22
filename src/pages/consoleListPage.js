import React from "react";
import PageTemplate from "../components/consoleListPageTemplate";
import { getConsoles } from "../api/igdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query';

//Renders the page for a list of console cards
const ConsoleListPage = (props) => {
  const { data, error, isLoading, isError} = useQuery('consoles page', getConsoles);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }
  console.log("ConsoleList Page data: ");
  console.log(data);
  const gameConsoles = data;

  return (
    <PageTemplate
      title='Explore Game Consoles'
      gameConsoles={gameConsoles}
    />
  );
};
export default ConsoleListPage;