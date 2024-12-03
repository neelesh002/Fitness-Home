import React from 'react';
import "./Program.css";
import { programsData } from '../data/programsData';
import A5 from '../images/A5.png'; 

const Program = () => {
  return (
    <div className='programs' id='Program'>
        <div className="programs-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
             <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories'>
        {programsData.map((program) => (
        <div className="category" key={program.heading}>
         {program.image}
         <span>{program.heading}</span>
         <span>{program.details}</span>
         <div className='join-now'><span>Join Now</span> <img src={A5} alt="" /></div>
        </div>
         ))}
          </div>
          </div>
  );
};

export default Program;