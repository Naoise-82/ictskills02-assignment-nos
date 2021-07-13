import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/homePage";
import GameDetailsPage from "./pages/gameDetailsPage"

const sample = 
{
    "id": 1029,
    "cover": {
        "id": 132062,
        "image_id": "co2twe"
    },
    "franchises": [
        {
            "id": 596,
            "name": "The Legend of Zelda"
        }
    ],
    "game_modes": [
        {
            "id": 1,
            "name": "Single player"
        }
    ],
    "genres": [
        {
            "id": 8,
            "created_at": 1297555200,
            "name": "Platform",
            "slug": "platform",
            "updated_at": 1323216000,
            "url": "https://www.igdb.com/genres/platform",
            "checksum": "697fc5a4-b96f-a803-288a-498bd5dd1de1"
        },
        {
            "id": 9,
            "created_at": 1297555200,
            "name": "Puzzle",
            "slug": "puzzle",
            "updated_at": 1323216000,
            "url": "https://www.igdb.com/genres/puzzle",
            "checksum": "616de9c3-8a00-0232-9df9-00014cfac51b"
        },
        {
            "id": 12,
            "created_at": 1297555200,
            "name": "Role-playing (RPG)",
            "slug": "role-playing-rpg",
            "updated_at": 1323216000,
            "url": "https://www.igdb.com/genres/role-playing-rpg",
            "checksum": "42dea3b2-7fe2-e734-91cd-f80ce62a14c3"
        },
        {
            "id": 31,
            "created_at": 1323561600,
            "name": "Adventure",
            "slug": "adventure",
            "updated_at": 1323561600,
            "url": "https://www.igdb.com/genres/adventure",
            "checksum": "a6d85192-8d11-bad3-cc5c-dd89e2f94a47"
        }
    ],
    "name": "The Legend of Zelda: Ocarina of Time",
    "platforms": [
        {
            "id": 4,
            "abbreviation": "N64",
            "platform_logo": {
                "id": 260,
                "image_id": "pl78"
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
    "rating": 92.2016324316992,
    "rating_count": 1274,
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
    "screenshots": [
        {
            "id": 18046,
            "image_id": "hsycs23tftukuix2ftnc"
        },
        {
            "id": 24104,
            "image_id": "or16ydorr1b35aq2f8mc"
        },
        {
            "id": 24105,
            "image_id": "porwa0yo3cerskw2ggcb"
        },
        {
            "id": 24106,
            "image_id": "btsnrjrewz8md0ztije8"
        },
        {
            "id": 24107,
            "image_id": "id65ty6ulps9twunpb0r"
        }
    ],
    "summary": "A 3D reimagining of the core premise of The Legend of Zelda: A Link to the Past (1991), Ocarina of Time follows Link, the protagonist, as he picks up a sword and leaves behind his humble origins in order to trek across the land of Hyrule, venture into its treacherous dungeons and travel through time itself to fulfill his destiny as the Hero of Time by defeating his enemy Ganondorf and ridding Hyrule of evil."
};

const games = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
    <GameDetailsPage game={sample} />
  );
};

ReactDOM.render(<App />, document.getElementById("root"));