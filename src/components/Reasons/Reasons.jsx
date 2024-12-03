import React from 'react';
import "./Reasons.css";

import A6 from '../../images/A6.png';
import A7 from '../../images/A7.png';
import A8 from '../../images/A8.png';
import A9 from '../../images/A9.png';
import A10 from "../../images/A10.png";
import A11 from "../../images/A11.png";
import A12 from "../../images/A12.png";
import A13 from "../../images/A13.png";

const Reasons = () => {
  return (
    <div className='reasons' id='Why-us'>
    <div className='left-r'>
      <img src={A6} alt="Reason 6" />
      <img src={A9} alt="Reason 9" />
      <img src={A8} alt="Reason 8" />
      <img src={A7} alt="Reason 7" />

      </div>
     
    <div className='right-r'>
     <span>some reasons</span>
     <div>
      <span className='stroke-text'>why</span>
     <span> choose us?</span>
     </div>

     <div className='details-r'>
     <div>
      <img src={A10} alt=""></img>
      <span> OVER 150+ EXPERT COACHS</span>
      </div>
     <div>
      <img src={A10} alt="" />
      <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
      </div>
     <div>
      <img src={A10} alt="" />
      <span>1 FREE PROGRAM FOR NEW MEMBER</span>
      </div>
     <div>
      <img src={A10} alt="" />
      <span>RELIABLE PARTNERS</span>
    </div>
    </div>
    <span style={{
      color:'#9c9c9c',
      fontWeight:'normal',
    }}>OUR PARTNERS</span>
    <div className="partners">
      <img src={A11} alt="" />
      <img src={A12} alt="" />
      <img src={A13} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Reasons;