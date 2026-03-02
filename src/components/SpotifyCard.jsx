import React, { useEffect, useRef, useState } from "react";
import song1 from "../assets/song/Red Seedhe Maut (pagalall.com).mp3";
import song2 from "../assets/song/Deewaana Deewaana Tere Ishk Mein 128 Kbps.mp3";
import dpImage from "../assets/dp.png";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
  FaHeart,
  FaVolumeDown,
  FaVolumeUp,
} from "react-icons/fa";
import { set } from "react-hook-form";

// Songs data with favorite field
const SONGS = [
  {
    id: 1,
    title: "Red",
    artist: "Seedhe Maut",
    file: song1,
    isFavorite: true,
  },
  {
    id: 2,
    title: "Deewaana Deewaana",
    artist: "Tere Ishk Mein",
    file: song2,
    isFavorite: false,
  },
];

const fmt = (s) => {
  if (!s || Number.isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

const SpotifyCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(70);
  const [liked, setLiked] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const audioRef = useRef(null);
  const currentSong = SONGS[currentSongIndex];

  useEffect(() => {
    const audio = new Audio(currentSong.file);
    audio.volume = volume / 100;
    audioRef.current = audio;

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    });

    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    });

    return () => {
      audio.pause();
      audio.src = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    setProgress(pct);
    if (audioRef.current && audioRef.current.duration) {
      audioRef.current.currentTime = (pct / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const vol = Math.round(Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)));
    setVolume(vol);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + SONGS.length) % SONGS.length);
    setIsPlaying(true);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % SONGS.length);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
      setProgress(0);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    
    // Download song when liked
    if (newLikedState) {
      const link = document.createElement('a');
      link.href = currentSong.file;
      link.download = `${currentSong.title} - ${currentSong.artist}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };


  return (
    <div className="flex-shrink-0 animate-fade-in relative">
      {currentSong.isFavorite && (
        <span
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 text-xs font-extrabold rounded-lg px-4 py-1.5 whitespace-nowrap max-w-[90vw] text-center"
          style={{
            background: "var(--accent)",
            color: "#0f172a",
            boxShadow: "0 0 16px rgba(100, 181, 246, 0.6)",
            animation:
              "pop-up-bottom 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
          }}
        >
          {/* Arrow pointing up toward card */}
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45"
            style={{ background: "var(--accent)" }}/>
          This is my fav song btw ( If you don't know me :) )
        </span>
      )}
      <div
        className="w-full max-w-80 sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
        style={{
          background: "rgba(22, 21, 21, 0.07)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(50px)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <div className={` px-5 pt-5 pb-7 transition-all duration-700`}>
          <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 mb-4">
            Now Playing
          </p>
          <div className="relative">
            <img
              src={dpImage}
              alt="Debdip Bhattacharya"
              className={`w-full aspect-square object-cover object-bottom rounded-xl`}
            />
            {isPlaying && (
              <div
                className="absolute inset-0 rounded-xl border-2 border-white/20 animate-spin"
                style={{ animationDuration: "8s" }}
              />
            )}
          </div>
        </div>

        <div
          className="px-5 pt-4 pb-5"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div className="flex items-start justify-between mb-1">
            <div className="overflow-hidden pr-2">
              <p className="text-white font-bold text-base truncate animate-fade-in">
                {currentSong.title}
              </p>
              <p className="text-gray-400 text-sm truncate mt-0.5 mb-3">
                {currentSong.artist}
              </p>
            </div>
            <button
              onClick={handleLike}
              className="flex-shrink-0 mt-1 transition-transform hover:scale-110"
              style={{ color: liked ? "#1DB954" : "#6b7280" }}
            >
              <FaHeart size={18} />
            </button>
          </div>
          <div
            className="w-full h-1 rounded-full cursor-pointer group mb-1.5"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onClick={handleSeek}
          >
            <div
              className={`h-full bg-gradient-to-r rounded-full relative transition-none`}
              style={{ width: `${progress}%` }}
            >
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div
            className="flex justify-between text-xs mb-4"
            style={{ color: "#b3b3b3" }}
          >
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              className="transition-colors hover:text-white"
              style={{ color: "#b3b3b3" }}
            >
              <FaRandom size={14} />
            </button>
            <button
              onClick={handlePrev}
              className="text-white transition-transform hover:scale-110 active:scale-95"
            >
              <FaStepBackward size={20} />
            </button>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <FaPause size={18} className="text-black" />
              ) : (
                <FaPlay size={18} className="text-black ml-0.5" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="text-white transition-transform hover:scale-110 active:scale-95"
            >
              <FaStepForward size={20} />
            </button>
            <button
              className="transition-colors hover:text-white"
              style={{ color: "#b3b3b3" }}
              onClick={handleReplay}
            >
              <FaRedo size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FaVolumeDown size={12} style={{ color: "#b3b3b3" }} />
            <div
              className="flex-1 h-1 rounded-full cursor-pointer group"
              style={{ background: "rgba(255,255,255,0.15)" }}
              onClick={handleVolumeClick}
            >
              <div
                className="h-full rounded-full relative transition-all"
                style={{ width: `${volume}%`, background: "#b3b3b3" }}
              >
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <FaVolumeUp size={12} style={{ color: "#b3b3b3" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;