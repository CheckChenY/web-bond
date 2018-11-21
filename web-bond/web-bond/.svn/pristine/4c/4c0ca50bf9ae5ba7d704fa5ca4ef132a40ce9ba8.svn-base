import React,{ Component} from 'react';

import { Row, Col } from 'antd';
import {Button,Modal } from 'antd';
import './select.css';

class Select extends Component{
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
                债券资料总览条件选择
            </Button>
            <Modal
                title={ 
                    <span className="menu-title">我的搜索方案查看</span>
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
                <Row className="menu-head">
                    <Col span={24}>查看已保存的搜索方案</Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                    <Col span={6} className="menu-body-one-text">
                        <span>搜索条件1</span>
                    </Col>
                </Row>
                <Row className="menu-choose">
                    <Col span={3}></Col>
                    <Col span={6} className="menu-ensure">
                        <button className="menu-ensure-text">确认</button>
                    </Col>
                    <Col span={6} className="menu-ensure">
                        <button className="menu-ensure-text">编辑</button>
                    </Col>
                    <Col span={6} className="menu-ensure">
                        <button className="menu-ensure-text">取消</button>
                    </Col>
                    <Col span={3}></Col>
                </Row>
            </Modal>
        </div>
        );
    }
}

export default Select;
