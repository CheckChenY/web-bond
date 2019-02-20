import React, { Component } from 'react';

// import {Col,Row,} from 'antd';
import { Tabs } from 'antd';
import './rightFour.css';
import RightFourTableOne from '../index/rightFourTableOne';
import RightFourTableTwo from '../index/rightFourTableTwo';
import RightFourTableThree from '../index/rightFourTableThree';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class RightFour extends Component{

    render(){
        return(
            <div>
                <div className="rightfour-body">
                    <Tabs onChange={callback} type="card" className="rightfour-body-tab">
                        <TabPane tab="到期还本" key="1">
                            <RightFourTableOne />
                        </TabPane>
                        <TabPane tab="提前还本" key="2">
                            <RightFourTableTwo />
                        </TabPane>
                        <TabPane tab="付息" key="3">
                            <RightFourTableThree />
                        </TabPane>
                    </Tabs>
                </div>
            </div> 
        )
    }
}

export default RightFour;