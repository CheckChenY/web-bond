import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Input } from 'antd';
import { Select } from 'antd';

import icomImg from '../../assit/search.png';
import './bondinforsearch.css';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}


function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

const dateFormat = 'YYYY-MM-DD';

class Bondinforsearch extends Component{


    render(){
        return(
            <div className="bondsearchleft">
                <Row>
                    <Col span={24}>
                        <div className="bondsearchleft-header">
                            <span className="bondsearchleft-header-solid">&nbsp;&nbsp;检索条件</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="bondsearch-title-one">
                            <div className="bondsearch-title-name">
                                债券代码或债券名称
                            </div>
                            <div className="bondsearch-title-text" style={{width:'301px'}}>
                                {/* 债券代码或债券名称 */}
                                <Input placeholder="122123132" style={{width:'301px'}}/>
                            </div>
                            {/* <Row className="bondsearch-title-text">
                                <Col span={24} style={{width:'300px'}}>
                                    <Input placeholder="122123132" />
                                </Col>
                            </Row> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="bondsearch-title-two">
                            <div className="bondsearch-title-name-two">
                                发行时间
                            </div>
                            <Row>
                                <Col span={10} style={{width:'135px'}}>
                                    <DatePicker defaultValue={moment('2018-11-09', dateFormat)} />
                                </Col>
                                <Col span={4} style={{width:'38px'}}>
                                    <span className="bondsearch-title-two-text">至</span>
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
                        <div className="bondsearch-title-three">
                            <Col span={12} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-three-name-left">市场</span>
                            </Col>
                            <Col span={12} style={{paddingBottom:'5px',paddingLeft:'6px'}}>
                                <span className="bondsearch-title-three-name-right">计息方式</span>
                            </Col>
                            <Row className="bondsearch-title-three-name-body">
                                <Col span={12}>
                                    {/* <select className="bondsearch-title-three-name-body-left"></select> */}
                                    <Select defaultValue="" style={{ width: 145 }} onChange={handleChange}>
                                        <Option value=""></Option>
                                    </Select>
                                </Col>
                                <Col span={12}>
                                    {/* <select className="bondsearch-title-three-name-body-right"></select> */}
                                    <Select defaultValue="" style={{ width: 148,paddingLeft:'6px' }} onChange={handleChange}>
                                        <Option value=""></Option>
                                    </Select>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="bondsearch-title-four">
                            <Col span={12} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-four-name-left">担保方式</span>
                            </Col>
                            <Col span={12} style={{paddingBottom:'5px',paddingLeft:'6px'}}>
                                <span className="bondsearch-title-four-name-right">剩余期限</span>
                            </Col>
                            <Row className="bondsearch-title-four-name-body">
                                <Col span={12}>
                                    <Select defaultValue="" style={{ width: 145 }} onChange={handleChange}>
                                        <Option value=""></Option>
                                    </Select>
                                </Col>
                                <Col span={12} style={{width: 142,marginLeft: '6px'}}>
                                    <DatePicker placeholder=""  onChange={onChange} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="bondsearch-title-five">
                            <Col span={24} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-five-name-left">债券分类</span>
                            </Col>
                            <Row className="bondsearch-title-five-name-body">
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
                    <Col span={12}>
                        <div className="bondsearch-title-six-left">
                            <img src={icomImg} alt="保存" className='bondsearch-title-six-img'/>
                            <span className='bondsearch-title-six-word-left'>
                                保存搜索条件
                            </span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="bondsearch-title-six-right">
                            <img src={icomImg} alt="查看" className='bondsearch-title-six-img'/>
                            <span className='bondsearch-title-six-word-right'>
                                查看我的保存条件
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div style={{height:'122px',borderBottom:'1px solid #ebebeb'}}>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={9}></Col>
                    <Col span={6}>
                        <div className="bondsearch-title-seven">
                            <img src={icomImg} alt="搜索" className='bondsearch-title-seven-img'/>
                            <span className='bondsearch-title-seven-word'>
                                搜索
                            </span>
                        </div>
                    </Col>
                    <Col span={9}></Col>
                </Row>
            </div>
        )
    }
}

export default Bondinforsearch;