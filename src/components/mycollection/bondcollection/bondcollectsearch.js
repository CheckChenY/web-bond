import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Input } from 'antd';
import { Select } from 'antd';

import icomImg from '../../assit/search.png';
import './bondcollectsearch.css';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const dateFormat = 'YYYY-MM-DD';

class Bondcollectsearch extends Component{


    render(){
        return(
            <div>
                    <div className="bondcollectsearchleft">
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearchleft-header">
                                    <span className="bondcollectsearchleft-header-solid">&nbsp;&nbsp;检索条件</span>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearch-title-one">
                                    <div className="bondcollectsearch-title-name">
                                        债券代码或债券名称
                                    </div>
                                    {/* <div className="bondcollectsearch-title-text" style={{width:'301px'}}> */}
                                        {/* <Input placeholder="122123132" style={{width:'301px'}}/> */}
                                    <Input placeholder="122123132" />
                                    {/* </div> */}
                                    {/* <Row className="bondcollectsearch-title-text">
                                        <Col span={11}>
                                            <Input placeholder="122123132" />
                                        </Col>
                                    </Row> */}
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearch-title-two">
                                    <div className="bondcollectsearch-title-name-two">
                                        发行时间
                                    </div>
                                    <Row>
                                        <Col span={10} style={{width:'135px'}}>
                                        {/* <Col span={10}> */}
                                            <DatePicker defaultValue={moment('2018-11-09', dateFormat)} />
                                        </Col>
                                        <Col span={4} style={{width:'35px'}}>
                                            <span className="bondcollectsearch-title-two-text">至</span>
                                        </Col>
                                        <Col span={10} style={{width:'135px'}}>
                                            <DatePicker defaultValue={moment('2018-11-09', dateFormat)} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearch-title-three">
                                    <Col span={12} style={{paddingBottom:'5px'}}>
                                        <span className="bondcollectsearch-title-three-name-left">市场</span>
                                    </Col>
                                    <Col span={12} style={{paddingBottom:'5px',paddingLeft:'6px'}}>
                                        <span className="bondcollectsearch-title-three-name-right">计息方式</span>
                                    </Col>
                                    <Row className="bondcollectsearch-title-three-name-body">
                                        <Col span={12}>
                                            <Select defaultValue="" style={{ width: 145 }} onChange={handleChange}>
                                                <Option value=""></Option>
                                            </Select>
                                        </Col>
                                        <Col span={12}>
                                            <Select defaultValue="" style={{ width: 148 ,paddingLeft:'6px'}} onChange={handleChange}>
                                                <Option value=""></Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearch-title-four">
                                    <Col span={12} style={{paddingBottom:'5px'}}>
                                        <span className="bondcollectsearch-title-four-name-left">担保方式</span>
                                    </Col>
                                    <Col span={12} style={{paddingBottom:'5px',paddingLeft:'6px'}}>
                                        <span className="bondcollectsearch-title-four-name-right">剩余期限</span>
                                    </Col>
                                    <Row className="bondcollectsearch-title-four-name-body">
                                        <Col span={12}>
                                            <Select defaultValue="" style={{ width: 145 }} onChange={handleChange}>
                                                <Option value=""></Option>
                                            </Select>
                                        </Col>
                                        <Col span={12} style={{width: 142,paddingLeft: '6px'}}>
                                            <DatePicker  placeholder=""  onChange={onChange} />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div className="bondcollectsearch-title-five">
                                    <Col span={24} style={{paddingBottom:'5px'}}>
                                        <span className="bondcollectsearch-title-five-name-left">债券分类</span>
                                    </Col>
                                    <Row className="bondcollectsearch-title-five-name-body">
                                        <Col span={12}>
                                            <Select defaultValue="债券分类" style={{ width: 145 }} onChange={handleChange}>
                                                <Option value="债券分类">债券分类</Option>
                                            </Select>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <div style={{height:'147px',borderBottom:'1px solid #ebebeb'}}>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={9}></Col>
                            <Col span={6}>
                                <div className="bondcollectsearch-title-six">
                                    <img src={icomImg} alt="搜索" className='bondcollectsearch-title-six-img'/>
                                    <span className='bondcollectsearch-title-six-word'>
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

export default Bondcollectsearch;