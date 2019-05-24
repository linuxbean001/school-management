import React, { Component } from 'react';
import { Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <header className="navigation" id="sticky-nav">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="navbar-header">
                                <h1 className="navbar-brand">
                                    <NavLink to={'/dashboard'} > <img src="/img/logo.png" className="first-logo" /></NavLink>

                                </h1>
                            </div>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavLink to={'/dashboard'} >Dashboard</NavLink>
                                        <NavLink to={'/Resources'} >Resources</NavLink>
                                        <NavLink to={'/Budgets'} >Budgets</NavLink>
                                        <NavLink to={'/Transactions'} >Transactions</NavLink>
                                        <NavLink to={'/Personnel'} >Personnel</NavLink>
                                    </Nav>

                                </Navbar.Collapse>
                            </Navbar>

                            <div className="top-bar-links clearfix pull-right">
                                <ul className="top-bar-acc">
                                    <li className="top-bar-link">
                                        <div className="top-bar-inner">
                                            <p>Metro City Unified School District</p>
                                            <p><b>John F.Kennedy High School</b></p>
                                        </div>
                                    </li>
                                    <li className="top-bar-link">
                                        <div className="top-bar-inner">
                                            <h4><img src="/img/aj-icon.png" /> Alexandor Johnson</h4>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header; 
