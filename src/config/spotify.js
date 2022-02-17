const AuthUrl = "https://accounts.spotify.com/authorize";
const client_id = process.env.REACT_APP_CL_ID;
const redirect_uri = process.env.REACT_APP_REDIRECT;
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

