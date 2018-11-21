import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Select } from 'antd';

import icomImg from '../assit/search.png';
import './leftsearch.css';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const dateFormat = 'YYYY-MM-DD';

class Leftsearch extends Component{


    render(){
        return(
            <div className="leftsearch">
                <Row>
                    <Col span={24}>
                        <div className="leftsearch-header">
                            <span className="leftsearch-header-solid">&nbsp;&nbsp;检索条件</span>
                        </div>
                    </Col>
                </Row>
                <div>
                    <Row>
                        <Col span={24}>
                            <div className="leftsearch-title-one">
                                <div className="leftsearch-title-name-one">
                                    查询时间
                                </div>
                                <Row>
                                    <Col span={10} style={{width:'135px'}}>
                                        <DatePicker defaultValue={moment('2018-11-13', dateFormat)} />
                                    </Col>
                                    <Col span={4} style={{width:'30px'}}>
                                        <span className="leftsearch-title-one-text">至</span>
                                    </Col>
                                    <Col span={10} style={{width:'135px'}}>
                                        <DatePicker defaultValue={moment('2018-11-13', dateFormat)} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div className="leftsearch-title-two">
                                <Col span={24} style={{paddingBottom:'5px'}}>
                                    <span>频率</span>
                                </Col>
                                <Row>
                                    <Col span={24}>
                                        <Select defaultValue="周" style={{ width: 64 }} onChange={handleChange}>
                                            <Option value="周">周</Option>
                                        </Select>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row  className="leftsearch-title-three">
                        <Col span={9}></Col>
                        <Col span={6}>
                            <div>
                                <img src={icomImg} alt="搜索" className='bondsearch-title-seven-img'/>
                                <span className='bondsearch-title-seven-word'>
                                    搜索
                                </span>
                            </div>
                        </Col>
                        <Col span={9}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Leftsearch;