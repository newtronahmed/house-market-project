import React,{useState,useContext} from 'react';
import {ModelContext} from '../context/model'
import Filters from '../components/filters'
import RoomList from '../components/roomList'
const Rooms = (props) => {
	const {loading} = useContext(ModelContext)
	if(loading){
		return <div>we are loading pussyy</div>
	}

  return (
    <>
    	<Filters />
    	<RoomList />
    </>
  )
}

export default Rooms; 