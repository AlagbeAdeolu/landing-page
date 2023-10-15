import React, { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const CallToAction = () => {
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef();
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current.currentTime;
    if (videoDuration !== null && currentTime !== null) {
      let loadingTimeout = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.0000001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);
      return () => {
        clearTimeout(loadingTimeout);
      };
    }
  }, [isPaused, videoDuration, videoProgress]);

  const togglePlayPause = () => {
    const video = videoRef.current;

    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  return (
    <div className="mb-10">
      <div className="py-10">
        <h2 className="uppercase text-sm font-bold">The kovac family story</h2>
      </div>
      <div className="text-gray-500 text-xl flex justify-between mb-10">
        <div className="w-1/2 border-b-2 border-t-2 py-8">
          <p className="">
            Camilla and Christopher Kovac is the force behind Sweden based
            furniture company,{" "}
            <span className="font-bold underline">Furni</span>, launched 1795,
            designing and providing products and services as environmentally
            friendly as possible.
          </p>
        </div>
        <div className="text-sm rotate-90">
          <p>May,2020 -------- 2023</p>
        </div>
      </div>

      <div>
        <p className="w-1/3 text-4xl text-gray-600 mb-6">
          The products are made in Stockholm, Sweden
        </p>
        <div className="grid grid-cols-3 text-lg text-gray-400">
          <div className="flex flex-col justify-between">
            <p>
              The ambition is to make products with as small impact on the
              environment as possible, source materal and produce them locally.
            </p>
            <p>
              To be the world's most beloved furniture company, known for our
              innovative, high-quality products, exceptional customer service,
              and sustainable practices. High-quality: The company uses
              high-quality materials and construction methods to ensure that its
              furniture is built to last.
            </p>
          </div>

          <div>
            <p>
              Exceptional customer service: The company is committed to
              providing its customers with the best possible shopping
              experience, Sustainable practices: The company is committed to
              using sustainable materials and practices in its manufacturing and
              business operations.
            </p>
          </div>

          <div className="w-full bg-center ">
            <img
              className="h-[500px] w-full object-cover "
              src="/assets/hero9.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* video */}
      <div>
        <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
          <div className="absolute top-4 right-4 z-10">
            <VideoPlayerControls
              progress={videoProgress}
              isPaused={isPaused}
              onPlayPause={togglePlayPause}
            />
          </div>
          <video className="w-full" ref={videoRef} autoPlay loop muted>
            <source src="/assets/cta-video.mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
