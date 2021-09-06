import React from "react";
import "../App.css";
import styles from "./HeroSection.module.css";
import wv from "../assets/Slideshow/Wv.mp4";

const HeroSection = () => {
  return(
  <div className={styles.container}>
    <video src={wv} autoPlay loop muted/>
    <h1>ADVENTURE AWAITS</h1>
    <p>What are you waiting for?</p>
  </div>)
}

export default HeroSection;
