import React from 'react'
import code from './img/code.png';
import link from './img/link.png';

export default function Propwork(props) {






  return (
    <div className="project_prop">
      <img className="project_img" src={props.img} alt="" />

      <div class="info">

        <div class="visible">
          <div style={{ textAlign: 'center', fontSize: "25px", backgroundColor: "rgb(55 55 55)", color: "white", padding: "6px" }}>{props.name}</div>

          <div style={{ textAlign: 'center',padding: "8px" }}>{props.tech}</div>


        </div>
        <div class="hidden">
          <a href={props.code} target="_blank" rel="noreferrer"><img className="code_img"  src={code} alt="" /> </a>
          <a href={props.link} target="_blank" rel="noreferrer"> <img className="link_img"  src={link} alt="" /></a>


        </div>


      </div>

    </div>
  )
}
