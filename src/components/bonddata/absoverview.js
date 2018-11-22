import React, { Component } from 'react';
import {Row, Col, Anchor} from 'antd';
// import { Tabs } from 'antd';

import Header from '../../components/header/index';
import './absoverview.css';
import Assetsecuritizationproject from './absoverview/assetsecuritizationproject';
import Trendanalysis from './absoverview/trendanalysis';
import Projectapproval from './absoverview/projectapproval';
import Databackup from './absoverview/databackup';
import Transactiondetail from './absoverview/transactiondetail';
import Distributionstatistics from './absoverview/distributionstatistics';
import Stockstatistics from './absoverview/stockstatistics';
import Institutestatistical from './absoverview/institutestatistical';
import Footer from '../footer';

// const TabPane = Tabs.TabPane;
const { Link } = Anchor;

function callback(key) {
  console.log(key);
} 

class Absoverview extends Component{

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
                            <Col span={4} style={{background:'#ffffff', position:'fixed',top:'60px'}}>
                                <div style={{height:'40px', lineHeight:'40px'}}>
                                    <div className='absoverview-title-span'></div>
                                    <span className='absoverview-title'>ABS债券总览</span>
                                </div>
                                <Anchor affix={true} offsetTop={100} onClick={callback} className='absover-view-anchor' >
                                    <Link href="#assetsecuritizationproject" title="最新发行的资产证券化项目" />
                                    <Link href="#trendanalysis" title="分层证券票息趋势分析" />
                                    <Link href="#projectapproval" title="资产证券化项目审批" />
                                    <Link href="#databackup" title="资产证券化备案数据" />
                                    <Link href="#transactiondetail" title="二级市场成交明细数据" />
                                    <Link href="#distributionstatistics" title="发行统计" />
                                    <Link href="#stockstatistics" title="存量统计" />
                                    <Link href="#institutestatistical" title="机构统计" />
                                </Anchor>
                            </Col>
                            <Col span={4}/>
                            <Col span={20} style={{paddingLeft:'10px', marginTop:'50px'}}>
                                <div id="assetsecuritizationproject">
                                    <Assetsecuritizationproject/>
                                </div>
                                <div id="trendanalysis">
                                    <Trendanalysis/>   
                                </div>
                                <div id="projectapproval">
                                    <Projectapproval/> 
                                </div>
                                <div id="databackup">
                                    <Databackup/>
                                </div>
                                <div id="transactiondetail">
                                    <Transactiondetail/>
                                </div>
                                <div id="distributionstatistics">
                                    <Distributionstatistics/>
                                </div>
                                <div id="stockstatistics">
                                    <Stockstatistics/>
                                </div>
                                <div id="institutestatistical">
                                    <Institutestatistical/>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div style={{background:'#f2f2f2', position:'fixed', bottom:'0',height:'30px', width:'100%',zIndex:'100'}}>
                    <Footer currentname='abs债卷总览' />
                </div>
            </div>
        )
    }
}

export default Absoverview;