import React from "react";
import GameContextProvider from './contexts/gamesContext';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/homePage";
import GameDetailsPage from "./pages/gameDetailsPage";
import GameCollectionPage from "./pages/gameCollectionPage";
import ConsoleListPage from "./pages/consoleListPage";
import ConsoleDetailsPage from "./pages/consoleDetailsPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <GameContextProvider>
          <Switch>
            <Route exact path="/games/collection" component={GameCollectionPage} />
            <Route path="/games/:id" component={GameDetailsPage} />
            <Route path="/consoles" component={ConsoleListPage} />
            <Route pathe="/consoles/:id" component={ConsoleDetailsPage} />
            <Route path="/" component={HomePage} />
            <Redirect from="*" to="/" />
          </Switch>
        </GameContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));