import React ,{useContext} from 'react'
import {ModelContext} from '../context/model'
import Dropdown from './dropdown-comp'
export default function Filters() {
		const {maxPrice, minPrice, location,rent, price,type,bedroom,area, minArea,maxArea, handleFilterChange,sale, projects} = useContext(ModelContext)
		// getUniqueValues of keys from the projects 
  const getUniqueValues = (object,value)=>{
    let unique = [...new Set(object.map(item=>item[value]))]
    return unique
  }
		// get All types for selection
		let types = getUniqueValues(projects,'type')
    types = ['all',...types]
    // get All locations for selection
     let locations = getUniqueValues(projects,'location')
     locations = ['all',...locations]
     //get All bedrooms for selection
     let bedrooms = getUniqueValues(projects,'bedroom')
     bedrooms = ['all',...bedrooms]
	return (
		<div className="bg-blue-200 h-64 py-10 mb-20 ">
		<div className='flex flex-col rounded md:flex-row md:justify-evenly bg-white items-center p-3'>
			<div className="mt-2 md:mt-0 ">
				Type<Dropdown data={types} name='type' label={type} />
			</div>
			<div className="mt-2 md:mt-0 ">
				Location<Dropdown data={locations} name='location' label={location} />

			</div>
			<div className='mt-2 md:mt-0'>
				bedrooms <Dropdown data={bedrooms} name='bedroom' label={bedroom} />
			</div>
			<div className="mt-2 md:mt-0">
				${price}<input type="range" min={minPrice} max={maxPrice} name='price' value={price} onChange={handleFilterChange} />
			</div>
			<div className="mt-2 md:mt-0">
				Area &nbsp;
				<input type="number" className="w-24 shadow" value={minArea} name='minArea'  onChange={handleFilterChange} />
				<input type="number" className="w-24 shadow"  value={maxArea} name='maxArea'  onChange={handleFilterChange} />
			</div>
			<div className='mt-2 md:mt-0'>
				<label htmlFor="rent">Rent </label>
				<input type="checkbox" name='rent' value={rent} onChange={handleFilterChange}/>
			</div>
			<div className='mt-2 md:mt-0'>
				<label htmlFor="sale">For Sale</label>
				<input type="checkbox" name='sale' value={sale} onChange={handleFilterChange}/>
			</div>
			


		</div>
		</div>
	)
}