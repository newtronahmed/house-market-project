import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  	<>
    <nav className="flex items-center justify-between flex-wrap p-3  lg:p-6">
  <div className="flex items-center flex-shrink-0 lg:mr-6  mr-2">
    <span className="font-semibold text-xl tracking-tight">Buy House!</span>
  </div>
  <div className="block md:hidden">
    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">   <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
</button>
  </div>
 
</nav>
<div className='flex justify-center '>
	<ul className='list-none inline-flex  ' >
		<li className='lg:mx-2 p-2 cursor-pointer bold hover:text-blue-300' >
			<Link to='/rooms'>For sale</Link>
		</li>
		<li className='lg:mx-2 cursor-pointer p-2 bold'>
			<Link to='/rooms' >For rent</Link>
		</li>
		<li className='lg:mx-2 cursor-pointer p-2 bold'>
			<Link to='/rooms' >Blog</Link>
		</li>
	</ul>
</div>
</>

  )
}

export default Navbar;