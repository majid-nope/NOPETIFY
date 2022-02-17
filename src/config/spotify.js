const AuthUrl = "https://accounts.spotify.com/authorize";
const client_id = "5066f026359f4ae1a0e19ecb6dcc8fbe";
const redirect_uri = "http://localhost:3000/";
const scope = [
  "user-read-playback-state",
  "user-follow-read",
  "ugc-image-upload",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
];
export const responseUrl = () => {
  return window.location.hash.substring(1).split("&").reduce((initial, items) => {
    let part = items.split("=");
    initial[part[0]] = decodeURIComponent(part[1]);
    return initial;
  }, {})
};
export const loginUrl = `${AuthUrl}?response_type=token&client_id=${client_id}&scope=${scope.join(
  "%20"
)}&redirect_uri=${redirect_uri}&show_dialog=true`;

