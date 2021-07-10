import axios from "axios";

const clientId = process.env.TWITCH_CLIENT_ID;
const accessToken = "Bearer " + process.env.TWITCH_APP_ACCESS_TOKEN;

export const getGame = async (gameId) => {
  axios({
    url: "https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': clientId,
        'Authorization': accessToken,
        'Access-Control-Allow-Origin': 'http://localhost:6006',
    },
    data: "fields cover.image_id,name,platforms.abbreviation,rating,release_dates.y,summary;\r\nwhere id = " + gameId + ";"
  })
    .then(response => {
        console.log(response.data);
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
}
