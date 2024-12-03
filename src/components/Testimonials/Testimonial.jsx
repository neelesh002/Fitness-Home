import React, { useState } from 'react';
import { testimonialsData } from '../../data/testimonialsData';
import "./Testimonial.css";
import A18 from "../../images/A18.png";
import A19 from "../../images/A19.png";
import {motion} from "framer-motion";

const Testimonial = () => {
     const transition = {type:"spring", duration: 3};
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length
  return (
    <div className='testimonials' id='Testimonials'>
      <div className="left-t"> 
      <span> Testimonials</span>
     <span className='stroke-text'>What they</span>
     <span>say about us</span>
     <motion.span
     key={selected}
     initial={{opacity:0, x: -100}}
     animate={{opacity: 1, x: 0 }}
     exit={{opacity:0, x: 100}}
     transition={{ ...transition, duration:3}}
     
     >
        {testimonialsData[selected].review}
     </motion.span>
     <span>
        <span style={{color:'#ffa739'}}>
            {testimonialsData[selected].name}
            </span>
            - {testimonialsData[selected].status}
     </span>
       </div>
      <div className='right-t'>
        <motion.div
        initial={{opacity:0, x:-100}}
        transition={{ ...transition, duration:2 }}
        whileInView={{opacity:1, x:0 }}
        ></motion.div>
        <motion.div
        initial={{opacity:0, x: 100}}
        transition={{ ...transition, duration:2 }}
        whileInView={{opacity:1, x:0 }}
        ></motion.div>
     <motion.img
     key={selected}
     initial={{opacity:0, x: 100}}
     animate={{opacity: 1, x: 0 }}
     exit={{opacity:0, x: -100}}
     transition={{ ...transition, duration:3}}
     src={testimonialsData[selected].image} alt="" />
     <div className='arrows'>
      <img
      
         onClick={()=>{
          selected=== 0 ? setSelected(tLength-1):
          setSelected((prev)=> prev -1);
         }}
      src={A18} alt="" />
      <img
         
    onClick={()=>{
      selected === tLength-1 
      ? setSelected(0)
      : setSelected((prev)=> prev +1);
      
    }}

      src={A19} alt="" />
     </div>
      
    </div>
    </div>
  );

};

export default Testimonial;