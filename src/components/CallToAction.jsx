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
        if (videoProgress === currentTime / videoDuration) {
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
    <div className="mb-10 mx-6">
      <div className="py-10">
        <h2 className="uppercase text-sm font-bold">The kovac family story</h2>
      </div>
      <div className="text-gray-500 text-xl lg:flex justify-between mb-10">
        <div className="lg:w-2/3 border-b-2 border-t-2 py-8">
          <p className="">
            Camilla and Christopher Kovac is the force behind Sweden based
            furniture company,{" "}
            <span className="font-bold underline">Furni</span>, launched 1795,
            designing and providing products and services as environmentally
            friendly as possible.
          </p>
        </div>
        <div className="text-sm hidden lg:block lg:rotate-90">
          <p>May,2020 -------- 2023</p>
        </div>
      </div>

      <div className="">
        <p className="w-2/3 md:w-1/2 text-3xl lg:text-5xl leading-relaxed text-gray-600 mb-6">
          The{" "}
          <span className="border-b-2 border-green-500 text-green-500">
            products are made
          </span>{" "}
          in Stockholm, Sweden
        </p>
        <div className="md:grid place-items-center grid-cols-3 gap-10 text-justify text-lg text-gray-400">
          <div className="flex flex-col gap-4">
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
          <div className="w-full  ">
            <img
              className="h-[200px] md:h-[500px] md:rounded-[200px] w-full object-cover"
              src="/assets/hero9.jpg"
              alt=""
            />
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
        </div>
      </div>
      {/* video */}
      <div className="text-center mt-20">
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
        <div className="">
          <h2 className="text-2xl">Poetic Brightness</h2>
          <p className="text-gray-400">
            Shop with us and let us plant a tree in the Amazon rainforest and a
            way to improve our lives and the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
