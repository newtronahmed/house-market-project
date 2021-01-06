import React from 'react';
import Title from '../components/title'
import {FaCarCrash,FaHouseDamage,FaHandHoldingUsd,FaBullhorn} from 'react-icons/fa'
export default class Services extends React.Component {
  state = {
  	services : [
  	{
  		icon: <FaHouseDamage  />,
  		info:  'Lorem ipsum dolor sit amet, conbore et dolore magns nisi ut aliquip ex ea commodoconsequat.',
  		title:'lorem ipsum dolor sit',
  	},
  	{
  		icon: <FaHandHoldingUsd />,
  		info:  'Lorem ipsum dolor sit amet, cons vris nisi ut aliquip ex ea commodoconsequat.',
  		title:'lorem ipsum dolor sit',
  	},
  	{
  		icon: <FaCarCrash />,
  		info:  'Lorem ipsum dolor sit amet, consecte ullamco laboris nisi ut aliquip ex ea commodoconsequat.',
  		title:'lorem ipsum dolor sit',
  	},
  	{
  		icon: <FaBullhorn />,
  		info:  'Lorem ipsum dolor sit amet, a. Utitationcommodoconsequat jusfiad .',
  		title:'lorem ipsum dolor sit',
  	}
  	]
  }
  render() {
    return (
    <section >
    	<Title title="Services"/>
      <div className='grid  grid-cols-2   lg:grid-cols-4 gap-1'>
      	{this.state.services.map(service=>(
      			<div className='rounded shadow-sm text-center wow slideInUp border-2 border-blue-500'>
      				<div className='bg p-2 font-bold '>{service.title}</div>
      					<a className='inline-block text-center text-5xl m-5' >{service.icon}</a>
      				<div>
      					{service.info}	
      				</div>
      			</div>
      		))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  gap-12 md:p-16'>
        <div className="wow slideInUp">
          {this.state.services.map(service=>(
              <div className='flex border-2 rounded '> 
                    <div className="col-start-1 col-span-1   border-2 p-2 ">
                      <div className='text-5xl  vertical-align-center pt-6 text-center   h-full'>{service.icon}</div>
                    </div>
                  
                  <div className=" col-end-7 col-span-5 w-full p-2 ">
                    <div className='my-1 font-bold'>{service.title}</div>
                    <div>{service.info}</div>
                  </div>
              </div>
            ))}
        </div>
        <div className="bg-secondary wow slideInRight">
          
        </div>
      </div>
      </section>
    );
  }
}