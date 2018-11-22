import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Input } from 'antd';
import { Icon } from 'antd';
import { Select } from 'antd';

// import icomImg from '../../assit/search.png';
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
                <div>
                    <div style={{ display:'inline-block', verticalAlign:'bottom',width:'4px',height:'18px',marginLeft:'10px', borderRadius:'2px', backgroundImage:'linear-gradient(170deg, #77beff, #428fff)'}}></div>
                    <span className='bondsearchleft-header-title'>检索条件</span>
                </div>
                <Row>
                    <Col span={24}>
                        <div className="bondsearch-title-one" style={{borderTop:'1px solid #e8e8e8'}}>
                            <div className="bondsearch-title-name">
                                债券代码或债券名称
                            </div>
                            <div className="bondsearch-title-text">
                                <Input placeholder=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='bondsearch-title-two' style={{borderTop:'1px dashed #e8e8e8'}}>发行时间</div>
                <Row className='bondsearch-title-two-all'>
                    <Col span={11}>
                        <DatePicker defaultValue={moment('2018-11-09', dateFormat)} />
                    </Col>
                    <Col span={2}>
                        <div className="bondsearch-two-text" style={{lineHeight:'32px',width:'100%'}}>至</div>
                    </Col>
                    <Col span={11}>
                        <DatePicker defaultValue={moment('2018-11-09', dateFormat)} />
                    </Col>
                </Row>
                <div className='bondsearch-title-three' style={{marginTop:'5px',borderTop:'1px dashed #e8e8e8'}}></div> 
                    <div className="">
                        <Row className="bondsearch-title-three-head">
                            <Col span={12} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-three-name-one">市场</span>
                            </Col>
                            <Col span={12} style={{paddingBottom:'5px',paddingLeft:'5px'}}>
                                <span className="bondsearch-title-three-name-two">计息方式</span>
                            </Col>
                        </Row>
                        <Row className="bondsearch-title-three-name-body">
                            <Col span={12}>
                                <Select defaultValue="" style={{width:'100%',paddingRight:'5px'}} onChange={handleChange}>
                                    <Option value=""></Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue="" style={{width:'100%',paddingLeft:'5px'}} onChange={handleChange}>
                                    <Option value=""></Option>
                                </Select>
                            </Col>
                        </Row>
                        <Row className="bondsearch-title-three-head">
                            <Col span={12} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-three-name-three">担保方式</span>
                            </Col>
                            <Col span={12} style={{paddingBottom:'5px',paddingLeft:'6px'}}>
                                <span className="bondsearch-title-three-name-four">剩余期限</span>
                            </Col>
                        </Row>
                        <Row className="bondsearch-title-three-name-body">
                            <Col span={12}>
                                <Select defaultValue="" style={{width:'100%',paddingRight:'5px'}} onChange={handleChange}>
                                    <Option value=""></Option>
                                </Select>
                            </Col>
                            <Col span={12} style={{paddingLeft:'5px'}}>
                                <DatePicker placeholder=""  onChange={onChange} />
                            </Col>
                        </Row>
                        <Row className="bondsearch-title-three-head">
                            <Col span={24} style={{paddingBottom:'5px'}}>
                                <span className="bondsearch-title-three-name-five">债券分类</span>
                            </Col>
                        </Row>
                        <Row className="bondsearch-title-three-name-body">
                            <Col span={12}>
                                <Select defaultValue="" style={{width:'100%',paddingRight:'5px'}} onChange={handleChange}>
                                    <Option value=""></Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>
                <div className='bondsearch-title-four' style={{borderTop:'1px dashed #e8e8e8'}}></div>
                <Row style={{paddingLeft:'15px',paddingTop:'10px'}}>
                    <Col span={12}>
                        <div className="bondsearch-title-four-left">
                            <Icon type="plus-circle" style={{ color:'#74aff4' }} />
                            <span className='bondsearch-title-four-left-word'>
                                保存搜索条件
                            </span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="bondsearch-title-four-right">
                            <Icon type="ordered-list" style={{ color:'#74aff4' }} />
                            <span className='bondsearch-title-four-right-word'>
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
                        <div className="bondsearch-title-five">
                            {/* <img src={icomImg} alt="搜索" className='bondsearch-title-seven-img'/> */}
                            <Icon type="search" style={{ color:'#74aff4' }} />
                            <span className='bondsearch-title-five-word'>
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