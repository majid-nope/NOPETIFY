import React from "react";
import { useDataLayerValue } from "../../../config/DataLayer";
import "./Body.css";

function Body() {
  const [{ user, user_dp, followers, following, playlistsNo }] = useDataLayerValue();
  
  const style = {
      color: '#b3b3b3'

  }

  return (
    <div className="Body">
      <div className="header">
        <div className="avatar">
          <img className="avatar__dp" src={user_dp} alt="" />

          {user.display_name ? <h4>{user.display_name}</h4> : <h4>Nobody</h4>}
        </div>
      </div>

      <div className="banner">
        <img src={user_dp} alt="" />
        <div className="name_and_followers">
          <h4>Profile</h4>
          <h1>{user.display_name}</h1>
          <div className="followers">
            <h5 style={style}> {playlistsNo} Public Playlists &nbsp;</h5>
            <h4 style={style}> • </h4>
            <h5>&nbsp;{followers}&nbsp;Follower&nbsp;</h5>
            <h4 style={style}>•</h4>
            <h5>&nbsp;{following} Following </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
