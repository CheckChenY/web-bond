import React, { Component } from 'react';
import {Row,Col,Button, Icon} from 'antd';
import { Tabs } from 'antd';
import Header from '../../components/header/index';
import Searchcondition from '../bondinformation/searchcondition';
// import icomImg from '../assit/refresh.png';
import './paymentinterest.css';
import Interestpayment from './paymentinterest/interestpayment';
import Principalrepaymentexpire from './paymentinterest/principalrepaymentexpire';
import Principalrepaymentadvance from './paymentinterest/principalrepaymentadvance';
import Footer from '../footer';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Paymentinterest extends Component{

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
                                <span className='payment-interest-title'>付息对付</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Tabs onChange={callback} type="card" className="payment-interest-tab">
                            <TabPane tab="到期还本" key="1">
                                <Principalrepaymentexpire/>
                            </TabPane>
                            <TabPane tab="提前还本" key="2">
                                <Principalrepaymentadvance/>
                            </TabPane>
                            <TabPane tab="付息" key="3">
                                <Interestpayment/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom">
                    <Footer currentname='付息对付'/>
                </div>
            </div>
        )
    }
}

export default Paymentinterest;