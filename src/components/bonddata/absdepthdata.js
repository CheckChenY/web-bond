import React, { Component } from 'react';
import { Row, Col, Anchor} from 'antd';
// import { Tabs } from 'antd';

import Header from '../../components/header/index';
import './absdepthdata.css';
import Basiccondition from './depthdata/basiccondition';
import Issuance from './depthdata/issuance';
import Creditrating from './depthdata/creditrating';
import Issuerinformation from './depthdata/issuerinformation';
import Institutionalinvestor from './depthdata/institutionalinvestor';
import Assetpooldetail from './depthdata/assetpooldetail';
import Cashflow from './depthdata/cashflow';
import Footer from '../footer';

// const TabPane = Tabs.TabPane;

const { Link } = Anchor;

function callback(key) {
  console.log(key);
} 

class Absdepthdata extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
                <div style={{background:'#f2f2f2', position:'fixed', width:'100%',zIndex:'100'}}>
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div style={{padding:'10px 10px', background:'#f2f2f2',marginBottom:'30px'}}>
                    <Row>
                        <Col span={4} style={{background:'#ffffff',position:'fixed',top:'60px'}}>
                            <div style={{height:'40px', lineHeight:'40px'}}>
                                <div className='abs-depth-data-title-span'></div>
                                <span className='abs-depth-data-title'>深度资料</span>
                            </div>
                            <Anchor affix={true} offsetTop={100} onClick={callback} className='abs-depth-data-anchor' >
                                <Link href="#basiccondition" title="基本条款" />
                                <Link href="#issuance" title="发行情况" />
                                <Link href="#creditrating" title="信用评级" />
                                <Link href="#issuerinformation" title="发行人资料" />
                                <Link href="#institutionalinvestor" title="机构投资者" />
                                <Link href="#assetpooldetail" title="资产池详情" />
                                <Link href="#cashflow" title="现金流" />
                            </Anchor>
                        </Col>
                        <Col span={4}/>
                        <Col span={20} style={{paddingLeft:'10px', marginTop:'50px'}}>
                            <div id="basiccondition">
                                <Basiccondition/>
                            </div>
                            <div id="issuance">
                                <Issuance/>
                            </div>
                            <div id="creditrating">
                                <Creditrating/>
                            </div>
                            <div id="issuerinformation">
                                <Issuerinformation/>
                            </div>
                            <div id="institutionalinvestor">
                                <Institutionalinvestor/>
                            </div>
                            <div id="assetpooldetail">
                                <Assetpooldetail/>
                            </div>
                            <div id="cashflow">
                                <Cashflow/>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{background:'#f2f2f2', position:'fixed', bottom:'0',height:'30px', width:'100%',zIndex:'100'}}>
                    <Footer currentname='xxxxxx深度资料'/>
                </div> 
            </div>
        )
    }
}

export default Absdepthdata;