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
                <UpFirst />
                <Budgets />
                <Resources />
            </div>
        );
    }
}

export default Dashboard;
