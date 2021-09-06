import React from "react";
import styles from "./about.module.css";
import vid from "../.././assets/videos/video-1.mp4";

function About() {
  return (
    <>
      <div className={styles.container}>
        <video className={styles.vids} src={vid} autoPlay loop muted/>
        <div className='card1'>
          <h2 className='heading1'>WHO ARE WE?</h2>
          <p className='contents'>Wonder Vacations was born from the obvious: we love India, our country, and most of all, we want to share our love for this captivating country with many facets with the entire world.</p>
          <p className='contents'>The choice of the name of our agency has become, our desire to discover the real India. For us at Wonder Vacations, guest is treated like God as per the Hindu philosophy and sanskrit it is called "Nriyagya" which means veneration of guest.</p>
          <p className='contents'>With a great experience in the tourism sector in India, the founder and director of Wonder Vacations has a dedicated team of best people to offer a high quality service to meet your expectations.</p>
          <p className='contents'>Our ambition is to offer excellence.</p>
        </div>
        <div className="card2">
        <h2 className='heading1'>OUR KNOW HOW</h2>
          <p className='contents'>Our first wish is to make you love India, the second is that you enjoy it. This is why our team of employees who know India perfectly, will be delighted to offer you a personalized quality and advise you to choose the trip that best meets your expectations.</p>
          <p className='contents'><span>Hotels: </span>The choice of the category of various hotels is at your discretion. We suggest a hotel for every step and need. The choice of this hotel is directly related to the type of circuit. In addition, we still to suggest a hotel which best suites the comfort and ambience.</p>
          <p className='contents'><span>Meal: </span>With a great experience in the tourism sector in India, the founder and director of Wonder Vacations has a dedicated team of best people to offer a high quality service to meet your expectations.</p>
          <p className='contents'><span>Guides: </span>All visits, group or individual, are accompanied by a local professional guide, speaking English, French or German, which will give you all the necessary explanations and customs of the visited region. If you wish, a guide can also accompany you throughout your tour.</p>
          <p className='contents'><span>Routes</span>Whether you are in a group or individually, the routes that we offer have been optimized and designed to introduce you to a maximum of sites in a short time, while giving importance to your comfort. These routes can be tailored to suit your desires.</p>
          <p className='contents'><span>Activities and Services</span>We offer a full range of services ranging from assistance to airports to booking hotel rooms through specialized services such as gala dinners with entertainment , seminars , ... The list is not exhaustive. Wonder Vacations  realizes that are your wishes even more sumptuous. Do not hesitate to ask!</p>
          <p className='contents'><span>Individual Circuit</span>Travel alone, in pairs or in small groups is increasingly popular with travelers. You choose your departure time, spend the time you want during your visits. This way of traveling gives you a little more freedom in relation to a tour for a group. You will be greeted by one of our representatives at every step.  He will assist you in formalities at hotels, stations, airports. And you will travel with confidence.</p>
          <p className='contents'><span>Transportation</span></p>
          <p className='contents'><span>Route</span>Most of our routes are by road. Travelling by road is one of the best means of transport to enjoy the scenery. This transport also stops pictures, en route visits, discoveries crossed over the villages and towns. We recommend a car and driver for a group of up to five people. For more people, we recommend the mini van or bus.</p>
          <p className='contents'><span>Domestic Flight</span>To avoid spending too much time to make a long trip without tourist interest in joining a destination, we can provide domestic flights.</p>
          <p className='contents'><span>Train</span>Traveling by train is a great experience to discover the country and watch the live population. We recommend this type of fast and comfortable transportation whenever possible to reach the cities.</p>
        </div>
        <div className='card3'>
          <h2 className='heading1'>PROFESSIONAL AREA</h2>
          <p className='contents'>Wonder Vacations, destination managemtnt company, your representavie, and a local handling agent in India.</p>
          <p className='contents'>Completely autonomous , Wonder Vacations has it`s own fleet of cars / buses and all drivers are trained and speak English. Its experienced and passionate guides speak mainly English, French and German.</p>
          <p className='contents'>With a great experience in tourism in India, its founders and directors were able to develop trusting relationships with key industry players. Its excellent relations with the hotels it is possible to offer the best rooms in the best conditions.</p>
          <p className='contents'>Satisfying our customer is the center of our priorities. We are committed  to offer you a personalized quality service 24/7.</p>
        </div>
      </div>
    </>
  );
}

export default About;
