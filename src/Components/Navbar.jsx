import React from 'react'
// import { Link } from 'react-router-dom'
import'./Navbar.css'
import {Link} from 'react-scroll';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;



export default function Navbar() {

    const scrolltop=()=>{
        scroll.scrollToTop();
    }
   

    return (
        <>


    <div className="navbar">
        <div className="nav_a" style={{    color: "#61ffa8"}}><Link  onClick={scrolltop} spy={true} smooth={true} offset={0} duration={500} >  Fidal</Link></div>
        <div className="menu">
        <ul>                                 
            <li className="nav_a"><Link activeClass="active" onClick={scrolltop} spy={true} smooth={true} offset={0} duration={500} >    Home</Link></li>
            <li className="nav_a"> <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} >    About </Link></li>
            <li className="nav_a"> <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} >   Skills</Link></li>
            <li className="nav_a"> <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500} >   Work</Link></li>
            <li className="nav_a"> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} >   Contact</Link></li>
                
            </ul>
        </div>
    </div>




        </>
    )
}
