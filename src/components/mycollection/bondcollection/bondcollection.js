import React, { Component } from 'react';
import {Row,Col} from 'antd';
// import { Tabs } from 'antd';
import { Button,Icon } from 'antd';
import Header from '../../../components/header/index';
// import icomImg from '../../assit/refresh.png';
import './bondcollection.css';
import Bondcollectsearch from './bondcollectsearch';
import Bondcollecttext from './bondcollecttext';


// const TabPane = Tabs.TabPane;

// function callback(key) {
//   console.log(key);
// }

class Bondcollection extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
                {/* <div>
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div>
                    <Bondcollectsearch />
                </div>
                <Col span={18} style={{marginTop:'10px'}}>
                    <div className="bondissuance-right">
                        <Row>
                            <Col span={20}>
                                <Tabs onChange={callback} type="card" className="all-tab">
                                    <TabPane tab="我收藏的债券" key="1">
                                        <Bondcollecttext/>
                                    </TabPane>
                                </Tabs>
                            </Col>
                            <Col span={2}>
                                <div className="refresh">
                                    <img src={icomImg} alt="删除" className='refresh-img'/>
                                    <span className='refresh-word'>
                                    删除
                                    </span>
                                </div>
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
                </Col> */}
                <div className="bondcollection-top">
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div className="bondcollection-mainBox">
                    <div className="bondcollection-leftBox">
                        <Bondcollectsearch />
                    </div>
                    <div className="bondcollection-rightBox">
                        <Row className='bondcollection-rightBox-title-row'>
                            <Col span={12} >
                                <div className='bondcollection-rightBox-title-span'></div>
                                <span className='bondcollection-title'>公开市场操作</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='bondcollection-rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    删除
                                </Button>
                                <Button className='bondcollection-rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Row className='bondcollection-rightBox-title-row'>
                            <Col span={24} >
                                <div className='bondcollection-rightBox-table'>
                                    <Bondcollecttext/>
                                </div> 
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="bottom" style={{backgroundColor:'yellow'}}>底部，高度40px</div>
            </div>
        )
    }
}

export default Bondcollection;