import React from 'react';
import Hero from './hero'
import {Link} from 'react-router-dom'

const BackgroundHero = (props) => {
  return (
    <div className='p-6 bg-blue-400 text-white h-screen background '>
	    <div className='flex justify-between'>
	    	<div className='text-xl'>Buy HOuse</div>
	    	<div className='flex'>
	    		<div className='mx-3'>home</div>
	    		<div className='mx-3'>services</div>
	    		<div className='mx-3'>About</div>
	    	</div>
	    </div>
	    <div className='text-center transform translate-y-32'>
	    	<div className='sm:text-5xl wow slideInDown'>Affordable homes , offices ,appartments for rent and sale</div>
	    	<div className='text-xl'>Browse throuh our list of houses Now</div>
	    	<div className='w-1/4 p-4 font-bold wow slideInUp mx-auto bg-blue-500 m-3'>
	    		<Link to={'/rooms'}>search</Link>
	    	</div>
	    	
	    </div>
    </div>
  )
}

export default BackgroundHero;