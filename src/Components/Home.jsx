import React from 'react'
import './Home.css'

import Me from './img/personal.png';

import Twitter from "./img/twitter.png";
import Github from "./img/github.png";
import Instagram from "./img/instagram.png";
import Linkedin from "./img/linkedin.png";

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

export default function Home() {

  const GotoContact=()=>{
    scroll.scrollToBottom();
    
  }  

  return (



    <>
      <div id="home" className="content">

        <div className="col-1">

          <div className="text">
          <h1>Hi,</h1>
          <h1>I'm <span className="name">Fidal</span></h1>
          
          <h1>Web Developer</h1>
          {/* <p>"I do what I love and love what I do"</p>           */}
          </div>

          <button className="button" onClick={GotoContact}>CONTACT</button>
          {/* <Button variant="contained" color="primary" className="button" style={{backgroundColor: '#12824C', color: 'white'}}>
  Contact
</Button> */}

          <div className="social_icons">

          <a href="https://www.instagram.com/fidjoke/"  target="_blank" rel="noreferrer">
<img src={Instagram} alt="" className="home_i"/>
            {/* <FaInstagram  size={70}   style={{ color: 'white' ,width:"28px",height:"28px" }} /> */}
            </a>
            <a href="https://twitter.com/fidalmathew10"  target="_blank" rel="noreferrer">
            {/* <FaTwitter size={70} style={{ color: 'white' ,width:"28px",height:"28px"}} /> */}
            <img src={Twitter} alt="" className="home_i"/>
            </a>
            <a href="https://www.linkedin.com/in/fidal-mathew-82aba7200/"  target="_blank" rel="noreferrer">
            {/* <FaLinkedin size={70} style={{ color: 'white' ,width:"28px",height:"28px"}} /> */}
            <img src={Linkedin} alt="" className="home_i"/>
            </a>
            <a href="https://github.com/FidalMathew"  target="_blank" rel="noreferrer">
            {/* <FaGithub size={70} style={{ color: 'white' ,width:"28px",height:"28px"}} /> */}
            <img src={Github} alt="" className="home_i"/>
            </a>
            



          </div>
        </div>

        <div className="col-2">
          <img src={Me} alt="Logo" class="me_img" />
        </div>


      </div>


    </>
  )
}
