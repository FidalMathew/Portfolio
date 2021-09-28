import React from 'react'
import Twitter from "./img/bt.png";
import Github from "./img/bg.png";
import Instagram from "./img/bi.png";
import Linkedin from "./img/bl.png";


export default function Footer() {
    return (
        <div>
            <div className="footer">

            <div className="footer_icons">

            <div className="foot_social_icons">

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
  
<span className="bootstrap" style={{position:"relative",left:"1%",fontSize:"18px"}}>| No Bootstrap components Used</span>


</div>

            <div className="copyright" style={{textAlign:"center"}}>Copyright &#169;2021 | Made by Fidal</div>

            </div>
        </div>
    )
}
