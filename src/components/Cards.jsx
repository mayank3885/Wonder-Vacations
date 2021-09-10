import React from "react";
import "./Cards.css";
import img12 from '../assets/images/img-12.png'
import img13 from '../assets/images/img-13.jpg'
import img14 from '../assets/images/img-14.jpg'
import img15 from '../assets/images/img-15.jpg'

function Cards() {
  return (
    <div className='cards__container'>
    <div className="wrapper">
    <h1>Check out these EPIC Destinations!</h1>
    <div className="cols">
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{backgroundImage : `url(${img12})`}}>
              <div className="inner">
                <p>MOUNT ABU</p>
                <span>2 NIGHTS / 3 DAYS</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <ul>
                    <li><span>Day-1: </span>Reach Mount Abu check in the hotel.
                    Evening visit Pandav Bhawan, watch Sunset from Sunset Point, visit Bhrama Kumari Museum, enjoying Boating and shopping at Nakki Lake.</li>
                    <li><span>Day-2: </span>After breakfast visit Shankar Math and Adhar Devi Temple.
                    After lunch visit the famous Delwara Jain Temples.
                    Achalgarh Fort and Jain Temple where you can also visit Achaleshwar Mahadev Temple, the only place on earth where the great toe of Lord Shiva is worshipped and a Brass Nandi is placed there.
                    After that visit Gurushikhar, the highest peak of the Aravali range. A cave at the summit contains the temple of Dattatreya.
                    On the way return visit Peace Park.
                    Evening free for shopping and strolling.</li>
                    <li><span>Day-3: </span> After breakfast checkout the hotel and drop at respected Airport/Railway Station for onward journey.</li>
                  </ul>   
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{backgroundImage : `url(${img13})`}}>
              <div className="inner">
                <p>ADVENTURE PACKED RISHIKESH TOUR</p>
                <span>2 DAYS / 1 NIGHT</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                <ul>
                    <li><span>Day-1: </span> Once you reach Rishikesh, proceed to Shivpuri camps according to your Rishikesh, camping package. 
                    Check-in and relax before setting out for various exciting activities. Surrender yourself to the adrenaline rush with body surfing, cliff jumping, valley crossing, and 16 km river rafting.
                    Later, enjoy bonfire accompanied by soothing music at the camp. Savor dinner and sleep restfully.</li>
                    <li><span>Day-2: </span> Wake up to a hearty breakfast and checkout from the camp. Now, you will drive to railway station to begin your journey back home.</li>
                  </ul>   
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{backgroundImage : `url(${img14})`}}>
              <div className="inner">
                <p>UDAIPUR</p>
                <span>2 NIGHTS / 3 DAYS</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                <ul>
                    <li><span>Day-1: </span> Pickup from Udaipur Airport /Railway Station by placed camping driver and transfer to you respected Hotel. </li>
                    <li><span>Day-2: </span> After a hearty breakfast visit places such as The City Palace Meusuem The Jagdish Temple Sahelion Ki Bari (Queen’s Resort For Their Friends) Sahelion Ki Bari Bhartiya Lok Kala Mandir (Folk Art Museum) Fateh Sagar Lake And The Pratap Memarial.
                    After your heritage tour ,return to the hotel for a comfortable overnight stay at Udaipur.</li>
                    <li><span>Day-3: </span> After breakfast check-out the hotel and drop at respected airport/railway station for onward journey.</li>
                  </ul>  
                </p>
              </div>
            </div>
          </div>
        </div>        
        <div className="col" ontouchstart="this.classList.toggle('hover');">
          <div className="container">
            <div className="front" style={{backgroundImage : `url(${img15})`}}>
              <div className="inner">
                <p>HIMACHAL PRADESH</p>
                <span>MYSTICAL HOLIDAY TOUR PACKAGE OF GOLDEN TEMPLE & HIMACHAL PRADESH</span>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <p>
                  <ul>
                      <li><span>Day-1: </span> Travel towards Shimla the queen of hills as per your requirement through Volvo bus or Car . Upon arrival check in to the hotel for Overnight stay.</li>
                      <li><span>Day-2: </span>	Take breakfast then proceed for sightseeing tour of Shimla. Visit Kufri, Ridge Maidan, Mall Road and Christ Church.</li>
                      <li><span>Day-3: </span> After having breakfast proceed for Manali. Manali is an important hill station of northern India and is the destination of thousands of tourists every year. </li>
                      Its cool atmosphere provides a perfect haven for the ones afflicted by the hot Indian summers.
                      Besides offering quite a few places for sightseeing, Manali is also famous for adventure sports like skiing, hiking, mountaineering, paragliding, rafting, trekking, kayaking, and mountain biking En- route visit Hanogi Mata Temple
                      <li><span>Day-4: </span> If get permission visit Rohtang Pass (Upto Snow Line in case Rohtang is closed due to snow fall). </li>
                      Later in evening Walk through town visiting newly constructed Buddhist Monastery. Hadimba Devi temple-It is small temple situated in the dense forest is very interesting . Hadimba is said to be the wife of Bhima from the epic of Mahabharata. Vashisht, it is an extremely picturesque little place clinging to the steep hill side. 
                      On the way up to the village you come upon the Vashisht hot baths where a natural sulphar spring is piped into a modern bath -house.
                      <li><span>Day-5: </span> After breakfast, proceed for Dharamshala. En-route visit Chamunda Devi Temple. Check in to the hotel. Evening visit Budhist Monastry, Bhagsunag Temple. Enjoy the natural beauty of Dharamshala. </li>
                      <li><span>Day-6: </span> After breakfast transfer you to the train station/airport for onward destination.</li>
                  </ul>  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
   <div className='link1'>FOR BOOKING <a href='/contact'>CONTACT US</a></div>
   <div className='link2'>FOR MORE <a href='/packages'>TOUR PACKAGES</a></div>
   </div>
  );
}

export default Cards;
