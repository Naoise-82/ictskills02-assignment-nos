import igdb from "igdb-api-node";

const client = igdb(process.env.TWITCH_CLIENT_ID, process.env.TWITCH_APP_ACCESS_TOKEN);

export const getGame = async () => {
  const response = await igdb()
  .fields('name,release_dates,platforms')
  .request('/games');

  return response.json();

}