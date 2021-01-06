import React,{useState,useContext} from 'react';

import {ModelContext} from '../context/model'

const Dropdown = ({data,name,label}) => {
	const {handleFilterChange} = useContext(ModelContext)
		const [drop,setDrop] = useState(false)
		
  return (
    <div class="relative inline-block text-left">
  <div>
    <button type="button" onClick={()=>setDrop(!drop)} class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      {label}
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

 
  <div className={`origin-top-right sm:z-0 z-10 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100  ${drop? 'block': 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <div className="py-1">
    { data.map(each=>(

      <div onClick={(e)=>(handleFilterChange(e),setDrop(false))} data-value={each} data-name={name} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer hover:text-gray-900" role="menuitem">{each}</div>
    	))
    }
    </div>
    
  </div>
</div>
  )
}

export default Dropdown;