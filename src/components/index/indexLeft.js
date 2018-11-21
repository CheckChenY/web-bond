import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import intl from 'react-intl-universal';
// import {
//     tabLanguange
//   } from '../../redux/actions/header/index';
import {Row,Col,Icon} from 'antd';
import icomImgOne from '../assit/bondnewsone.png';
import icomImgTwo from '../assit/bondnewstwo.png';
import icomImgThree from '../assit/bondnewsthree.png';
import icomImgFour from '../assit/bondnewsfour.png';
import icomImgFive from '../assit/bondnewsfive.png';
import icomImgSix from '../assit/bondnewssix.png';
import icomImgSeven from '../assit/bonddata.png';
import icomImgEight from '../assit/bondquotes.png';
import icomImgNine from '../assit/bondcollect.png';

import './indexLeft.css';

class IndexLeft extends Component{
    render(){
        return(
            <Col span={6}>
                <div className="headerLeft-header" style={{height:'600px',overflowX:'auto'}}>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;常用</span>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="headerLeft-right">
                                <Icon type="setting" style={{color:'#77beff'}} />
                                <span className="headerLeft-right-solid">&nbsp;&nbsp;关注设置</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgOne} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    债券发行
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgTwo} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    信用风险
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-line"/>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;我关注的</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgOne} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    债券发行
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgTwo} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    信用风险
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-line"/>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;债券资讯</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgOne} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    债券发行
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgTwo} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    信用风险
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgThree} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    发行公告
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgFour} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    行权提示
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgFive} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    付息兑付
                                </div>
                            </div>
                        </Col>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgSix} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    缴款
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-line"/>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;债券资料</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgSeven} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    债券查询
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-line"/>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;行情</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgEight} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    行情总览
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr className="hr-line"/>
                    <Row>
                        <Col span={12}>
                            <div className="headerLeft-left">
                                <span className="headerLeft-solid-line">&nbsp;</span>
                                <span className="headerLeft-solid">&nbsp;&nbsp;我的收藏</span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="headerLeft-container">
                                <div className='headerLeft-img'>
                                    <img src={icomImgNine} alt="图标" />
                                </div>
                                <div className='headerLeft-word'>
                                    债券收藏
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}

export default IndexLeft;