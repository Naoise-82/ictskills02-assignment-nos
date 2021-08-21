# Assignment - ReactJS app.

Name: Naoise O'Sullivan

## Overview.

This app is designed to be similar to the movies app we created in the labs, but using the **Internet Game Database (IDGB)** API to retieve information about video games, consoles and game characters. I have limited the scope of the API calls in the app to retieve games and hardware from consoles, as opposed to all platforms (PC/Mac/Linux, Mobile, Arcade etc.).

### User Features
 
 + A *Homepage* similar ot the movies app, with a random list of 30 games
 + A *My Collection* Page similar to the *Favourite Movies* page from the movies app. I had intended to use a POST request to the IDGB API to add these to a personal list on my account with them, but I discovered that this is not actually an available feature of the APi currently.
 + A *Consoles* page listing games consoles in order of the their generations (see https://en.wikipedia.org/wiki/Home_video_game_console_generations)
 + 

## Setup requirements.

+ I had to use a third party proxy called *thigproxy* running locally on my machine to forward requests to the API in order ot get around CORS issues.
+ Here is the link to the repo of my configured version of the proxy: https://github.com/Naoise-82/thingproxy.
+ All you need to do is clone the repo, and run it using `npm start` from the terminal, and then you can run the assigment app.
+ The assignment is configure to forward API requests to the thing proxy server on port 4000.

## API Data Model.

![IGDB API Model][model]
>The primary parent obect of the DB is **Game**, and this diagram represents the paramters of the game object that are either objects or arrays themselves that I have used in the app

### JSON Sample Data

#### Game
```json
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
                "id": 41,
                "abbreviation": "WiiU",
                "platform_logo": {
                    "id": 239,
                    "image_id": "pl6n"
                }
            }
        ],
        "rating": 91.9466716394443,
        "rating_count": 1294,
        "release_dates": [
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
            },
            {
                "id": 300133,
                "y": 1998
            },
            {
                "id": 300134,
                "y": 1998
            },
            {
                "id": 300135,
                "y": 1998
            },
            {
                "id": 300136,
                "y": 1998
            }
        ],
        "screenshots": [
            {
                "id": 18046,
                "image_id": "hsycs23tftukuix2ftnc",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/hsycs23tftukuix2ftnc.jpg"
            },
            {
                "id": 24104,
                "image_id": "or16ydorr1b35aq2f8mc",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/or16ydorr1b35aq2f8mc.jpg"
            },
            {
                "id": 24105,
                "image_id": "porwa0yo3cerskw2ggcb",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/porwa0yo3cerskw2ggcb.jpg"
            },
            {
                "id": 24106,
                "image_id": "btsnrjrewz8md0ztije8",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/btsnrjrewz8md0ztije8.jpg"
            },
            {
                "id": 24107,
                "image_id": "id65ty6ulps9twunpb0r",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/id65ty6ulps9twunpb0r.jpg"
            }
        ],
        "summary": "A 3D reimagining of the core premise of The Legend of Zelda: A Link to the Past (1991), Ocarina of Time follows Link, the protagonist, as he picks up a sword and leaves behind his humble origins in order to trek across the land of Hyrule, venture into its treacherous dungeons and travel through time itself to fulfill his destiny as the Hero of Time by defeating his enemy Ganondorf and ridding Hyrule of evil."
    }
```

#### Console
```json
 {
        "id": 12,
        "abbreviation": "X360",
        "generation": 7,
        "name": "Xbox 360",
        "platform_logo": {
            "id": 250,
            "image_id": "pl6y"
        },
        "platform_family": {
            "id": 2,
            "name": "Xbox"
        },
        "summary": "Xbox 360 brings you a total games and entertainment experience. The largest library of games, including titles that get you right into the thick of it with Kinect. Plus, your whole family can watch HD movies, TV shows, live events, music, sports and more—across all your devices. Xbox 360 is the center of your games and entertainment universe.",
        "versions": [
            {
                "id": 2,
                "name": "Xbox 360 Elite"
            },
            {
                "id": 3,
                "name": "Xbox 360 Arcade",
                "platform_version_release_dates": [
                    {
                        "id": 2,
                        "y": 2007
                    }
                ]
            },
            {
                "id": 83,
                "name": "Xbox 360 Original",
                "platform_version_release_dates": [
                    {
                        "id": 52,
                        "y": 2005
                    },
                    {
                        "id": 53,
                        "y": 2005
                    },
                    {
                        "id": 54,
                        "y": 2005
                    }
                ]
            }
        ]
    }
```

#### Genres
```json
[
    {
        "id": 4,
        "name": "Fighting"
    },
    {
        "id": 5,
        "name": "Shooter"
    },
    {
        "id": 7,
        "name": "Music"
    },
    {
        "id": 8,
        "name": "Platform"
    },
    {
        "id": 9,
        "name": "Puzzle"
    },
    {
        "id": 10,
        "name": "Racing"
    },
    {
        "id": 11,
        "name": "Real Time Strategy (RTS)"
    },
    {
        "id": 12,
        "name": "Role-playing (RPG)"
    },
    {
        "id": 13,
        "name": "Simulator"
    },
    {
        "id": 14,
        "name": "Sport"
    },
    {
        "id": 15,
        "name": "Strategy"
    },
    {
        "id": 16,
        "name": "Turn-based strategy (TBS)"
    },
    {
        "id": 24,
        "name": "Tactical"
    },
    {
        "id": 26,
        "name": "Quiz/Trivia"
    },
    {
        "id": 25,
        "name": "Hack and slash/Beat 'em up"
    },
    {
        "id": 30,
        "name": "Pinball"
    },
    {
        "id": 31,
        "name": "Adventure"
    },
    {
        "id": 33,
        "name": "Arcade"
    },
    {
        "id": 34,
        "name": "Visual Novel"
    },
    {
        "id": 32,
        "name": "Indie"
    },
    {
        "id": 35,
        "name": "Card & Board Game"
    },
    {
        "id": 36,
        "name": "MOBA"
    },
    {
        "id": 2,
        "name": "Point-and-click"
    }
]
```

## App Design.

### Component catalogue.
Insert a screenshot from the Storybook UI showing your component catalogue.

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./igdb_api_model.png
[view]: ./view.png
[stories]: ./storybook.png