import axios from "axios";

export const getGame = (id) => {
 return axios({
    url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields id,cover.image_id,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;where id = " + id + ";"
  })
    .then(response => response.data)
    .catch(err => {
      console.error(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
};

export const getGames = () => {
 return axios({
    url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields id,cover.image_id,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y;where cover!=null & platforms != {6,82} & platforms.platform_logo != null;limit 30;"
  })
    .then(response => response.data)
    .catch(err => {
      console.error(err);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
};
