import React, { Component } from 'react';

// import {Col,Row,} from 'antd';
import { Tabs } from 'antd';
import './rightTwo.css';
import RightTwoTableOne from '../index/rightTwoTableOne';
import RightTwoTableTwo from '../index/rightTwoTableTwo';
import RightTwoTableThree from '../index/rightTwoTableThree';
import RightTwoTableFour from '../index/rightTwoTableFour';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

class RightTwo extends Component{

    render(){
        return(
            <div>
                <div className="righttwo-body">
                    {/* <Row>
                        <Col span={24}>
                           
                        </Col>
                    </Row> */}
                    <Tabs onChange={callback} type="card" className="righttwo-body-tab">
                        <TabPane tab="国债、政策性银行债" key="1">
                            {/* <Nationalbankdebt/> */}
                            <RightTwoTableOne />
                        </TabPane>
                        <TabPane tab="同业存单发行" key="2">
                            {/* <Negotiablecertificatedeposit/> */}
                            <RightTwoTableTwo />
                        </TabPane>
                        <TabPane tab="信用债发行" key="3">
                            {/* <Creditissuance/> */}
                            <RightTwoTableThree />
                        </TabPane>
                        <TabPane tab="地方政府债" key="4">
                            {/* <Localgovernmentdebt/> */}
                            <RightTwoTableFour />
                        </TabPane>
                    </Tabs>
                </div>
            </div> 
        )
    }
}

export default RightTwo;