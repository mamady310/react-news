import React, { Component } from 'react';
import FoodList from '../Components/FoodList'

class Main extends Component {
    render () {
        return (
            <div className='main-section' id='main'>
                 <h1>React Daily News</h1>
                 <FoodList recipes={this.props.recipes} />
            </div>
        )
    }
};

export default Main;