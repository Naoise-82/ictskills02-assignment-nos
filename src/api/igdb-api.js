import axios from "axios";

const clientId = process.env.TWITCH_CLIENT_ID;
const accessToken = "Bearer " + process.env.TWITCH_APP_ACCESS_TOKEN;

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
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
}
