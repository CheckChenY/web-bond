import React, { Component } from 'react';

// import {Col,Row,} from 'antd';
import { Tabs } from 'antd';
import './rightSeven.css';
import RightSevenTableOne from '../index/rightSevenTableOne';
import RightSevenTableTwo from '../index/rightSevenTableTwo';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class RightSeven extends Component{

    render(){
        return(
            <div>
                <div className="rightseven-body">
                    <Tabs onChange={callback} type="card" className="rightseven-body-tab">
                        <TabPane tab="缴款上市" key="1">
                            <RightSevenTableOne />
                        </TabPane>
                        <TabPane tab="续发缴款" key="2">
                            <RightSevenTableTwo />
                        </TabPane>
                    </Tabs>
                </div>
            </div> 
        )
    }
}

export default RightSeven;