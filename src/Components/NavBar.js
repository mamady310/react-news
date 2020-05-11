import React, { Component } from 'react';
import { Link } from 'react-scroll';

class NavBar extends Component {
    render (){
        return (
            <div className="navbar"> 
                <Link
    activeClass="active"
    to="main"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Main</Link>
<Link
    activeClass="active"
    to="entertainment"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Entertainment</Link>
<Link
    activeClass="active"
    to="technology"
    spy={true}
    smooth={true}
    offset={0}
    duration= {500}
>Technology</Link>
          
            </div>
        )
    }
}
export default NavBar