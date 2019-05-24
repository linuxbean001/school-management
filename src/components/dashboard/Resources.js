import React, { Component } from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';
class Resources extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
            chart: ''
        }
    }
    componentWillMount() {
        this.getChartData();
    }
    getChartData() {
        const originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
        Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
            draw: function () {
                originalDoughnutDraw.apply(this, arguments);

                const chart = this.chart.chart;
                const ctx = chart.ctx;
                const width = chart.width;
                const height = chart.height;

                const fontSize = (height / 350).toFixed(2);
                ctx.font = fontSize + "em Verdana";
                ctx.textBaseline = "middle";

                const text = chart.config.data.text,
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 2;

                ctx.fillText(text, textX, textY);
            }
        });
        this.setState({
            chartData: {
                labels: ['Title1', 'Title2', 'Title3'],
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

                        ],
                        // hoverBackgroundColor: [
                        //     '#FF6384',
                        //     '#36A2EB',
                        //     '#FFCE56'
                        // ]
                    }
                ],
                text: '$135.2K'
            },
            chartData2: {
                labels: ['Title1', 'Title2', 'Title3'],
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
                ],
                text: '$13.2K'
            },
            chartData3: {
                labels: ['Title1', 'Title2', 'Title3'],
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
                ],
                text: '$15.2K'
            }
        });
    }
    render() {

        return (
            <>
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
                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}

                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
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

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData2}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
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

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Local Foundations</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <Doughnut
                                            ref={(reference) => this.chartReference = reference}
                                            data={this.state.chartData3}

                                            width={250}
                                            height={250}
                                            options={{
                                                legend: {
                                                    display: false
                                                },
                                                maintainAspectRatio: false,
                                                responsive: true,
                                                cutoutPercentage: 60,
                                            }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Resources;
