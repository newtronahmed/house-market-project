import React ,{ forwardRef } from 'react'
import {Link} from 'react-router-dom'
import FlipMove from 'react-flip-move';
import {FaStar} from 'react-icons/fa'
import Rating from 'react-rating'
export default function RoomComponent({data}) {

	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-2 mb-10 p-6 '>
		<FlipMove typeName={null}>
			{data.map(each=>{

				return (
				<div className=" wow fadeIn border-blue-500 border-2 relative" key={each.id}>
					
						<img src={each.images[0]} alt="Avatar" className='h-48'/>
				
				  
				  <div className=" h-14 p-3 bg-blue-200 flex justify-between ">
				  	<div className='inline bg-blue-600 rounded '>${each.price}</div>
				  	<div>
				  		<Rating initialRating={each.star} emptySymbol={<FaStar className='text-white' />} fullSymbol={<FaStar />}  readonly />
				  	</div>
				  	<Link to={`/single/${each.slug}`} className="text"><button className="bg-blue-800 hover:bg-blue-500  text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">More</button></Link>

				  </div>
				  <div className="overlay hover:opacity-50">
				  </div>
				</div>
			
					)
			})}
			</FlipMove>
      	</div>
	)
}