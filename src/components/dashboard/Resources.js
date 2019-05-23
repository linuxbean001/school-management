import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }
    componentWillMount() {
        this.getChartData();
    }
    getChartData() {
        this.setState({
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Population',
                       
                        data: [
                            10,
                            30,
                            80,
                        ],
                        backgroundColor: [
                            '#f5c205',
                            '#4dc175',
                            '#2f36f0',
                           
                        ]
                    }
                ]
            },
            chartData2: {
                labels: [],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            80,
                            15,
                            20,
                        ],
                        backgroundColor: [
                            '#f5c205',
                            '#4dc175',
                            '#2f36f0',
                           
                        ]
                    }
                ]
            },
            chartData3: {
                labels: [],
                datasets: [
                    {
                        label: 'Population',
                        data: [
                            15,
                            80,
                            30,
                        ],
                        backgroundColor: [
                            '#f5c205',
                            '#4dc175',
                            '#2f36f0',
                           
                        ]
                    }
                ]
            }
        });
    }
    render() {

        return (
            <div >
                <div className="chart">

                </div>
                <div className="col-md-3 col-sm-3">
                    <div className="dash-main-box">
                        <h3>Resources <a href="#"><i className="fa fa-pencil"></i></a></h3>
                        <div className="dash-inner-box">
                            <div className="circle-graph-main">
                                <h5>Federal Grants</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                            
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="circle-graph-main">
                                <h5>State Funds</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>LCFF</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="circle-graph-main">
                                <h5>Local Funds</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>Parcel Tax</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Local Foundations</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            options={{ maintainAspectRatio: false, responsive: true,tooltips: {
                                                mode: false
                                            } }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;
