import axios from "axios";

const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

export const getSpotifyToken = async () => {
  const api = axios.create({
    baseURL: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const response = api.post("", {
    client_id,
    client_secret,
    grant_type: "client_credentials",
  });

  const data = (await response).data;
  return data.access_token;
};



export const fetchSongs = async () => {
  const api = axios.create({
    baseURL: "https://api.spotify.com/v1", headers: {
      Authorization: `Bearer ${await getSpotifyToken()}`,
    }
  });
  const response = await api.get("/artists/4Z8W4fKeB5YxbusRsdQVPb");
  console.log(response);
}