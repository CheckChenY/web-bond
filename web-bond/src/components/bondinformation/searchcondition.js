import React, { Component } from 'react';
import {Row,Col} from 'antd';
// import {Icon} from 'antd';

import { DatePicker } from 'antd';
import moment from 'moment';
import { Checkbox, Button } from 'antd';
import './searchcondition.css';

import icomImg from '../assit/search.png';



function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

// const dateFormat = 'YYYY-MM-DD';

class Searchcondition extends Component{


    render(){
        return(
            <div>
                <div className='searchleft'>
                    <div>
                        <div style={{ display:'inline-block', verticalAlign:'bottom',width:'4px',height:'18px',marginLeft:'10px', borderRadius:'2px', backgroundImage:'linear-gradient(170deg, #77beff, #428fff)'}}></div>
                        <span className='searchleft-header-title'>检索条件</span>
                    </div>
                    <div className='searchleft-title' style={{borderTop:'1px solid #e8e8e8'}}>发行时间</div>
                    <Row style={{marginTop:'10px'}}>
                        <Col span={11}>
                            <DatePicker defaultValue={moment()} format="YYYY/MM/DD" />
                        </Col>
                        <Col span={2}>
                            <div className="searchleft-text" style={{lineHeight:'32px',width:'100%'}}>至</div>
                        </Col>
                        <Col span={11}>
                            <DatePicker defaultValue={moment()} format="YYYY/MM/DD" />
                        </Col>
                    </Row>
                    <div className='searchleft-title' style={{borderTop:'1px dashed #e8e8e8'}}>利率债券</div>          
                    <div style={{marginTop:'10px'}}>
                        <Row>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">国债</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">国开</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">非国开</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">地方债</span>
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'10px'}}>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">NCD</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">其他</span>
                                </Checkbox>
                            </Col>
                        </Row>
                    </div>
                    <div className='searchleft-title' style={{borderTop:'1px dashed #e8e8e8'}}>信用债券</div>
                    <div style={{marginTop:'10px'}}>
                        <Row >
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">短融</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">超短融</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">中票</span>
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'10px'}}>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">企业债</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">公司债</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">FI债</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">ABS</span>
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row style={{marginTop:'10px'}}>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">非国开</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">PPN</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">其他</span>
                                </Checkbox>
                            </Col>
                        </Row>
                    </div>
                    <div className='searchleft-title' style={{borderTop:'1px dashed #e8e8e8'}}>主体评级</div>
                    <div style={{marginTop:'10px'}}>
                        <Row >
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">AAA</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">AA+</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">AA</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">AA-</span>
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row >
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">A+</span>
                                </Checkbox>
                            </Col>
                        </Row>
                    </div>
                    <div className='searchleft-title' style={{borderTop:'1px dashed #e8e8e8'}}>上市地点</div>
                    <div style={{marginTop:'10px'}}>
                        <Row >
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">银行间</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">上交所</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">深交所</span>
                                </Checkbox>
                            </Col>
                            <Col span={6}>
                                <Checkbox 
                                    onChange={onChange}
                                >
                                    <span className="searchleft-text">柜台</span>
                                </Checkbox>
                            </Col>
                        </Row>
                    </div>
                    <Button style={{marginTop:'40px',width:'100%'}} className='searchleft-button'>
                        <div >
                            <img src={icomImg} alt="搜索" style={{width:'14px',height:'14px'}}/>
                            <span style={{letterSpacing:'normal', margin:'4px'}}>
                                搜索
                            </span>
                        </div>
                    </Button>
                </div>
            </div>
        )
    }
}

export default Searchcondition;