import React, { Component } from 'react';
class Resources extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
               <div className="col-md-3 col-sm-3">
                    <div className="dash-main-box">
                        <h3>Resources <a href="#"><i className="fa fa-pencil"></i></a></h3>
                        <div className="dash-inner-box">
                            <div className="circle-graph-main">
                                <h5>Federal Grants</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr1.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr2.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr3.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr4.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr5.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr6.png"/>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="circle-graph-main">
                                <h5>State Funds</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>LCFF</h6>
                                        <img src="/img/gr3.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr4.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr5.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr6.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr1.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr2.png"/>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="circle-graph-main">
                                <h5>Local Funds</h5>
                                <div className="circle-graph-box" id="style-2">
                                    <div className="circle-graph-box-inner">
                                        <h6>Parcel Tax</h6>
                                        <img src="/img/gr5.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Local Foundations</h6>
                                        <img src="/img/gr6.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr1.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr2.png"/>
                                    </div>
                                    
                                    <div className="circle-graph-box-inner">
                                        <h6>Title I</h6>
                                        <img src="/img/gr3.png"/>
                                    </div>

                                    <div className="circle-graph-box-inner">
                                        <h6>Title II A</h6>
                                        <img src="/img/gr4.png"/>
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
