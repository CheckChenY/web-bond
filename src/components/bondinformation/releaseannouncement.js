import React, { Component } from 'react';
import {Row, Col, Button, Icon} from 'antd';
import { Tabs } from 'antd';
import Header from '../../components/header/index';
import Searchcondition from '../bondinformation/searchcondition';
// import icomImg from '../assit/refresh.png';
import './releaseannouncement.css';
import Releaseannouncementtable from './releaseannouncement/releaseannouncementtable';
import Footer from '../footer';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Releaseannouncement extends Component{

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
                                <span className='release-announcement-title'>发行公告</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>                        
                        <Tabs onChange={callback} type="card" className="release-announcement-tab">
                            <TabPane tab="发行公告" key="1">
                                <Releaseannouncementtable/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom">
                    <Footer currentname='发行公告'/>
                </div>
            </div>
        )
    }
}

export default Releaseannouncement;