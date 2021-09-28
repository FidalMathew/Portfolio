import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Work from './Components/Work'
import { useEffect } from 'react'

import Aos from "aos";
import "aos/dist/aos.css"



// import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {


  useEffect(() => {
    Aos.init({duration:3000});
    
  },[])

  return (
    <>
    
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>

    </>
  );
}

export default App;
