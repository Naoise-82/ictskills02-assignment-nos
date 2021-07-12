import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";

const sample = {
  "id": 1029,
  "cover": {
    "id": 132062,
    "image_id": "co2twe"
  },
  "name": "The Legend of Zelda: Ocarina of Time",
  "platforms": [
    {
      "id": 4,
      "abbreviation": "N64",
      "platform_logo": {
        "id": 259,
        "image_id": "pl77"
      }
    },
    {
      "id": 5,
      "abbreviation": "Wii",
      "platform_logo": {
        "id": 326,
        "image_id": "pl92"
      }
    },
    {
      "id": 21,
      "abbreviation": "NGC",
      "platform_logo": {
        "id": 262,
        "image_id": "pl7a"
      }
    },
    {
      "id": 41,
      "abbreviation": "WiiU",
      "platform_logo": {
        "id": 239,
        "image_id": "pl6n"
      }
    },
    {
      "id": 47,
      "abbreviation": "VC",
      "platform_logo": {
        "id": 384,
        "image_id": "plao"
      }
    }
  ],
  "rating": 92.20174964015611,
  "release_dates": [
    {
      "id": 2513,
      "y": 1998
    },
    {
      "id": 2514,
      "y": 2002
    },
    {
      "id": 2515,
      "y": 2007
    },
    {
      "id": 144249,
      "y": 2007
    },
    {
      "id": 144250,
      "y": 2007
    },
    {
      "id": 144251,
      "y": 2007
    },
    {
      "id": 144252,
      "y": 2015
    },
    {
      "id": 144253,
      "y": 2015
    }
  ],
  "summary": "A 3D reimagining of the core premise of The Legend of Zelda: A Link to the Past (1991), Ocarina of Time follows Link, the protagonist, as he picks up a sword and leaves behind his humble origins in order to trek across the land of Hyrule, venture into its treacherous dungeons and travel through time itself to fulfill his destiny as the Hero of Time by defeating his enemy Ganondorf and ridding Hyrule of evil."
};

const games = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
    <HomePage games={games} />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));