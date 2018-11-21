import React,{ Component} from 'react';

import { Row, Col } from 'antd';
import {Button,Modal } from 'antd';
import {Input,Icon} from 'antd';

// import icomImg from '../../assit/icon.png';
import './editpassword.css';

class Editpassword extends Component{
    state = { visible: false }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    render() {
        return (
        <div>
            <Button type="primary" onClick={this.showModal}>
                修改密码
            </Button>
            <Modal
                title={ 
                    <span className="save-title">修改密码</span>
                }
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                // okText="确认"
                // cancelText="取消"
                destroyOnClose={true}
                // closable={false}
                footer={[
                    null
                ]}
            >
                <Row className="password-head">
                    <Col span={24}>请修改个人密码按保存完成修改</Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Input
                            placeholder="请输入旧密码"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.userNameInput = node}
                            style={{width:'300px',marginBottom:'20px',textAlign:'right'}}
                        />
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Input
                            placeholder="请输入新密码"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.userNameInput = node}
                            style={{width:'300px',marginBottom:'20px',textAlign:'right'}}
                        />
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Input
                            placeholder="请重复输入新密码"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            ref={node => this.userNameInput = node}
                            style={{width:'300px',textAlign:'right'}}
                        />
                    </Col>
                    <Col span={4}></Col>
                </Row>
                <Row style={{marginTop:'60px'}}>
                    <Col span={4}></Col>
                    <Col span={16} >
                        <button className="save" style={{width:'300px'}}>确认</button>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </Modal>
        </div>
        );
    }
}

export default Editpassword;
