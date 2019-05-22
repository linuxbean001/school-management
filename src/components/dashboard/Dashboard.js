import React, { Component } from 'react';

import UpFirst from './UpFirst';
import Budgets from './Budgets';
import Resources from './Resources';

class Dashboard extends Component { 

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                 <section id="dash-main">
        <div className="container-fluid">
            <div className="row">
            <UpFirst />
                <Budgets />
                <Resources />
            </div>
        </div>
    </section>  
               
            </div>
        );
    }
}

export default Dashboard;
