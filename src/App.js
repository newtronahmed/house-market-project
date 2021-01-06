import React, {Component} from 'react';
import 'react-slideshow-image/dist/styles.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import SingleRoom from './pages/single_room'
import Error404 from './pages/404'
import Rooms from './pages/rooms'
import './App.css'
import WOW from 'wowjs'
import Model from './context/model'
import {BrowserRouter as Router ,Route, Switch ,Link } from 'react-router-dom'
class App extends Component {
  componentDidMount() {
  new WOW.WOW({
    live: false
}).init();
}
  render(){
    return (
    	<Model>
	    	<Router>
		      	
	    		<Switch>
			      <Route exact path='/' component={Home}/>
			      <Route   path='/single/:slug' component={SingleRoom}/>
            <Route path='/rooms' component={Rooms} />
			      <Route  path='*' component={Error404}/>
		      </Switch>
          <Footer />
	      </Router>
      </Model>
    )
  }
} 

export default App;
