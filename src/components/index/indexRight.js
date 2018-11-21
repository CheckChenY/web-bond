import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import intl from 'react-intl-universal';

// import {Col,Select, Row,Button,Icon } from 'antd';
import {Col,Row,} from 'antd';
import {Button} from 'antd';
// import {Icon} from 'antd';
// import { Select } from 'antd';

// import locale from 'antd/lib/date-picker/locale/zh_CN';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
// import icomImg from '../assit/refresh.png';
import './indexRight.css';
// moment.locale('zh-cn');
// const Option = Select.Option;

import RightOne from '../index/rightOne';
import RightTwo from '../index/rightTwo';
import RightThree from '../index/rightThree';
import RightFour from '../index/rightFour';
import RightFive from '../index/rightFive';
import RightSix from '../index/rightSix';
import RightSeven from '../index/rightSeven';

class IndexRight extends Component{

    render(){
        return(
            <Col span={18}>
            <div>
                <div className="indexRight-one">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-one-header-solid-line">&nbsp;</span>
                            <span className="indexRight-one-header-solid">&nbsp;&nbsp;利率总览</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-one-body">
                    <Row>
                        <RightOne />
                    </Row>
                </div>
                <div className="indexRight-two">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-two-header-solid-line">&nbsp;</span>
                            <span className="indexRight-two-header-solid">&nbsp;&nbsp;今日债券阅览</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-two-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-two-body">
                    <Row>
                        <RightTwo />
                    </Row>
                </div>
                <div className="indexRight-three">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-three-header-solid-line">&nbsp;</span>
                            <span className="indexRight-three-header-solid">&nbsp;&nbsp;今日行权提示</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-three-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-three-body">
                    <Row>
                        <RightThree />
                    </Row>
                </div>
                <div className="indexRight-four">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-four-header-solid-line">&nbsp;</span>
                            <span className="indexRight-four-header-solid">&nbsp;&nbsp;今日付息兑付</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-four-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-four-body">
                    <Row>
                        <RightFour />
                    </Row>
                </div>
                <div className="indexRight-five">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-five-header-solid-line">&nbsp;</span>
                            <span className="indexRight-five-header-solid">&nbsp;&nbsp;今日发行公告</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-five-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-five-body">
                    <Row>
                        <RightFive />
                    </Row>
                </div>
                <div className="indexRight-six">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-six-header-solid-line">&nbsp;</span>
                            <span className="indexRight-six-header-solid">&nbsp;&nbsp;今日信用评级</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-six-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-six-body">
                    <Row>
                        <RightSix />
                    </Row>
                </div>
                <div className="indexRight-seven">
                    <Row>
                        <Col span={12}>
                            <span className="indexRight-seven-header-solid-line">&nbsp;</span>
                            <span className="indexRight-seven-header-solid">&nbsp;&nbsp;缴款</span>
                        </Col>
                        <Col span={12} style={{textAlign:'right'}}>
                            <span className="indexRight-seven-header-right-solid">&nbsp;&nbsp;更多</span>
                        </Col>
                    </Row>
                </div>
                <div className="indexRight-seven-body">
                    <Row>
                        <RightSeven />
                    </Row>
                </div>
                <div className="indexRight-add-button">
                    <Button className="indexRight-add-button-all">
                        {/* <img src={icomImg} alt="添加" style={{width:'10px',height:'10px'}}/> */}
                        展示模块设置
                    </Button>
                </div>

            </div> 
            </Col>
        )
    }
}

export default IndexRight;