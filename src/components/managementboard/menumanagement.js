import React,{ Component} from 'react';

import { Row, Col } from 'antd';
import {Button,Modal } from 'antd';
import './menumanagement.css';
class Menumanagement extends Component{
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
                菜单管理
            </Button>
            <Modal
                title={ 
                    <span className="menu-title">菜单管理</span>
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
                    <Col span={24}>请选择您需要关注的菜单</Col>
                </Row>
                <Row className="menu-body-one">
                    <Col span={3} className="menu-body-one-text">债券发行</Col>
                    <Col span={3} className="menu-body-one-text">信用风险</Col>
                    <Col span={3} className="menu-body-one-text">发行公告</Col>
                    <Col span={3} className="menu-body-one-text">行权提示</Col>
                    <Col span={3} className="menu-body-one-text">付息对付</Col>
                    <Col span={3} className="menu-body-one-text">基准利率</Col>
                </Row>
                <Row className="menu-body-two">
                    <Col span={4} className="menu-body-one-text">债券查询</Col>
                    <Col span={4} className="menu-body-one-text">行情</Col>
                    <Col span={4} className="menu-body-one-text">债券收藏</Col>
                    <Col span={4} className="menu-body-two-text">ABS债券总览</Col>
                </Row>
                <Row>
                    <Col span={10}></Col>
                    <Col span={4} className="menu-ensure">
                        <button className="menu-ensure-text">确认</button>
                    </Col>
                    <Col span={10}></Col>
                </Row>
            </Modal>
        </div>
        );
    }
}

export default Menumanagement;
