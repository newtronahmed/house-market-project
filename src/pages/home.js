import React from 'react';
import Hero from '../components/hero'
import BackgroundHero from '../components/background_hero'
import Services from '../components/services'
import Featured from '../components/featured'
import Testimony from '../components/testimony'


const Home = (props) => {
  return (
    <div>
	  
	    	<BackgroundHero />
	    
	    <Services />
	    <Featured />
	    <Testimony />
    </div>
  )
}

export default Home;