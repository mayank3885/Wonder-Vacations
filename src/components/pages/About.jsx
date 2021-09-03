import React from "react";
import "../../App.css";
import vid from "../.././assets/videos/video-2.mp4";

function About() {
  return (
    <>
      <div className="hero-container">
        <video src={vid} autoPlay loop muted/>
        <div className='card1'>
          <h2 className='heading1'>WHO ARE WE?</h2>
          <p className='contents'>Wonder Vacations was born from the obvious: we love India, our country, and most of all, we want to share our love for this captivating country with many facets with the entire world.</p>
          <p className='contents'>The choice of the name of our agency has become, our desire to discover the real India. For us at Wonder Vacations, guest is treated like God as per the Hindu philosophy and sanskrit it is called "Nriyagya" which means veneration of guest.</p>
          <p className='contents'>With a great experience in the tourism sector in India, the founder and director of Wonder Vacations has a dedicated team of best people to offer a high quality service to meet your expectations.</p>
          <p className='contents'>Our ambition is to offer excellence.</p>
        </div>
      </div>
    </>
  );
}

export default About;
