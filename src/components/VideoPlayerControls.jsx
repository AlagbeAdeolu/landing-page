import { Pause, PlayArrow } from "@mui/icons-material";
import React from "react";

const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);
  return (
    <div className="relative flex justify-center items-center">
      <svg width={size} height={size} style={{transform: "rotate(-90deg)"}}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="##aaaaaa"
          strokeWidth={width}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#fff"
          strokeWidth={width}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute">
        <button className="text-white group cursor-pointer flex justify-center items-center hover:text-green-500" onClick={onPlayPause}>
            {isPaused ? <PlayArrow /> : <Pause />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
