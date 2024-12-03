import React from 'react';
import "./Hero.css";
import Header from './Header';
import A1 from '../images/A1.png'; 
import A2 from '../images/A2.png'; 
import A3 from '../images/A3.png'; 
import A4 from '../images/A4.png'; 
import {motion} from "framer-motion";
import NumberCounter from "number-counter";


const Hero = () => {

  const transition = {type:'spring',duration:3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
      <div className="left-h">
    
         <Header/>
         <div className="the-best-ad">
         <motion.div
         initial={{ left: mobile? "178px":'238px' }}
          whileInView={{ left: '8px' }}
          transition={{ type: 'tween', duration: 2, ease: 'linear' }}
          ></motion.div>
          <span>The best Fitness Club in the town</span>
         </div>

         <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
         
         <div>
          <span>
         Transform your body, elevate your life – your fitness journey starts here.
         </span>
         </div>
        </div>
        {/*figures */}
       <div className='figures'>
        <div>
          <span>
            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
          </span>
          <span>expert coachs</span>
          </div>
        <div>
          <span>
          <NumberCounter end={938} start={870} delay='4' preFix="+"/>
          </span>
          <span>members joined</span>
          </div>
        <div>
          <span>
            <NumberCounter end={37} start={0} delay='2' preFix="+"/>
          </span>
          <span>fitness programs</span>
          </div>
         </div>
           <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
           </div>

        </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>

        <motion.div
        initial={{right:'-1rem'}}
        whileInView={{ right: '4rem' }}
        transition={{ type: 'tween', duration: 1, ease: 'linear' }}
        className="heart-rate">
          <img src={A1} alt="" />
          <span>Heart Rate</span>
          <span>108 bpm</span>
        </motion.div>

        <img src={A2} alt="" className='hero-image' />
        <motion.img
         initial={{right : "11rem"}}
         whileInView={{right:'20rem'}}
         transition={transition}
        src={A3} alt="" className='hero-image-back'
        
        />

         <motion.div
         initial={{right : "37rem"}}
         whileInView={{right:'28rem'}}
         transition={transition}
          className="calories">
          <img src={A4} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          </div>
         </motion.div>
        
      </div>

    </div>
  );
};

export default Hero;