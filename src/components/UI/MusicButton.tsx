import { useState } from "react";
import saturdayNight from "../../assets/audio.mp3";
import { TbMusicOff } from "react-icons/tb";
import { TbMusic } from "react-icons/tb";

import classes from "./MusicButton.module.scss";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleMusic() {
    const bgMusic = document.getElementById("bgMusic") as HTMLAudioElement;
    if (isPlaying) {
      bgMusic.pause();
      setIsPlaying(false);
    }
    if (!isPlaying) {
      bgMusic.play();
      setIsPlaying(true);
    }
  }
  return (
    <>
      <button onClick={toggleMusic} className={classes["toggle-music"]}>
        {isPlaying ? <TbMusic /> : <TbMusicOff />}
      </button>
      <audio id="bgMusic">
        <source src={saturdayNight} type="audio/mp3" />
      </audio>
    </>
  );
};

export default MusicButton;
