import React from "react";
import ConsoleHeader from "../components/consoleHeader";
import ConsoleDetails from "../components/consoleDetails";
import { getConsole } from '../api/igdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

//enders the page for the details of a single console
const ConsoleDetailsPage = (props) => {
  const { id } = props.match.params;

  const { data: gameConsole, error, isLoading, isError } = useQuery(
    ["gameConsole", { id: id }],
    getConsole
  );
  console.log(gameConsole);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {gameConsole ? (
        <>
          <ConsoleHeader gameConsole={gameConsole} />
          <ConsoleDetails gameConsole={gameConsole} />
        </>
      ) : (
        <h2>Waiting for API data</h2>
      )}
    </>
  );
};

export default withRouter(ConsoleDetailsPage);