import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class Budgets extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            < >
                <div className="col-md-5 col-sm-5">
                    <div className="dash-main-box">
                        <h3>Budgets <a href="#"><i className="fa fa-pencil"></i></a></h3>
                        <div className="dash-inner-box">
                            <div className="circle-graph-main budgets_cl">
                                <h5>Total Budgets</h5>
                                <div className="pull-left">
                                    <p >22.5k Spent this Month</p>
                                </div>
                                <div className="pull-right">
                                    <p >Total:<span> &nbsp;4,736k</span></p>
                                </div>
                                <div className="clearfix"></div>
                                <div>
                                    <ProgressBar>
                                        <ProgressBar className="blue_bar"  now={55} label={`${'2,756K'}`} key={1} />
                                        <ProgressBar className="yellow_bar" now={20} label={`${'756K'}`} key={2} />
                                        <ProgressBar  className="green_bar" now={25} label={`${'56K'}`} key={3} />
                                    </ProgressBar>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Budgets;
