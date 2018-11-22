import React, { Component } from 'react';

// import {Col,Row,} from 'antd';
import { Tabs } from 'antd';
import './rightThree.css';
import RightThreeTableOne from '../index/rightThreeTableOne';
import RightThreeTableTwo from '../index/rightThreeTableTwo';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class RightThree extends Component{

    render(){
        return(
            <div>
                <div className="rightthree-body">
                    <Tabs onChange={callback} type="card" className="rightthree-body-tab">
                        <TabPane tab="赎回" key="1">
                            <RightThreeTableOne />
                        </TabPane>
                        <TabPane tab="回售" key="2">
                            <RightThreeTableTwo />
                        </TabPane>
                    </Tabs>
                </div>
            </div> 
        )
    }
}

export default RightThree;