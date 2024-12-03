import React from 'react';
import "./Plans.css";
import {plansData} from "../../data/plansData";
import A14 from "../../images/A14.png";


const Plans = () => {
  return (
    <div className='plans-conatiner' id='Plans'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
    <div className="programs-header" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITHUS</span>
    </div>
        <div className="plans">
         {plansData.map((plan,i) => {
            return (
            
            <div className="plan">
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feature, i)=> {
                        return (
                        <div className="feature">
                            <img src={A14} alt="" />
                            <span key={i}>{feature}</span>
                        </div>
                        );
                    })}
                </div>
                 <div>
                    <span>See more benifits -> </span>
                 </div>
                 <button className='btn'>Join now</button>
            </div>
            );

         })} 

        </div>

    </div>
  );
};

export default Plans;