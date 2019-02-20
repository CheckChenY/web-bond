import React, { Component } from 'react';
import {Row,Col} from 'antd';
// import { Tabs } from 'antd';

import Header from '../../../components/header/index';
import icomImgone from '../../assit/refresh.png';
import icomImgtwo from '../../assit/icon.png';
import icomImgthree from '../../assit/formone.png';
import icomImgfour from '../../assit/formtwo.png';

import './bonddetails.css';

class Bonddetails extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
                <div>
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <Col span={24} className="bonddetails-top-all">
                    <div className="bonddetails-top">
                        <div className="bonddetails-top-head">
                            <Row>
                                <Col span={24}>
                                    <span className="bonddetails-title-one">13国债11</span>
                                    <span className="bonddetails-title-two">019311</span>
                                    <span className="bonddetails-title-three">
                                        <img src={icomImgone} alt="爱心" className='heart-img'/>
                                        收藏
                                    </span>
                                </Col>
                            </Row>
                        </div>
                        <div className="bonddetails-top-body">
                            <Row>
                                <Col span={15}>
                                    <table className="bonddetails-body-left">
                                        <tbody>
                                            <tr>
                                                <th className="bonddetails-table-title-one-top">债券全称</th>
                                                <td className="bonddetails-table-text-one-top">2013 年记账式附息(11期)国债</td>
                                                <th className="bonddetails-table-title-two-top">发行价</th>
                                                <td className="bonddetails-table-text-two-top">100元</td>
                                                <th className="bonddetails-table-title-three-top">交易市场</th>
                                                <td className="bonddetails-table-text-three-top">上海证券交易所</td>
                                            </tr>
                                            <tr>
                                                <th className="bonddetails-table-title-one">发行量</th>
                                                <td className="bonddetails-table-text-one">900亿元</td>
                                                <th className="bonddetails-table-title-two">发行票面利率</th>
                                                <td className="bonddetails-table-text-two">3.38%</td>
                                                <th className="bonddetails-table-title-three">发行起始日</th>
                                                <td className="bonddetails-table-text-three">2013-05-22</td>
                                            </tr>
                                            <tr>
                                                <th className="bonddetails-table-title-one">期限</th>
                                                <td className="bonddetails-table-text-one">10年</td>
                                                <th className="bonddetails-table-title-two">剩余期限</th>
                                                <td className="bonddetails-table-text-two">1658天</td>
                                                <th className="bonddetails-table-title-three">付息方式</th>
                                                <td className="bonddetails-table-text-three">周期性付息</td>
                                            </tr>
                                            <tr>
                                                <th className="bonddetails-table-title-one">起息日期</th>
                                                <td className="bonddetails-table-text-one">2013-05-23</td>
                                                <th className="bonddetails-table-title-two">币种</th>
                                                <td className="bonddetails-table-text-two">人名币</td>
                                                <th className="bonddetails-table-title-three">每年付息日</th>
                                                <td className="bonddetails-table-text-three">05-23，11-23</td>
                                            </tr>
                                            <tr>
                                                <th className="bonddetails-table-title-one-bottom">到期日期</th>
                                                <td className="bonddetails-table-text-one-bottom">2023-05-23</td>
                                                <th className="bonddetails-table-title-two-bottom">计息方式</th>
                                                <td className="bonddetails-table-text-two-bottom">固定利率</td>
                                                <th className="bonddetails-table-title-three-bottom"></th>
                                                <td className="bonddetails-table-text-three-bottom"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Col>
                                <Col span={9} style={{borderLeft:'1px solid #e0e0e0'}}>
                                    <Row>
                                        <Col span={1}></Col>
                                        <Col span={23} style={{paddingRight:'30px',marginTop:'-15px'}}>
                                            <Row>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={4} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                            </Row>
                                            <Row style={{paddingBottom:'20px'}}>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>行情</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>深度资料</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>债券收藏</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>基本条款</span>
                                                </Col>
                                                <Col span={4} style={{textAlign:'center'}}>
                                                    <span>发行情况</span>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                                <Col span={4} style={{textAlign:'center'}}>
                                                    <img src={icomImgtwo} alt="图标" className='img'/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>信用评级</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>发行人资料</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>机构投资者</span>
                                                </Col>
                                                <Col span={5} style={{textAlign:'center'}}>
                                                    <span>资产池详情</span>
                                                </Col>
                                                <Col span={4} style={{textAlign:'center'}}>
                                                    <span>现金流</span>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col span={24} style={{marginTop:'10px'}}>
                    <div className="bonddetails-bottom">
                        <Row>
                            <Col span={19} className="bonddetails-bottom-left-all">
                                <div className="bonddetails-bottom-left">
                                    <Row>
                                        <Col span={24}>
                                            <span>行情</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <img src={icomImgthree} alt="图一" className='img'/>
                                        </Col>
                                        <Col span={12}>
                                            <img src={icomImgfour} alt="图二" className='img'/>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={5} className="bonddetails-bottom-right-all">
                                <div className="bonddetails-bottom-right">
                                    <Row>
                                        <Col span={24} style={{paddingBottom:'3px'}}>
                                            <span>行情报价</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={6} style={{paddingLeft:'11px'}}>
                                            <span>委比</span>
                                        </Col>
                                        <Col span={6}>
                                            <span>96.19%</span>
                                        </Col>
                                        <Col span={6} style={{paddingLeft:'11px'}}>
                                            <span>委差</span>
                                        </Col>
                                        <Col span={6}>
                                            <span>9819</span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={24}>
                                            <table className="bonddetails-bottom-right-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖五</td>
                                                        <td className="bonddetails-bottom-table-one-midd">—</td>
                                                        <td className="bonddetails-bottom-table-one-down">—</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-two">卖四</td>
                                                        <td className="bonddetails-bottom-table-two-midd">107.88</td>
                                                        <td className="bonddetails-bottom-table-two-down">100</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖三</td>
                                                        <td className="bonddetails-bottom-table-one-midd">105.55</td>
                                                        <td className="bonddetails-bottom-table-one-down">55</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-two">卖二</td>
                                                        <td className="bonddetails-bottom-table-two-midd">101.50</td>
                                                        <td className="bonddetails-bottom-table-two-down">44</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖一</td>
                                                        <td className="bonddetails-bottom-table-one-midd">101.49</td>
                                                        <td className="bonddetails-bottom-table-one-down">5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <hr style={{width:'220px'}}/>
                                            <table className="bonddetails-bottom-right-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖一</td>
                                                        <td className="bonddetails-bottom-table-one-midd">100.06</td>
                                                        <td className="bonddetails-bottom-table-one-down">9956</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-two">卖二</td>
                                                        <td className="bonddetails-bottom-table-two-midd">107.88</td>
                                                        <td className="bonddetails-bottom-table-two-down">100</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖三</td>
                                                        <td className="bonddetails-bottom-table-one-midd">105.55</td>
                                                        <td className="bonddetails-bottom-table-one-down">50</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-two">卖四</td>
                                                        <td className="bonddetails-bottom-table-two-midd">101.50</td>
                                                        <td className="bonddetails-bottom-table-two-down">44</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bonddetails-bottom-table-one">卖五</td>
                                                        <td className="bonddetails-bottom-table-one-midd">101.49</td>
                                                        <td className="bonddetails-bottom-table-one-down">5</td>
                                                    </tr>
                                                    </tbody>
                                            </table>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </div>
        )
    }
}

export default Bonddetails;