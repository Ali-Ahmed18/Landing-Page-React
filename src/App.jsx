import { useState } from 'react'
import pic1 from './assets/HeroVector-705794e3.png'
import pic2 from './assets/hero-img-girl.png'
import pic3 from './assets/play-icon.png'
import './App.css'
import Navbar from './navbar'

function App() {

  return (
    <>
      <div className="main">
        <img className='mainBgPic' src={pic1} alt="" />
         <Navbar/>
         <div className="hero1">
                  <div className="textWraper" >
                      <p style={{color:"#E07B69",fontWeight:"bold"}}>BEST DESITNATIONS AROUND THE WORLD</p>
                      <h1>Travel, enjoy and live a new and full life.</h1>
                      <p>Built Wicket longer admire do barton vantity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                      <div className="btn">
                          <button>Find out more</button>
                          <button><span><img width={"80"} src={pic3} alt="" /> </span> Play Demo</button>
                      </div>
                  </div>
                  <div className="imgWraper">
                        <img src={pic2} alt="" />
                  </div>
         </div>
      </div>

    </>
  )
}

export default App
