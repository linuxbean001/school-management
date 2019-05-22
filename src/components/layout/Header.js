import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <ul>
                    <li>
                    <NavLink to={'/dashboard'} >Dashboard</NavLink>
                    </li>
                    <li>
                    <NavLink to={'/resources'} >Resources</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;
