import { useEffect, useState } from "react";
import { getGame } from '../api/igdb-api'

const useGame = id => {
  const [game, setGame] = useState(null);
  useEffect(() => {
    getGame(id).then(game => {
      setGame(game);
    });
  }, [id]);
  return [game, setGame];
};

export default useGame