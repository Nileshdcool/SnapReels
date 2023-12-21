import React, { Component, useEffect, useState } from "react";
import VerticalCarousel from "../components/VerticalCarousel";
import { config } from "react-spring";
import styles from '../assets/index.module.css'
import {getVideos} from '../services/video-feed.service';


export default function VideoFeed() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      debugger;
      let videos = await getVideos();
      console.log(videos);
      setVideos(videos);
    }
    fetchData();
  }, []);

  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [configs, setConfigs] = useState(config.gentle);

  return (
    <div className={`${styles.video__feed}`}>
      <img width={100} height={100} src='./images/Hot Or Not.jpg'></img>
      <VerticalCarousel
        slides={videos}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={configs}
      />
    </div>
  );

}
