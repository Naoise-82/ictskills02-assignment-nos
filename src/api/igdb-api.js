import axios from "axios";

export const getGame = async (args) => {
  // eslint-disable-next-line no-unused-vars
  const [prefix, { id }] = args.queryKey;
  const response = await axios({
    url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields id,cover.image_id,franchises.name,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y,screenshots.image_id,screenshots.url,summary;where id = " + id + ";"
  });
    return response.data;
};

export const getGames = async () => {
  const response = await axios({
    url: "http://localhost:4000/fetch/https://api.igdb.com/v4/games",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields id,cover.image_id,game_modes.name,genres.*,name,platforms.platform_logo.image_id,platforms.abbreviation,rating,rating_count,release_dates.y;where cover!=null & platforms != {6,82} & platforms.platform_logo != null;limit 30;"
  });
  //console.log(response.data);

  /*if (!response.ok) {
     throw new Error("something went wrong");
   }
   */
  return response.data;
};

export const getGenres = async () => {
  const response = await axios({
    url: "http://localhost:4000/fetch/https://api.igdb.com/v4/genres",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.REACT_APP_TWITCH_CLIENT_ID,
      'Authorization': `Bearer ${process.env.REACT_APP_TWITCH_ACCESS_TOKEN}`,
    },
    data: "fields *;limit 25;"
  })
  return response.data;
}
