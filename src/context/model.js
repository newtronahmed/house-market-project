import React,{createContext} from 'react';
import Client from '../contentful'
import data from '../data.js'
export const ModelContext = createContext()


export default class Model extends React.Component {
  state = {
    projects:[],
    featured:[],
    filtered:[],
    loading:false,
    price:0,
    minPrice:0,
    maxPrice:'',
    maxArea:'',
    minArea:0,
    area:0,
    rent:false,
    sale:false,
    bedroom:'all',
    location:'all',
    type:'all'
  }
 
  componentDidMount(){
   this.getData()
  }
   
formatData=(data)=>{
let tempData  = data.map(each=>{
  let id=each.sys.id
  let images = each.fields.images.map(each=> each.fields.file.url )
  let room = {...each.fields,images,id}
  return room
});
return tempData;

}
getData = async () => {
    try {
let response = await Client.getEntries({content_type:'houserReactProject'})
let projects = this.formatData(response.items)
    console.log(projects)
    // get featured on mount
    let featured = projects.filter(p=> p.featured === true)
    // calculate max price on mount 
    let prices = projects.map(item=> item.price)
    let areas = projects.map(item=> item.area)
    let maxPrice = Math.max(...prices)
    let maxArea = Math.max(...areas)

    
    this.setState({
      featured,
      projects,
      price:maxPrice,
      maxPrice,
      maxArea,
      filtered:projects,
    })
    }catch(error){
    console.log(error)
    }
  }
  
  getSingleRooms = (slug) =>{
      let tempRooms = [...this.state.projects]
      const room = tempRooms.find(room=>room.slug ===slug)
      return room;
  }

  handleFilterChange = (e) =>{
    let name = e.target.name || e.target.dataset.name
    let value = e.target.type ==='checkbox' ? e.target.checked : e.target.value || e.target.dataset.value

    this.setState ({[name]:value},this.filterRooms)
    console.log(this.state.rent)
    console.log(this.state.sale)
  }


  filterRooms = () =>{
    // Filter by type
    let tempRooms = [...this.state.projects]
    if(this.state.type!=='all'){  
      tempRooms = tempRooms.filter(item=> item.type === this.state.type)
    }

    // filter by location
   
     if(this.state.location!=='all'){  
      tempRooms = tempRooms.filter(item=> item.location === this.state.location)
    }
    // filter by bedrooms
      let parsedBedrooms = parseInt(this.state.bedroom)
     if(this.state.bedroom !== 'all'){  
      tempRooms = tempRooms.filter(item=> item.bedroom === parsedBedrooms)

    }
    // filter by areas

   tempRooms = tempRooms.filter(item=> item.area >= this.state.minArea && item.area <= this.state.maxArea )

    // filter by price
    let price = parseInt(this.state.price)
   tempRooms = tempRooms.filter(item => item.price <= price)

    

    // filter by rent of sale
    if(this.state.rent){

   tempRooms= tempRooms.filter(item=>item.rent === this.state.rent) 

    }

    // fiter by sale

    if(this.state.sale){
    tempRooms = tempRooms.filter(item=>item.rent !==this.state.sale)
    }
console.log(tempRooms)
    // change State finally
    this.setState({filtered:tempRooms})

  }
  render() {
     return (
      <ModelContext.Provider value={{...this.state , getRoom:this.getSingleRooms,handleFilterChange:this.handleFilterChange}}>
      	{this.props.children}
      </ModelContext.Provider>
    );
  }
}