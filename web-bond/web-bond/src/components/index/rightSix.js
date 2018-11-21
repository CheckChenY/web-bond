import React, { Component } from 'react';

// import {Col,Row,} from 'antd';
import { Tabs } from 'antd';
import './rightSix.css';
import RightSixTableOne from '../index/rightSixTableOne';
import RightSixTableTwo from '../index/rightSixTableTwo';

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class RightSix extends Component{

    render(){
        return(
            <div>
                <div className="rightsix-body">
                    <Tabs onChange={callback} type="card" className="rightsix-body-tab">
                        <TabPane tab="评级调高" key="1">
                            <RightSixTableOne />
                        </TabPane>
                        <TabPane tab="评级调低" key="2">
                            <RightSixTableTwo />
                        </TabPane>
                    </Tabs>
                </div>
            </div> 
        )
    }
}

export default RightSix;