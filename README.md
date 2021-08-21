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

[For non-Movies Fan app] Insert a diagram of the API's data model (see example below) AND/OR a sample(s) of the JSON documents returned by its endpoints

![IGDB API Model][model]
>The primary parent obect of the DB is **Game**, and this diagram represents the paramters of the game object that are either objects or arrays themselves that I have used in the app

## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

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