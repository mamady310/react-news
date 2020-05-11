import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import './App.css';

class App extends Component {
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
