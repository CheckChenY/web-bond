import React, { Component } from 'react';
import {Row,Col} from 'antd';
import { Steps, Button, message } from 'antd';
import {Input,Icon} from 'antd';

import Header from '../header/index';
import icomImg from '../assit/refresh.png';
import './returnpassword.css';


const Step = Steps.Step;

const steps = [{
  title: '验证账号',
  contentone:
        <div>
            <div>
                <Input
                    placeholder="请输入账号"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)',borderRight:'1px solid #a2a2a2',lineHeight:'30px',height:'25px',paddingRight:'9px'}}/>}
                    style={{width:'300px',height:'36px',textAlign:'right',marginBottom:'20px'}}
                />
            </div>
            <div>
                <Input
                    placeholder="请输入验证码"
                    prefix={<Icon type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    style={{width:'177px',height:'36px',textAlign:'right',marginRight:'10px'}}
                />
                <Button style={{width:'113px',height:'35px'}}>
                    <img src={icomImg} alt="验证码" className='refresh-img'/>
                </Button>
            </div>
        </div>
}, {
  title: '设置新密码',
  contenttwo:
    <div>
        <div>
            <Input
                placeholder="请输入密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{width:'300px',height:'36px',textAlign:'right',marginBottom:'20px'}}
            />
        </div>
        <div>
            <Input
                placeholder="请重复输入新密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{width:'300px',height:'36px',textAlign:'right',marginBottom:'20px'}}
            />
        </div>
        <div>
            <Input
                placeholder="请输入邮箱验证码"
                prefix={<Icon type="safety-certificate" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={{width:'177px',height:'36px',textAlign:'right',marginRight:'10px'}}
            />
            <Button style={{width:'113px',height:'35px'}}>
                <img src={icomImg} alt="验证码" className='refresh-img'/>
            </Button>
        </div>
    </div>
}, {
  title: '完成',
  contentthree: 
    <div>
        <div style={{marginBottom:'34px'}}>
            <img src={icomImg} alt="成功" style={{width:'155px',height:'155px',backgroundColor:'whitesmoke'}}/>
        </div>
        <div style={{marginBottom:'29px'}}>
            <span>
                修改密码成功！
            </span>
        </div>
    </div>
}];



class Returnpassword extends Component{

    handleSubmitComment (comment) {
        const { tabLanguange } = this.props;
          tabLanguange(comment);
        console.log(comment)
      }

    constructor(props) {
    super(props);
    this.state = {
        current: 0,
    };
    }

    next() {
    const current = this.state.current + 1;
    this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    render(){
        const { current } = this.state;
        return(
            <div>
                <div>
                    <Header onSubmit={this.handleSubmitComment.bind(this)} />
                </div>
                <div style={{backgroundColor:'#f2f2f2',paddingTop:'10px',paddingLeft:'5px',paddingRight:'5px'}}>
                    <div className="returnpassword-head">
                        <Row>
                            <Col span={12}>
                                <span className="returnpassword-header-solid-line">&nbsp;</span>
                                <span className="returnpassword-header-solid">&nbsp;&nbsp;个人密码找回</span>
                            </Col>
                        </Row>
                    </div>
                    <div className="returnpassword-body">
                        <div className="returnpassword-all">
                            <Row>
                                <Col span={3}></Col>
                                <Col span={18} style={{marginTop:'70px'}}>
                                    <div>
                                        <Steps current={current}>
                                            {steps.map(item => <Step key={item.title} title={item.title} />)}
                                        </Steps>
                                        <div className="returnpassword-steps-content">
                                            {steps[current].contentone}
                                            {steps[current].contenttwo}
                                            {steps[current].contentthree}
                                        </div>
                                        <div className="returnpassword-steps-action">
                                            {
                                                current === 0
                                                && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                                            }
                                            {
                                                current === 1
                                                && (
                                                    <Col span={24}>
                                                        <Button type="primary" onClick={() => this.next()}>确认修改</Button>
                                                    </Col>
                                                )
                                            }
                                            {
                                                current === 1
                                                && (
                                                    <Col span={24}>
                                                        <Button className="previous" onClick={() => this.prev()}>上一步</Button>
                                                    </Col>
                                                )
                                            }
                                            {
                                                current === steps.length - 1
                                                && <Button type="primary" onClick={() => message.success('修改成功！')}>完成（5s后自动返回首页）</Button>
                                            }
                                        </div>
                                    </div>
                                </Col>
                                <Col span={3}></Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Returnpassword;