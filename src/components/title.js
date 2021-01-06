import React from 'react';

const Title = (props) => {
  return (
    <p className='text-xl text-center font-extrabold mt-10 mb-5 wow slideInUp'>
    	<a href="#" className='title'>{props.title}</a> 
    </p>
  )
}

export default Title;