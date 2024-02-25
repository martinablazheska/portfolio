import { useState } from "react";
import saturdayNight from "../../assets/audio.mp3";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

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
      <audio id="bgMusic" controls>
        <source src={saturdayNight} type="audio/mp3" />
      </audio>

      <button onClick={toggleMusic} className={classes["toggle-music"]}>
        {isPlaying ? <MdMusicNote /> : <MdMusicOff />}
      </button>
    </>
  );
};

export default MusicButton;
