import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import intl from 'react-intl-universal';

// import {Col,Select, Row,Button,Icon } from 'antd';
import {Col,Row,} from 'antd';
// import {Button } from 'antd';
import {Icon} from 'antd';
// import { Select } from 'antd';

// import locale from 'antd/lib/date-picker/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import icomImg from '../assit/icon.png';
import icomImgone from '../assit/shouyeone.png';
// import './indexRight.css';
// moment.locale('zh-cn');
// const Option = Select.Option;
import './rightOne.css';
import RightOneRight from '../index/rightOneRight';

class RightOne extends Component{

    render(){
        return(
            <div>
                <div className="rightone-body">
                    <Row>
                        <Col span={13}>
                            <div className="rightone-body-left-one">
                                <Icon type="sound" className="rightone-body-left-one-icon"/>
                                <span className="rightone-body-left-one-text">公开市场操作</span>
                            </div>
                            <hr />
                            <Row>
                                <Col span={20}>
                                    <div className="rightone-body-left-one-news">
                                        12月9日1500亿逆回购7D发行，利率2.55，变动0BP.
                                    </div>
                                </Col>
                                <Col span={4} style={{textAlign:'right'}}>
                                    <div className="rightone-body-left-one-more">
                                        更多
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'27px',marginBottom:'37px'}}>
                                <Col span={12}>
                                    <div className="rightone-body-left-one-tableLeft">
                                        <Col span={24} className="rightone-body-left-one-tableLeft-title">
                                            <span style={{height:'21px'}}>本周操作明细</span>
                                        </Col>
                                       <table className="rightone-body-left-one-table-Left">
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Left-head">
                                               <th style={{width:'4%',textAlign:'right',height:'21px'}}></th>
                                               <th style={{width:'38%',textAlign:'left',height:'21px'}}>发行／到期</th>
                                               <th style={{width:'27%',textAlign:'right',height:'21px'}}>量</th>
                                               <th style={{width:'27%',textAlign:'right',height:'21px'}}>利率(%)</th>
                                               <th style={{width:'4%',textAlign:'right',height:'21px'}}></th>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-one-table-Left-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'38%',textAlign:'left',height:'21px'}}>逆回购7D到期</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>300</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>2.55</td>
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Left-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'38%',textAlign:'left',height:'21px'}}>逆回购7D到期</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>300</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>2.55</td>
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-one-table-Left-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'38%',textAlign:'left',height:'21px'}}>逆回购7D到期</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>300</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>2.55</td>
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Left-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'38%',textAlign:'left',height:'21px'}}>逆回购7D到期</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>300</td>
                                               <td style={{width:'27%',textAlign:'right',height:'21px'}}>2.55</td>
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                       </table>
                                    </div>
                                </Col>
                                <Col span={12} style={{paddingLeft:'15px'}}>
                                    <div className="rightone-body-left-one-tableRight">
                                        <Col span={24} className="rightone-body-left-one-tableRight-title">
                                            <span style={{height:'21px'}}>本周操作明细</span>
                                        </Col>
                                        <table className="rightone-body-left-one-table-Right">
                                            <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Right-head">
                                               <th style={{width:'4%',textAlign:'right',height:'21px'}}></th>
                                               <th style={{width:'34%',textAlign:'left',height:'21px'}}>单位(亿)</th>
                                               <th style={{width:'23%',textAlign:'right',height:'21px'}}>本周</th>
                                               <th style={{width:'28%',textAlign:'right',height:'21px'}}>前周</th>
                                               <th style={{width:'9%',textAlign:'right',height:'21px'}}></th>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-one-table-Right-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'34%',textAlign:'left',height:'21px'}}>回购</td>
                                               <td style={{width:'23%',textAlign:'right',height:'21px'}}>-3900</td>
                                               <td style={{width:'28%',textAlign:'right',height:'21px'}}>-300</td>
                                               <td style={{width:'9%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Right-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'34%',textAlign:'left',height:'21px'}}>央行发行</td>
                                               <td style={{width:'23%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'28%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'9%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-one-table-Right-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'34%',textAlign:'left',height:'21px'}}>到期</td>
                                               <td style={{width:'23%',textAlign:'right',height:'21px'}}>300</td>
                                               <td style={{width:'28%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'9%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-one-table-Right-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'34%',textAlign:'left',height:'21px'}}>逆回笼</td>
                                               <td style={{width:'23%',textAlign:'right',height:'21px'}}>-3600</td>
                                               <td style={{width:'28%',textAlign:'right',height:'21px'}}>4680</td>
                                               <td style={{width:'9%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-one-table-Right-body">
                                               <td style={{width:'4%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'34%',textAlign:'left',height:'21px'}}>其他</td>
                                               <td style={{width:'23%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'28%',textAlign:'right',height:'21px'}}>1500</td>
                                               <td style={{width:'9%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                        </table>
                                    </div>
                                </Col>
                            </Row>
                            <div className="rightone-body-left-two">
                                <span className="rightone-body-left-two-text">SHIBOR利率</span>
                            </div>
                            <hr />
                            <Row>
                                <Col span={24}>
                                    <div className="rightone-body-left-two-time">
                                        2018-09-23  9:00
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{marginTop:'10px',marginBottom:'56px'}}>
                                <Col span={12}>
                                    <div className="rightone-body-left-two-tableLeft">
                                        <Col span={24} className="rightone-body-left-two-tableLeft-title">
                                            <span style={{height:'21px'}}>SHIBOR</span>
                                        </Col>
                                       <table className="rightone-body-left-two-table-Left">
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-two-table-Left-head">
                                               <th style={{width:'15%',textAlign:'left',height:'21px'}}></th>
                                               <th style={{width:'24%',textAlign:'left',height:'21px'}}>期限</th>
                                               <th style={{width:'22%',textAlign:'right',height:'21px'}}>shibor%</th>
                                               <th style={{width:'24%',textAlign:'right',height:'21px'}}>BP</th>
                                               <th style={{width:'15%',textAlign:'left',height:'21px'}}></th>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>ON</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>-2</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>1W</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>2W</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>0</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>1M</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>1</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>3M</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>3</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-two-table-Left-body">
                                              <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>6M</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>1</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#efefef'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>9M</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>2</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                           <tr style={{backgroundColor:'#ffffff'}} className="rightone-body-left-two-table-Left-body">
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                               <td style={{width:'24%',textAlign:'left',height:'21px'}}>1Y</td>
                                               <td style={{width:'22%',textAlign:'right',height:'21px'}}>2.4750</td>
                                               <td style={{width:'24%',textAlign:'right',height:'21px'}}>2</td>
                                               <td style={{width:'15%',textAlign:'left',height:'21px'}}></td>
                                           </tr>
                                       </table>
                                    </div>
                                </Col>
                                <Col span={12} style={{paddingLeft:'15px'}}>
                                    <div className="rightone-body-left-two-tableRight">
                                        <Col span={24} className="rightone-body-left-two-tableRight-title">
                                            <img src={icomImgone} alt="图片" style={{width:'226px',height:'180px'}} />
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={11} >
                            <div className="rightone-body-right">
                                <RightOneRight />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div> 
        )
    }
}

export default RightOne;