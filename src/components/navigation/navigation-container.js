import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='nav-container'>
                    <div className='nav-link-container'>
                        <NavLink exact to="/">
                            Home
                        </NavLink>
                    </div>
                    <div className='nav-link-container'>
                        <NavLink to="About-me" activeClassName='nav-link-active'>
                            About
                        </NavLink>
                    </div>    
                    <div className='nav-link-container'>
                        <NavLink to="Meet the Team" activeClassName='nav-link-active'>
                            Meet the Team
                        </NavLink>
                    </div>
                    <div className='nav-link-container'>
                        <NavLink to="Events" activeClassName='nav-link-active'>
                            Events
                        </NavLink>
                    </div>
                    <div className='nav-link-container'>
                        <NavLink to="Contact" activeClassName='nav-link-active'>
                            Contact
                        </NavLink>
                    </div>
            </div>


        );
    }
}