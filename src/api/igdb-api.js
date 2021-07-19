import axios from "axios";

const clientId = process.env.REACT_APP_TWITCH_CLIENT_ID;
const accessToken = "Bearer " + process.env.REACT_APP_TWITCH_ACCESS_TOKEN;

export const getGame = async (gameId) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'mode': 'no-cors',
        'Accept': 'application/json',
        'Client-ID': clientId,
        'Authorization': accessToken,
    },
    data: "fields cover.image_id,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;\r\nwhere id = " + gameId + ";"
  })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(err => {
        console.error(err);
    });
}

export const getGames = () => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields cover.image_id,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;\r\nlimit 20;"
  })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
    .catch(err => {
        console.error(err);
    });
}
