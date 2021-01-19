import React from 'react';
import {FaTwitter,FaFacebook,FaInstagram,FaGithub,FaEnvelope} from 'react-icons/fa'
import {HiPaperAirplane} from 'react-icons/hi'

const Footer = (props) => {
  return (
    <div className='p-6 '>
    	<div className='grid lg:grid-cols-6 '>
    		<div className=' lg:col-start-1 lg:col-span-2 '>
        		<a href="#" className='p-5 text-center lg:text-left'>Buy House!</a>
        		<p className='p-5'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
        		<p className='p-5'>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex text-2xl mx-1 p-2'><FaTwitter /></a>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex  text-2xl mx-1 p-2'><FaFacebook /></a>
        			<a href="#" className='bg-blue-300  rounded-full inline-flex  text-2xl mx-1 p-2'><FaInstagram /></a>
        			<a href="#" className='bg-blue-300 rounded-full inline-flex  text-2xl mx-1 p-2'><FaGithub /></a>
        		</p>
    		</div>
    		<div className='lg:col-start-3 lg:col-span-2  w-ful'>
    			<p className='font-bold text-2xl text-center'>Company</p>
                <div className='text-center'>
                    <div className='cursor-pointer'>About us</div>
                    <div className='cursor-pointer'>Blog</div>
                    <div className='cursor-pointer'>Testimonials</div>
                    <div className='cursor-pointer'>Pricing</div>
                </div>
    		</div>
    		
    		<div className='lg:col-end-7 lg:col-span-2  w-full'>
    			<p className='font-bold text-2xl text-center bg-white mb-4'>Stay up to date</p>
    			<div className="input-container">
			    
			    <input className="input-field border-blue-200 border-2" type="text" placeholder="Email" name="email" />
				<FaEnvelope className="icon text-center font-bold h-12 cursor-pointer " />
			  </div>

    		</div>
    	</div>
    </div>
  )
}

export default Footer;