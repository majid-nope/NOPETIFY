import React from "react";
import "./SliderBar.css";
import SliderOption from "./SliderOption";
import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import Library from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../config/DataLayer";

function SliderBar() {
  const style = {
    backgroundColor: "green",
    border: "none",
    height: "0.1px",
    width: "190px",
    margin: "24px",
  };
  const stylePlaylist = {
    overflow: 'scroll'
}

  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="SliderBar">
      <img className="SlideBar__logo" src="/Nopetify_white.png" alt="logo" />
      <SliderOption Icon={Home} title={"Home"} />
      <SliderOption Icon={Search} title={"Search"} />
      <SliderOption Icon={Library} title={"Library"} />

      <br />
      <strong className="Slider__Title">Playlists</strong>
      <hr style={style} />
      <div style={stylePlaylist}>
        {playlists?.items?.map((playlist) => (
          <SliderOption key={playlist.id} title={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default SliderBar;
