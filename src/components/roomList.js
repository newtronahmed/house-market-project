// import React ,{useContext} from 'react'
import React , {useContext} from 'react'
import {ModelContext} from '../context/model'
import RoomComponent from './roomComponent'

export default function RoomList() {
	const {filtered} = useContext(ModelContext)
	if(filtered.length ===0){
		return <div>No rooms matched your search parameter</div>
	}
	return (<RoomComponent data={filtered} />)
}