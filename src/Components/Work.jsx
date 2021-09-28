import React from 'react'
import Projects from './Projects'
import Propwork from './Propwork'


export default function Work() {
    return (
        <>
            <div id="work" className="work" >
            <div className="headers" >&lt;Work/&gt;</div>
            <div className="work_projects"  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="50"
     data-aos-offset="0">

            {Projects.map(  (val)=>{

             return <Propwork name={val.name} img={val.img} tech={val.tech} link={val.link} code={val.code}/>

            
            })}


            </div>
            </div>
        </>
    )
}
