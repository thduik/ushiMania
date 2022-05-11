import React, { useState } from 'react'
import data from './data'
import List from './List'
import "./Styles/style.scss"
import TopNavComponent from './Components/TopNav/TopNavComponent'
import { useEffect } from 'react'
import MainSliderComponent from './Components/MainImage/MainSliderComponent'
import MainSwiper from './Components/MainSwiper/MainSwiper'
import MiddleComponent from './Components/Middle/MiddleComponent'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [topNavVisible, setTopNavVisible] = useState("visible")
  const handleScroll = () => {
    const position = window.scrollY;
    console.log("scroll_position", position)
    if (position < 5) {
      setTopNavVisible("visible")
    } else {
      setTopNavVisible("invisible")
    }
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  
  return (
    

    <main>
      <div className = "wrap-all main-background">
        <TopNavComponent className = "topnav" isVisible = {topNavVisible}/>
        <div  style={{height:"0",backgroundColor:"transparent"}}>
          <h1 className = "slider-h1">WORLD'S BEST FUCKING BEEF</h1>
        </div>
        
        <MainSliderComponent/>

        <div className='first-spacer'></div>
        <MiddleComponent/>
        <div className='second-spacer'></div>
        <MainSwiper/>
        <div className = "middle-2-test">

        </div>
      </div>
    </main>
  )
}

export default App
