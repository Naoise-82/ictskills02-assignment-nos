import React, { useState } from "react";

export const GamesContext = React.createContext(null);

const GamesContextProvider = (props) => {
  const [collection, setCollection] = useState( [] )

  const addToCollection = (game) => {
    setCollection([...collection,game.id])
  };
  //console.log("Context Collection:")
  //console.log(collection);
  
  const removeFromCollection = (game) => {
    setCollection( collection.filter(
      (gId) => gId !== game.id
    ))
  };

  return (
    <GamesContext.Provider
      value={{
        collection,
        addToCollection,
        removeFromCollection
      }}
    >
      {props.children}
    </GamesContext.Provider>
  );
};

export default GamesContextProvider;