import React from 'react'
import './About.css'
import deku from './img/deku.gif';

export default function About() {
    return (
        <>
  <div id="about"  className="aboutme">
                <div className="headers" > &lt;About/&gt;</div>

                <div className="about_box">
                    <div className="about_col_1">
                        I am a tech enthusiast, I like to learn new <br />
                        techologies and love developing web apps. <br /> I am starting contribute to open source <br /> projects.
                        <br />
                        <br />
                        <br />
                        Apart from coding, I like to

                        <ul>
                            <li>play video games</li>
                            <li>watch anime/series</li>
                            <li>make funny photoshop edits</li>
                        </ul>
                    </div>

                    <div className="about_col_2">
                        Age-19 <br /><br />
                        Residence-Delhi,India <br />
                        <img src={deku} alt="" style={{    marginTop: "75px", width: "80%"}} />
                    </div>

                </div>
                

</div>          



        
           
        

  
        </>
    );
};



