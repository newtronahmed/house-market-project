import React from 'react';
import {FaTwitter,FaFacebook,FaInstagram,FaGithub,FaEnvelope} from 'react-icons/fa'
import {HiPaperAirplane} from 'react-icons/hi'

const Footer = (props) => {
  return (
    <div className='p-6 '>
    	<div className='grid lg:grid-cols-6 '>
    		<div className=' lg:col-start-1 lg:col-span-2 '>
        		<a href="#" className='p-3'>Buy House!</a>
        		<p className='p-5'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
        		<p className='p-5'>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex text-2xl mx-1 p-2'><FaTwitter /></a>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex  text-2xl mx-1 p-2'><FaFacebook /></a>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex  text-2xl mx-1 p-2'><FaInstagram /></a>
        			<a href="#" className='bg-blue-300 rounded-full inline-flex  text-2xl mx-1 p-2'><FaGithub /></a>
        		</p>
    		</div>
    		<div className='lg:col-start-3 lg:col-span-2  w-ful'>
    			<p className='font-bold text-2xl lg:text-center'>Company</p>
                <div className='lg:text-center'>
                    <div>About us</div>
                    <div>About us</div>
                    <div>About us</div>
                    <div>About us</div>
                </div>
    		</div>
    		
    		<div className='lg:col-end-7 lg:col-span-2  w-full'>
    			<p className='font-bold text-2xl text-center bg-white mb-4'>Stay up to date</p>
    			<div className="input-container">
			    <FaEnvelope className="icon text-center font-bold h-12 " />
			    <input className="input-field border-blue-200 border-2" type="text" placeholder="Email" name="email" />
			  </div>

    		</div>
    	</div>
    </div>
  )
}

export default Footer;