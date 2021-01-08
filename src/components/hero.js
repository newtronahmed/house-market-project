import React,{useContext} from 'react';
import {ModelContext} from '../context/model'
import { Zoom } from 'react-slideshow-image';

const Hero = ({children,type}) => {
	const {featured}= useContext(ModelContext);
	let images = []
	featured.map(each=>{
		return images.push(each.images.banner) 
	})
  console.log(images)
	const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
    nextArrow: <div  ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>,
    prevArrow: <div ><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></div>,
  }
  return (
  	<div className='h-64'>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} className='h-full' style={{width: "100%"}}>
            <img style={{width: "100%" }} src={each} alt='images'className='h-full' />
          </div>
        ))}
      </Zoom>
    </div>
  )
}
Hero.defaultProps ={
	type:'defaulthero'
}

export default Hero;