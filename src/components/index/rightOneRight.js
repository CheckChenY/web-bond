import React, { Component } from 'react';
// import {Col,Select, Row,Button,Icon } from 'antd';
import {Col,Row,} from 'antd';

import './rightOneRight.css';

class RightOneRight extends Component{

    render(){
        return(
            <div style={{marginLeft:'15px'}}>
                <Row style={{}}>
                    <Col span={24}>
                        <div className="rightone-body-right-one">
                            <span className="rightone-body-right-one-text">贷款基础利率LPR</span>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row style={{marginBottom:'33px'}}>
                    <Col span={24}>
                        <div>
                            <table className="rightone-body-right-one-table">
                                <tr className="rightone-body-right-one-table-head" >
                                    <th style={{width:'2%',textAlign:'left',height:'25px'}}></th>
                                    <th style={{width:'5%',textAlign:'left',height:'25px'}}>LPR</th>
                                    <th style={{width:'28%',textAlign:'right',height:'25px'}}>2018-11-14</th>
                                    <th style={{width:'19%',textAlign:'right',height:'25px'}}>5日均值</th>
                                    <th style={{width:'22%',textAlign:'right',height:'25px'}}>10日均值</th>
                                    <th style={{width:'22%',textAlign:'right',height:'25px'}}>20日均值</th>
                                    <th style={{width:'2%',textAlign:'left',height:'25px'}}></th>
                                </tr>
                                <tr className="rightone-body-right-one-table-body">
                                    <td style={{width:'2%',textAlign:'left',height:'25px'}}></td>
                                    <td style={{width:'5%',textAlign:'left',height:'25px'}}>1Y</td>
                                    <td style={{width:'28%',textAlign:'right',height:'25px'}}>4.31</td>
                                    <td style={{width:'19%',textAlign:'right',height:'25px'}}>4.31</td>
                                    <td style={{width:'22%',textAlign:'right',height:'25px'}}>4.31</td>
                                    <td style={{width:'22%',textAlign:'right',height:'25px'}}>4.31</td>
                                    <td style={{width:'2%',textAlign:'left',height:'25px'}}></td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="rightone-body-right-two">
                            <span className="rightone-body-right-two-text">回购定盘利率</span>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row style={{marginBottom:'13px'}}>
                    <Col span={24}>
                        <div className="rightone-body-right-two-time">
                            更新时间: 2018-11-13 11:30
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom:'30px'}}>
                    <Col span={24}>
                        <div>
                            <table className="rightone-body-right-two-table">
                                <tr className="rightone-body-right-two-table-head">
                                    <th style={{width:'5%',textAlign:'left',height:'25px'}}></th>
                                    <th style={{width:'20%',textAlign:'left',height:'25px'}}>品种</th>
                                    <th style={{width:'30%',textAlign:'center',height:'25px'}}>期限（天）</th>
                                    <th style={{width:'40%',textAlign:'right',height:'25px'}}>回购定盘利率（%）</th>
                                    <th style={{width:'5%',textAlign:'left',height:'25px'}}></th>
                                </tr>
                                <tr className="rightone-body-right-two-table-body">
                                    <td style={{width:'5%',textAlign:'left',height:'25px'}}></td>
                                    <td style={{width:'20%',textAlign:'left',height:'25px'}}>FR001</td>
                                    <td style={{width:'30%',textAlign:'center',height:'25px'}}>1</td>
                                    <td style={{width:'40%',textAlign:'right',height:'25px'}}>2.4800</td>
                                    <td style={{width:'5%',textAlign:'left',height:'25px'}}></td>
                                </tr>
                                <tr className="rightone-body-right-two-table-body">
                                    <td style={{width:'5%',textAlign:'left',backgroundColor:'#f9f9f9',height:'25px'}}></td>
                                    <td style={{width:'20%',textAlign:'left',backgroundColor:'#f9f9f9',height:'25px'}}>FR007</td>
                                    <td style={{width:'30%',textAlign:'center',backgroundColor:'#f9f9f9',height:'25px'}}>2-7</td>
                                    <td style={{width:'40%',textAlign:'right',backgroundColor:'#f9f9f9',height:'25px'}}>2.6500</td>
                                    <td style={{width:'5%',textAlign:'left',backgroundColor:'#f9f9f9',height:'25px'}}></td>
                                </tr>
                                <tr className="rightone-body-right-two-table-body">
                                    <td style={{width:'5%',textAlign:'left',height:'25px'}}></td>
                                    <td style={{width:'20%',textAlign:'left',height:'25px'}}>FR014</td>
                                    <td style={{width:'30%',textAlign:'center',height:'25px'}}>6-14</td>
                                    <td style={{width:'40%',textAlign:'right',height:'25px'}}>2.6300</td>
                                    <td style={{width:'5%',textAlign:'left',height:'25px'}}></td>
                                </tr>
                            </table>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="rightone-body-right-three">
                            <span className="rightone-body-right-three-text">央行存款利率</span>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row style={{marginBottom:'11px'}}>
                    <Col span={24}>
                        <div className="rightone-body-right-three-time">
                            更新时间: 2018-11-13 11:30
                        </div>
                    </Col>
                </Row>
                <Row style={{marginBottom:'30px'}}>
                    <Col span={24}>
                            <div>
                                <table className="rightone-body-right-three-table">
                                    <tr className="rightone-body-right-three-table-head">
                                        <th style={{width:'5%',textAlign:'center',height:'25px'}}></th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>3M</th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>6M</th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>1Y</th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>2Y</th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>3Y</th>
                                        <th style={{width:'15%',textAlign:'center',height:'25px'}}>5Y</th>
                                        <th style={{width:'5%',textAlign:'center',height:'25px'}}></th>
                                    </tr>
                                    <tr className="rightone-body-right-three-table-body">
                                        <td style={{width:'5%',textAlign:'center',height:'25px'}}></td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>1.10</td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>1.30</td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>1.50</td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>2.10</td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>2.75</td>
                                        <td style={{width:'15%',textAlign:'center',height:'25px'}}>4.31</td>
                                        <td style={{width:'5%',textAlign:'center',height:'25px'}}></td>
                                    </tr>
                                </table>
                            </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="rightone-body-right-four">
                            <span className="rightone-body-right-four-text">央行贷款利率</span>
                        </div>
                        <hr />
                    </Col>
                </Row>
                <Row style={{marginBottom:'11px'}}>
                    <Col span={24}>
                        <div className="rightone-body-right-four-time">
                            更新时间: 2018-11-13 11:30
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                            <div>
                                <table className="rightone-body-right-four-table">
                                    <tr className="rightone-body-right-four-table-head" >
                                        <th style={{width:'5%',textAlign:'center',height:'25px'}}></th>
                                        <th style={{width:'18%',textAlign:'center',height:'25px'}}>6M</th>
                                        <th style={{width:'18%',textAlign:'center',height:'25px'}}>1M</th>
                                        <th style={{width:'18%',textAlign:'center',height:'25px'}}>1Y~3Y</th>
                                        <th style={{width:'18%',textAlign:'center',height:'25px'}}>3Y~5Y</th>
                                        <th style={{width:'18%',textAlign:'center',height:'25px'}}>5Y以上</th>
                                        <th style={{width:'5%',textAlign:'center',height:'25px'}}></th>
                                    </tr>
                                    <tr className="rightone-body-right-four-table-body">
                                        <td style={{width:'5%',textAlign:'center',height:'25px'}}></td>
                                        <td style={{width:'18%',textAlign:'center',height:'25px'}}>1.10</td>
                                        <td style={{width:'18%',textAlign:'center',height:'25px'}}>1.30</td>
                                        <td style={{width:'18%',textAlign:'center',height:'25px'}}>1.50</td>
                                        <td style={{width:'18%',textAlign:'center',height:'25px'}}>1.50</td>
                                        <td style={{width:'18%',textAlign:'center',height:'25px'}}>4.31</td>
                                        <td style={{width:'5%',textAlign:'center',height:'25px'}}></td>
                                    </tr>
                                </table>
                            </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default RightOneRight;