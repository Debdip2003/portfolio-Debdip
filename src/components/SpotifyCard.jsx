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
          className="absolute -top-10 left-1/2 -translate-x-1/2 z-10 text-xs font-extrabold rounded-lg px-4 py-1.5 whitespace-nowrap max-w-[90vw] text-center bg-theme-accent text-theme-accent-text shadow-lg shadow-[var(--accent-glow)]"
        >
          <span
            className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 rotate-45 bg-theme-accent" />
          This is my fav song btw ( If you don't know me :) )
        </span>
      )}
      <div
        className="w-full max-w-80 sm:max-w-96 rounded-2xl overflow-hidden shadow-2xl border border-theme-border bg-theme-card backdrop-blur-xl"
      >
        <div className="px-5 pt-5 pb-7 transition-all duration-700">
          <p className="text-center text-[10px] font-bold tracking-[0.2em] uppercase text-theme-muted mb-4">
            Now Playing
          </p>
          <div className="relative">
            <img
              src={dpImage}
              alt="Debdip Bhattacharya"
              className="w-full aspect-square object-cover object-bottom rounded-xl"
            />
            {isPlaying && (
              <div
                className="absolute inset-0 rounded-xl border-2 border-theme-accent animate-spin"
                style={{ animationDuration: "8s" }}
              />
            )}
          </div>
        </div>

        <div className="px-5 pt-4 pb-5 bg-theme-card-inner backdrop-blur-md border-t border-theme-border">
          <div className="flex items-start justify-between mb-1">
            <div className="overflow-hidden pr-2">
              <p className="text-theme-text font-bold text-base truncate animate-fade-in">
                {currentSong.title}
              </p>
              <p className="text-theme-muted text-sm truncate mt-0.5 mb-3">
                {currentSong.artist}
              </p>
            </div>
            <button
              onClick={handleLike}
              className={`flex-shrink-0 mt-1 transition-transform hover:scale-110 ${
                liked ? "text-emerald-500" : "text-theme-subtle"
              }`}
            >
              <FaHeart size={18} />
            </button>
          </div>
          <div
            className="w-full h-1 rounded-full cursor-pointer group mb-1.5 bg-theme-pill"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-theme-accent rounded-full relative transition-none"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-theme-text rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex justify-between text-xs mb-4 text-theme-muted">
            <span>{fmt(currentTime)}</span>
            <span>{fmt(duration)}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button className="text-theme-muted hover:text-theme-text transition-colors">
              <FaRandom size={14} />
            </button>
            <button
              onClick={handlePrev}
              className="text-theme-text transition-transform hover:scale-110 active:scale-95"
            >
              <FaStepBackward size={20} />
            </button>
            <button
              onClick={() => setIsPlaying((p) => !p)}
              className="w-12 h-12 bg-theme-accent text-theme-accent-text rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <FaPause size={18} />
              ) : (
                <FaPlay size={18} className="ml-0.5" />
              )}
            </button>
            <button
              onClick={handleNext}
              className="text-theme-text transition-transform hover:scale-110 active:scale-95"
            >
              <FaStepForward size={20} />
            </button>
            <button
              className="text-theme-muted hover:text-theme-text transition-colors"
              onClick={handleReplay}
            >
              <FaRedo size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <FaVolumeDown size={12} className="text-theme-muted" />
            <div
              className="flex-1 h-1 rounded-full cursor-pointer group bg-theme-pill"
              onClick={handleVolumeClick}
            >
              <div
                className="h-full rounded-full relative transition-all bg-theme-muted"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-theme-text rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <FaVolumeUp size={12} className="text-theme-muted" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;