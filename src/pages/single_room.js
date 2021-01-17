import React,{useContext,useEffect,useState} from 'react';
import {useParams,Link} from 'react-router-dom'
import Title from '../components/title'
import { ModelContext} from '../context/model'
import Rating from 'react-rating'
import { FaArrowLeft, FaShare,FaStar} from 'react-icons/fa'


const SingleRoom = (props) => {
    const {slug} = useParams();
    const { projects }=useContext(ModelContext)
    const single = projects.find(room=>room.slug === slug)
    if(!single) {
       return( <div className='flex justify-center'>
            <div className='bg-red-400 w-1/2 text-center font-bold  px-5 py-3 text-yellow-300'>No rooms could be found for you pussyyyy </div>
        </div>)
    }
    const [defaultImg,...related] = single.images

  return (
    <div>
    	<div className=' wow slideInUp relative'>
    		<img src={defaultImg} alt={single.name} className='h-full-screen' />
			<Link to='/'>
				<FaArrowLeft className="backIcon"/>
			</Link>
    			
    		<div className='single-name wow slideInUp bg-black bg-opacity-50'>
                <p>{single.name}</p>
            </div>
    		<div className='share'>
                <Link to='/'><FaShare /></Link>	
    		</div>
    	</div>
    	<div  className='container grid  grid-cols-3 lg:gap-5 gap-2 py-10 px-5 lg:px-10'>
    		{        
                related.map((each,i)=>(
    			<div className='related-images wow slideInUp ' key={i} >
    				<img src={each} alt="single" className=' min-h-full min-w-full left-0 top-0 absolute bg-cover '  />
    			</div>
    		))}
    	</div>
    	<div className='grid grid-cols-2 gap-10 p-10 '>
    		<div>
	    		<Title title='Details' />
	    		<article className=' wow slideInLeft lg:tracking-wide leading-7 '>
	    		e 	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	    quis nostrud exercitation .</article>
    		</div>
    		<div>
	    		<Title title='Info' />
	    		<article className=' wow slideInRight leading-7'>
	    			<h6 className='text-xl  tracking-wider'>Price: $ {single.price}</h6>
	    			<h6 className='text-xl tracking-wider'>Area : {single.area}SQFT</h6>
	    			<h6 className='text-xl tracking-wider'>Bedroom : {`${single.bedroom}${single.bedroom>1 ? ' bedrooms': ' bedroom'} `}</h6>
                    <div><Rating initialRating={single.star} emptySymbol={<FaStar className='text-white' />} fullSymbol={<FaStar />}  readonly />
</div>
	    		</article>
    		</div>
    	</div>

    </div>
  )
}

export default SingleRoom; 