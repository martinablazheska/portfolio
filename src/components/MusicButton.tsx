import { useState } from "react";
import saturdayNight from "@/assets/audio.mp3";
import { Button } from "@nextui-org/button";
import { VolumeX, Volume2 } from "lucide-react";

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
      <Button
        onPress={toggleMusic}
        isIconOnly
        size="sm"
        radius="full"
        className="fixed bottom-5 right-5 p-2 bg-white bg-opacity-80 text-gray-700"
      >
        {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
      </Button>
      <audio id="bgMusic">
        <source src={saturdayNight} type="audio/mp3" />
      </audio>
    </>
  );
};

export default MusicButton;
