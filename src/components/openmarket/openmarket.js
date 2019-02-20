import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { Tabs } from 'antd';
import { Button,Icon } from 'antd';
import Header from '../../components/header/index';
import Leftsearch from '../openmarket/leftsearch';
import './openmarket.css';
import Cyclestatistics from './cyclestatistics';
import Totalallmoney from './totalallmoney';
import Fulldetails from './fulldetails';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class Openmarket extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    render(){
        return(
            <div>
                <div className="openmarket-top">
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div className="openmarket-mainBox">
                    <div className="openmarket-leftBox">
                        <Leftsearch />
                    </div>
                    <div className="openmarket-rightBox">
                        <Row className='openmarket-rightBox-title-row'>
                            <Col span={12} >
                                <div className='openmarket-rightBox-title-span'></div>
                                <span className='openmarket-title'>公开市场操作</span>
                            </Col>
                            <Col span={12} style={{textAlign:'right', paddingRight:'18px'}}>
                                <Button className='openmarket-rightBox-refresh-button'>
                                    <Icon type="reload" style={{color:'#3287ff', height:'14px',width:'14px'}} />
                                    刷新
                                </Button>
                            </Col>
                        </Row>
                        <Tabs onChange={callback} type="card" className="">
                            <TabPane tab="周期统计" key="1">
                                <Cyclestatistics/>
                            </TabPane>
                            <TabPane tab="期间资金投放总额" key="2">
                                <Totalallmoney/>
                            </TabPane>
                            <TabPane tab="期间全部明细" key="3">
                                <Fulldetails/>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
                <div className="bottom" style={{backgroundColor:'yellow'}}>底部，高度40px</div>
            </div>
        )
    }
}

export default Openmarket;