import React from 'react'
import './Restall.css'

import React1 from './img/react.png';
import Photoshop from './img/photoshop.png';
import Html from './img/html.png';
import Css from './img/css3.png';
import Bootstrap from './img/bootstrap.png';
import Figma from './img/figma.png';
import Javascript from './img/javascript.png';
import learn from './img/learn.gif';


export default function Skills() {
    return (
        <div id="skills"  className="skills">

<div className="headers" >&lt;Skills/&gt;</div>

            <p> Technologies I am familiar with-</p>

            <div className="skills_content" data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine" >
                <div className="development_skills" >
                    <div className="h"  >{`{Development}`}</div>    

                    <div className="skill_name"><img src={Html} alt="" /><span>HTML</span></div>
                    <div className="skill_name"><img src={Css} alt="" /><span>CSS</span></div>
                    <div className="skill_name"><img src={Javascript} alt="" /><span>Javascript</span></div>
                    <div className="skill_name"><img src={Bootstrap} alt="" /><span>Bootstrap</span></div>
                    <div className="skill_name"><img src={React1} alt="" /><span>React</span></div>
                </div>
                <div className="design_skills">
                <div className="h">{`<-Design->`}</div>    
                <div className="skill_name"><img src={Photoshop} alt="" /><span>Photoshop</span></div>
                    <div className="skill_name"><img src={Figma} alt="" /><span>Figma</span></div>
                </div>

                <div data-aos="fade-left"
     data-aos-offset="200"
     
     data-aos-easing="ease-in-sine">
                    <img className="gif_learn" src={learn} alt=""  />
                    <div className="div" >And learning... 😊 </div>
                </div>

            </div>


        </div>
    )
}
