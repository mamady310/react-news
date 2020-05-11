import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import Main from '../Components/Main';
import Entertainment from '../Components/Entertainment';
import Technology from '../Components/Technology';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  constructor (){
    super ()
    this.state = {
      recipes: [],
    }
  }

  componentDidMount () {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => {
      const meals = res.data.meals
      this.setState({ recipes: meals})
      // console.log(this.state.recipes)
    })
    .catch(error => console.log(error) );
  }
   render (){

     return (
       <div>
         <NavBar />
         <Main recipes={this.state.recipes}/>
         <Entertainment />
         <Technology />

       </div>
     )
   }
};
export default App; 
