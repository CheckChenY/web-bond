import React, { Component } from 'react';
import {Row, Col, Button, Icon } from 'antd';
import { Tabs } from 'antd';
import Header from '../../components/header/index';
import Searchcondition from '../bondinformation/searchcondition';
// import icomImg from '../assit/refresh.png';
import './creditrisk.css';
import Highrating from './creditrisk/highrating';
import Lowerrating from './creditrisk/lowerrating';
import Footer from '../footer';



const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Creditrisk extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
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
                                <span className='credit-risk-title'>信用风险</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Tabs onChange={callback} type="card" className="credit-risk-tab">
                            <TabPane tab="评级调高" key="1">
                                <Highrating/>
                            </TabPane>
                            <TabPane tab="评级调低" key="2">
                                <Lowerrating/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom">
                    <Footer currentname='信用风险'/>
                </div>
            </div>
        )
    }
}

export default Creditrisk;