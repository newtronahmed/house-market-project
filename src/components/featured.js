import React,{useContext} from 'react';
import {ModelContext} from '../context/model'
import Title from '../components/title'
import RoomComponent from './roomComponent'
const Featured = (props) => {
	let {featured} = useContext(ModelContext);
	
  return (
      <section>
      	<Title title='Featured' />
      	<RoomComponent data={featured}/>
      </section>
    );
}

export default Featured; 