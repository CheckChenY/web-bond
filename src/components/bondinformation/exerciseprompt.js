import React, { Component } from 'react';
import {Row, Col, Button, Icon} from 'antd';
import { Tabs } from 'antd';
import Header from '../../components/header/index';
import Searchcondition from '../bondinformation/searchcondition';
// import icomImg from '../assit/refresh.png';
import './exerciseprompt.css';
import Redemption from './exerciseprompt/redemption';
import Putback from './exerciseprompt/putback';
import Footer from '../footer';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Exerciseprompt extends Component{

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
                                <span className='exercise-prompt-title'>行权提示</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Tabs onChange={callback} type="card" className="exercise-prompt-tab">
                            <TabPane tab="赎回" key="1">
                                <Redemption/>
                            </TabPane>
                            <TabPane tab="回售" key="2">
                                <Putback/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom">
                    <Footer currentname='行权提示'/>
                </div>
            </div>
        )
    }
}

export default Exerciseprompt;