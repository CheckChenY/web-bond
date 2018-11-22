import React, { Component } from 'react';
import {Row, Col, Button } from 'antd';
import { Tabs } from 'antd';
import {Icon} from 'antd';

import Header from '../../components/header/index';
import Searchcondition from '../bondinformation/searchcondition';
// import icomImg from '../assit/refresh.png';
import './bondissuance.css';
import Negotiablecertificatedeposit from './bondissuance/negotiablecertificatedeposit';
import Creditissuance from './bondissuance/creditissuance';


// import Payment from './bondissuance/payment';

import Nationalbankdebt from './bondissuance/nationalbankdebt';
import Localgovernmentdebt from './bondissuance/localgovernmentdebt';
import Footer from '../footer';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Bondissuance extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div >
                {/* <div>
                    <Header01 onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div style={{background:'#f2f2f2', padding:'10px'}}>
                    <Row>
                        <Col span={6}>
                            <Searchcondition />
                        </Col>
                        <Col span={18} style={{marginTop:'10px'}}>
                            <div className="bondissuance-right">
                                <Row>
                                    <Col span={22}>
                                        <Tabs onChange={callback} type="card" className="all-tab">
                                            <TabPane tab="利率债招标" key="1">
                                                <Interestratedebtbid/>
                                            </TabPane>
                                            <TabPane tab="同业存单发行" key="2">
                                                <Negotiablecertificatedeposit/>
                                            </TabPane>
                                            <TabPane tab="信用债发行" key="3">
                                                <Creditissuance/>
                                            </TabPane>
                                            <TabPane tab="缴款" key="4">
                                                <Payment/>
                                            </TabPane>
                                        </Tabs>
                                    </Col>
                                    <Col span={2}>
                                        <div className="refresh">
                                            <img src={icomImg} alt="刷新" className='refresh-img'/>
                                            <span className='refresh-word'>
                                                刷新
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div> */}
                <div className="top">
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div className="mainBox">
                    <div className="leftBox">
                        <Searchcondition />
                    </div>
                    <div className="rightBox">
                        <Row className='rightBox-title-row'>
                            <Col span={12} >
                                <div className='rightBox-title-span'></div>
                                <span className='bond-issuance-title'>债券发行</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Tabs onChange={callback} type="card" className="bond-issuance-tab">
                            <TabPane tab="国债、政策性银行债" key="1">
                                <Nationalbankdebt/>
                            </TabPane>
                            <TabPane tab="同业存单发行" key="2">
                                <Negotiablecertificatedeposit/>
                            </TabPane>
                            <TabPane tab="信用债发行" key="3">
                                <Creditissuance/>
                            </TabPane>
                            <TabPane tab="地方政府债" key="4">
                                {/* <Payment/> */}
                                <Localgovernmentdebt/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom">
                    <Footer currentname='债券发行'/>
                </div>
            </div>
        )
    }
}

export default Bondissuance;