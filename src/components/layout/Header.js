import React, { Component } from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
               <header className="navigation" id="sticky-nav">
        <div className="container-fluid">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <h1 className="navbar-brand">
                    <NavLink to={'/dashboard'} > <img src="/img/logo.png" className="first-logo"/></NavLink>
                       
                    </h1>
                </div>

                <div className="navbar-collapse collapse" id="myNavbar" aria-expanded="false" style={{height: "1px"}}>
                    <ul className="nav navbar-nav">
                        <li className="current">
                        <NavLink to={'/dashboard'} >Dashboard</NavLink>
                        </li>

                        <li>
                        <NavLink to={'/dashboard'} >Resources</NavLink>
                        </li>

                        <li>
                        <NavLink to={'/dashboard'} >Budgets</NavLink>
                        </li>
                        
                        <li>
                        <NavLink to={'/dashboard'} >Transactions/POs</NavLink>
                        </li>
                        
                        <li>
                        <NavLink to={'/dashboard'} >Personnel</NavLink>
                        </li>
                        
                    </ul>
                </div>
                
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
							        <h4><img src="/img/aj-icon.png"/> Alexandor Johnson</h4>
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
