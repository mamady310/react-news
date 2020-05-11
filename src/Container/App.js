import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import './App.css';

class App extends Component {
  
  constructor (){
    super ()
    this.state = {
      recipes: [],
    }
  }
   render (){
     return (
       <div>
         <NavBar />
         <Main />
         <Entertainment />
         <Technology />

       </div>
     )
   }
};
export default App; 
